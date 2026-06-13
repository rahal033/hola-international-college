import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  isAxcelerateConfigured,
  findOrCreateContact,
  submitCourseEnquiry,
  sendFormsubmitFallback,
} from "./_axcelerate";

/**
 * Handles submissions from the website /contact form.
 *
 * Behaviour:
 *   1. Validate + honeypot check.
 *   2. If aXcelerate configured: find-or-create contact, log enquiry note
 *      with the user's message. Fall back to Formsubmit if either step fails.
 *   3. If aXcelerate not configured: send via Formsubmit (current behaviour).
 *   4. Always return success to the user unless honeypot tripped.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (req.body || {}) as Record<string, string>;

  // Honeypot - bots usually fill all fields including hidden ones
  if (body._honey) {
    return res.status(200).json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const subject = (body.subject || "General").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  const [givenName, ...rest] = name.split(/\s+/);
  const surname = rest.join(" ") || givenName;

  const fallbackFields = {
    name,
    email,
    phone,
    subject,
    message,
  };
  const fallbackSubject = `Website contact: ${subject}`;

  if (!isAxcelerateConfigured()) {
    const ok = await sendFormsubmitFallback(
      "info@holainternationalcollege.com.au",
      fallbackSubject,
      fallbackFields
    );
    return res.status(ok ? 200 : 502).json({ ok, channel: "formsubmit" });
  }

  // aXcelerate path
  try {
    const contactID = await findOrCreateContact({
      givenName,
      surname,
      emailAddress: email,
      mobilephone: phone,
    });

    if (!contactID) {
      // aXcelerate didn't return an ID - fall back so the lead isn't lost
      const ok = await sendFormsubmitFallback(
        "info@holainternationalcollege.com.au",
        `[aXcelerate FAILED] ${fallbackSubject}`,
        fallbackFields
      );
      return res.status(200).json({ ok, channel: "formsubmit-fallback" });
    }

    const enquirySubmitted = await submitCourseEnquiry({
      contactID,
      comments: `Subject: ${subject}\n\n${message}`,
    });

    // Even if the enquire note failed, the contact was created.
    // Best practice: belt-and-braces - also mirror to Formsubmit so Miranda
    // can see the message immediately without logging into aXcelerate.
    await sendFormsubmitFallback(
      "info@holainternationalcollege.com.au",
      fallbackSubject,
      { ...fallbackFields, axcelerateContactID: contactID }
    );

    return res.status(200).json({
      ok: true,
      channel: "axcelerate",
      contactID,
      enquirySubmitted,
    });
  } catch (err) {
    const ok = await sendFormsubmitFallback(
      "info@holainternationalcollege.com.au",
      `[aXcelerate ERROR] ${fallbackSubject}`,
      {
        ...fallbackFields,
        error: err instanceof Error ? err.message : "unknown error",
      }
    );
    return res.status(200).json({ ok, channel: "formsubmit-fallback-error" });
  }
}
