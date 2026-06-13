/**
 * aXcelerate API client - shared helpers for Vercel serverless functions.
 *
 * Activation pattern:
 *   - When AXCELERATE_BASE_URL, AXCELERATE_API_TOKEN, AXCELERATE_WS_TOKEN
 *     are all set in Vercel env, calls go to aXcelerate.
 *   - When any are missing, isAxcelerateConfigured() returns false and the
 *     calling route falls back to Formsubmit (existing behaviour).
 *   - Activation = paste 3 env vars into Vercel and redeploy. No code changes.
 *
 * Auth scheme per docs: two headers (apitoken, wstoken) on every request.
 * Body for POST endpoints is application/x-www-form-urlencoded, NOT JSON.
 */

export const AXCELERATE_BASE_URL = process.env.AXCELERATE_BASE_URL || "";
export const AXCELERATE_API_TOKEN = process.env.AXCELERATE_API_TOKEN || "";
export const AXCELERATE_WS_TOKEN = process.env.AXCELERATE_WS_TOKEN || "";
export const AXCELERATE_DEFAULT_SOURCE_CODE_ID =
  process.env.AXCELERATE_DEFAULT_SOURCE_CODE_ID || "";
export const AXCELERATE_DEFAULT_NOTE_CODE_ID =
  process.env.AXCELERATE_DEFAULT_NOTE_CODE_ID || "";

export function isAxcelerateConfigured(): boolean {
  return Boolean(
    AXCELERATE_BASE_URL && AXCELERATE_API_TOKEN && AXCELERATE_WS_TOKEN
  );
}

type RequestOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  query?: Record<string, string | number | undefined>;
  formData?: Record<string, string | number | boolean | undefined>;
};

async function axcelerateRequest<T = unknown>({
  method,
  path,
  query,
  formData,
}: RequestOptions): Promise<{ ok: boolean; status: number; data: T | null; error?: string }> {
  if (!isAxcelerateConfigured()) {
    return { ok: false, status: 0, data: null, error: "aXcelerate not configured" };
  }

  const url = new URL(`${AXCELERATE_BASE_URL.replace(/\/$/, "")}${path}`);
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
    }
  }

  const headers: Record<string, string> = {
    apitoken: AXCELERATE_API_TOKEN,
    wstoken: AXCELERATE_WS_TOKEN,
    Accept: "application/json",
  };

  let body: string | undefined;
  if (formData) {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(formData)) {
      if (v !== undefined && v !== null && v !== "") params.set(k, String(v));
    }
    body = params.toString();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  try {
    const res = await fetch(url.toString(), { method, headers, body });
    const text = await res.text();
    let data: T | null = null;
    try {
      data = text ? (JSON.parse(text) as T) : null;
    } catch {
      data = null;
    }
    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        data,
        error: `aXcelerate ${method} ${path} returned ${res.status}`,
      };
    }
    return { ok: true, status: res.status, data };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      data: null,
      error: err instanceof Error ? err.message : "fetch failed",
    };
  }
}

/**
 * Search for an existing contact by email.
 * Returns the first matching contactID, or null if not found.
 */
export async function findContactByEmail(email: string): Promise<number | null> {
  if (!email) return null;
  const res = await axcelerateRequest<Array<{ CONTACTID?: number; contactID?: number }>>({
    method: "GET",
    path: "/contacts/search",
    query: { q: email, displayLength: 5 },
  });
  if (!res.ok || !Array.isArray(res.data) || res.data.length === 0) return null;
  const first = res.data[0];
  return Number(first.CONTACTID ?? first.contactID) || null;
}

type CreateContactPayload = {
  givenName: string;
  surname: string;
  emailAddress?: string;
  mobilephone?: string;
  phone?: string;
  dob?: string; // YYYY-MM-DD
  address1?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  sourceCodeID?: string;
};

/**
 * Create a new contact. Returns the new contactID, or null on failure.
 */
