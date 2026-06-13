# aXcelerate API integration

Two Vercel serverless functions handle form submissions:

- `POST /api/lead` — wired to the website `/contact` form
- `POST /api/application` — wired to the website `/signup` form

Shared helpers live in `_axcelerate.ts`.

## Activation: paste 3 env vars in Vercel

When the official aXcelerate account is provisioned, paste these three
environment variables into Vercel project settings → Environment Variables.

| Variable | Example | Purpose |
|---|---|---|
| `AXCELERATE_BASE_URL` | `https://holainternationalcollege.app.axcelerate.com/api` | Per-tenant base URL (drop `.app.` to `.stg.` for staging) |
| `AXCELERATE_API_TOKEN` | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` | API key from aXcelerate (header `apitoken`) |
| `AXCELERATE_WS_TOKEN` | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` | Web service token (header `wstoken`) |

Optional:

| Variable | Purpose |
|---|---|
| `AXCELERATE_DEFAULT_SOURCE_CODE_ID` | Default SourceCodeID to attach to new contacts (the "where did they come from" field). Look up the available source code IDs in aXcelerate admin. |
| `AXCELERATE_DEFAULT_NOTE_CODE_ID` | Default noteCodeID to use when logging course enquiries. If omitted aXcelerate uses a system default. |

After setting them, redeploy via:

```
npx vercel deploy --prod
```

…or just push to `main` — the next auto-deploy picks up the new env vars.

## Behaviour before activation

While the env vars are absent, both `/api/lead` and `/api/application` fall
back to Formsubmit (the original delivery path). Forms keep working with
zero downtime during the cutover.

## Behaviour after activation

For each form submission:

1. Find an existing aXcelerate contact by email
2. If not found, create a new contact with the supplied demographics
3. Log a course enquiry note against the contact
4. Mirror the submission to email (admissions@ / info@) so Miranda sees
   the application immediately without logging into aXcelerate
5. Return success to the user

If any step fails, the form falls back to email-only — no submission is lost.

## Course mapping

`_axcelerate.ts` exports a `COURSE_MAP` constant. When the aXcelerate account
is set up, fill in the course names → aXcelerate course IDs and types:

```ts
const COURSE_MAP: Record<string, { type: "w" | "p" | "el"; courseID: string }> = {
  "Certificate III in Individual Support (Ageing) - CHC33021": { type: "p", courseID: "1234" },
  // ... etc
};
```

Until the map is filled in, enquiries are logged as general enquiries with
the course name in the note comments — fully usable, just not linked to a
specific course record in aXcelerate.
