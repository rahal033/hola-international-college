import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  isAxcelerateConfigured,
  findOrCreateContact,
  submitCourseEnquiry,
  lookupCourse,
  sendFormsubmitFallback,
} from "./_axcelerate";

/**
 * Handles submissions from the website /signup (application) form.
 *
 * Application data is richer than a contact-form enquiry: includes DOB,
 * address, course selection, study mode, preferred intake.
 *
 * Behaviour same as /api/lead:
 *   - aXcelerate path: find-or-create contact (full demographic), log
 *     enquiry against the chosen course.
 *   - Fallback path: email admissions@ via Formsubmit (cc info@).
 *   - Always mirrors to email so Miranda sees the application
 *     immediately without logging into aXcelerate.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (req.body || {}) as Record<string, string>;

  if (body._honey) {
    return res.status(200).json({ ok: true });
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const dob = (body.dob || "").trim();
  const education = (body.education || "").trim();
  const street = (body.street || "").trim();
  const city = (body.city || "").trim();
  const state = (body.state || "").trim();
  const postcode = (body.postcode || "").trim();
  const country = (body.country || "Australia").trim();
  const course = (body.course || "").trim();
  const mode = (body.mode || "").trim();
  const intake = (body.intake || "").trim();

  if (!firstName || !lastName || !email || !phone || !course) {
    return res.status(400).json({
      error: "firstName, lastName, email, phone and course are required",
    });
  }

  const fallbackFields = {
    firstName,
    lastName,
    email,
    phone,
    dob,
    education,
    street,
    city,
    state,
    postcode,
    country,
    course,
    mode,
    intake,
  };
  const fallbackSubject = `Course application: ${course} (${firstName} ${lastName})`;
  const recipient = "admissions@holainternationalcollege.com.au";

  if (!isAxcelerateConfigured()) {
    const ok = await sendFormsubmitFallback(recipient, fallbackSubject, {
      ...fallbackFields,
      _cc: "info@holainternationalcollege.com.au",
    });
    return res.status(ok ? 200 : 502).json({ ok, channel: "formsubmit" });
  }

  // aXcelerate path
  try {
    const contactID = await findOrCreateContact({
      givenName: firstName,
      surname: lastName,
      emailAddress: email,
      mobilephone: phone,
      dob: dob || undefined,
      address1: street || undefined,
      city: city || undefined,
      state: state || undefined,
      postcode: postcode || undefined,
      country: country || undefined,
    });

    if (!contactID) {
      const ok = await sendFormsubmitFallback(
        recipient,
        `[aXcelerate FAILED] ${fallbackSubject}`,
        { ...fallbackFields, _cc: "info@holainternationalcollege.com.au" }
      );
      return res.status(200).json({ ok, channel: "formsubmit-fallback" });
    }

    const courseLookup = lookupCourse(course);

    const enquirySubmitted = await submitCourseEnquiry({
      contactID,
      comments: [
        `Course application via website.`,
        `Course: ${course}`,
        `Study mode: ${mode}`,
        `Preferred intake: ${intake}`,
        `Highest education: ${education}`,
      ]
        .filter(Boolean)
        .join("\n"),
      type: courseLookup.type,
      courseID: courseLookup.courseID,
    });

    // Mirror to email for immediate visibility, with aXcelerate contactID
    // so Miranda has a quick link back to the aXcelerate record.
    await sendFormsubmitFallback(recipient, fallbackSubject, {
      ...fallbackFields,
      axcelerateContactID: contactID,
      _cc: "info@holainternationalcollege.com.au",
    });

    return res.status(200).json({
      ok: true,
      channel: "axcelerate",
      contactID,
      enquirySubmitted,
    });
  } catch (err) {
    const ok = await sendFormsubmitFallback(
      recipient,
      `[aXcelerate ERROR] ${fallbackSubject}`,
      {
        ...fallbackFields,
        error: err instanceof Error ? err.message : "unknown error",
        _cc: "info@holainternationalcollege.com.au",
      }
    );
    return res.status(200).json({ ok, channel: "formsubmit-fallback-error" });
  }
}