export async function createContact(p: CreateContactPayload): Promise<number | null> {
  const res = await axcelerateRequest<{ CONTACTID?: number; contactID?: number }>({
    method: "POST",
    path: "/contact/",
    formData: {
      givenName: p.givenName,
      surname: p.surname,
      emailAddress: p.emailAddress,
      mobilephone: p.mobilephone,
      phone: p.phone,
      dob: p.dob,
      address1: p.address1,
      city: p.city,
      state: p.state,
      postcode: p.postcode,
      country: p.country,
      SourceCodeID: p.sourceCodeID || AXCELERATE_DEFAULT_SOURCE_CODE_ID || undefined,
    },
  });
  if (!res.ok || !res.data) return null;
  return Number(res.data.CONTACTID ?? res.data.contactID) || null;
}

/**
 * Find existing contact by email, or create one if not found.
 */
export async function findOrCreateContact(p: CreateContactPayload): Promise<number | null> {
  if (p.emailAddress) {
    const existing = await findContactByEmail(p.emailAddress);
    if (existing) return existing;
  }
  return createContact(p);
}

type EnquiryPayload = {
  contactID: number;
  comments?: string;
  type?: "w" | "p" | "el"; // workshop, accredited program, e-learning
  courseID?: string;
  noteCodeID?: string;
  emailTo?: string;
};

/**
 * Log a course enquiry against a contact. If type+courseID are omitted,
 * this records a general enquiry note on the contact.
 */
export async function submitCourseEnquiry(p: EnquiryPayload): Promise<boolean> {
  const res = await axcelerateRequest({
    method: "POST",
    path: "/course/enquire",
    formData: {
      contactID: p.contactID,
      noteCodeID: p.noteCodeID || AXCELERATE_DEFAULT_NOTE_CODE_ID || "",
      comments: p.comments,
      type: p.type,
      ID: p.courseID,
      emailTo: p.emailTo,
    },
  });
  return res.ok;
}

/**
 * Map a website course string to aXcelerate (type, ID) once we know the
 * tenant's actual course IDs. Until then, returns { type: undefined,
 * courseID: undefined } so the enquiry is logged as a general enquiry
 * with the course name in the comments.
 *
 * To activate: fill in the COURSE_MAP below with the aXcelerate course
 * IDs once the account is provisioned.
 */
const COURSE_MAP: Record<string, { type: "w" | "p" | "el"; courseID: string }> = {
  // "Certificate III in Individual Support (Ageing) - CHC33021": { type: "p", courseID: "1234" },
  // "Certificate III in Individual Support (Disability) - CHC33021": { type: "p", courseID: "1235" },
  // "Diploma of Community Services - CHC52021": { type: "p", courseID: "1236" },
  // "First Aid + CPR - HLTAID011 / HLTAID009": { type: "w", courseID: "1237" },
  // "Medication Training": { type: "w", courseID: "1238" },
};

export function lookupCourse(name: string | undefined):
  | { type: "w" | "p" | "el"; courseID: string }
  | { type: undefined; courseID: undefined } {
  if (!name) return { type: undefined, courseID: undefined };
  return COURSE_MAP[name] || { type: undefined, courseID: undefined };
}

/**
 * Best-effort fallback: forward the form payload to Formsubmit so the
 * email path still works while aXcelerate isn't configured / errored.
 * The recipient inbox is passed by the caller.
 */
export async function sendFormsubmitFallback(
  recipient: string,
  subject: string,
  fields: Record<string, string | number | undefined>
): Promise<boolean> {
  try {
    const body = {
      ...fields,
      _subject: subject,
      _template: "table",
      _captcha: "false",
    };
    const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Formsubmit's bot-detection rejects server-to-server requests
        // without an Origin/Referer. We satisfy it with the production host.
        Origin: "https://www.holainternationalcollege.com.au",
        Referer: "https://www.holainternationalcollege.com.au/",
        "User-Agent": "Mozilla/5.0 (compatible; HolaCollegeServer/1.0)",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) return false;
    // Formsubmit returns 200 with {"success":"false"} on errors instead of HTTP errors
    try {
      const json = (await res.json()) as { success?: string | boolean };
      return json.success === true || json.success === "true";
    } catch {
      return true; // body wasn't JSON but HTTP was OK
    }
  } catch {
    return false;
  }
}
