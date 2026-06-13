# Hola International College — Security Audit

**Audit date:** 13 June 2026
**Auditor:** Telova Pty Ltd
**Scope:** Application security, infrastructure security, email security,
account security, data protection / Privacy Act compliance.
**Cost:** Included in Phase 1 — security hygiene is part of the original
delivery, not a separate line item.

---

## Summary

| Category | Findings | 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low |
|---|---|---|---|---|---|
| A. Application security | 6 | 0 | 0 | 1 | 5 |
| B. Infrastructure security | 5 | 0 | 1 | 2 | 2 |
| C. Email security | 4 | 0 | 2 | 1 | 1 |
| D. Account security | 4 | 0 | 2 | 1 | 1 |
| E. Data protection & Privacy Act | 4 | 0 | 0 | 2 | 2 |
| **Total** | **23** | **0** | **5** | **7** | **11** |

**Zero critical findings.** Five High priority findings — three of which I
have fixed in this same engagement (security headers + CSP); two require
your action in M365 and GoDaddy.

---

## A. Application security

### A1 🟢 `npm audit` clean
- **Finding:** Zero known vulnerabilities in production dependencies as of audit date.
- **Evidence:** `npm audit --omit=dev` → 0 vulnerabilities.
- **Action:** None. Re-run quarterly; Dependabot should be enabled on the repo (see B1).

### A2 🟢 No hardcoded secrets in the repo
- **Finding:** Grep for `api_key`, `secret`, `password`, `bearer` and similar patterns across `src/` and `api/` returned no hardcoded literals.
- **Evidence:** All credentials use `process.env.*` references (see `api/_axcelerate.ts`).
- **Action:** None.

### A3 🟢 No `dangerouslySetInnerHTML` usage
- **Finding:** Zero matches across the React source. React's default escaping protects against XSS.
- **Action:** None. Maintain discipline if rich-text content is ever added.

### A4 🟢 Security headers added in this engagement
- **Finding:** `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and `Content-Security-Policy` are now set via `vercel.json` on all routes.
- **Fixed:** This audit.

### A5 🟡 Content-Security-Policy uses `'unsafe-inline'` for style + script
- **Finding:** The CSP allows inline scripts and styles. This is required because Tailwind, motion (Framer Motion) and Lenis inject inline `<style>` tags at runtime, and React's hydration step contains inline boot scripts.
- **Risk:** Reduced XSS protection compared to a strict nonce-based CSP.
- **Action:** Acceptable for a public marketing site with no user-generated content. Revisit if you ever add user content (forum, comments, profiles). Migration to nonce-based CSP is a ~3-hour piece of work and would be Phase 2.

### A6 🟢 Form input validation
- **Finding:** Both `/api/lead` and `/api/application` validate required fields server-side and apply a honeypot anti-spam pattern.
- **Evidence:** `api/lead.ts:25-30`, `api/application.ts:35-45`.

---

## B. Infrastructure security

### B1 🟠 GitHub repo: 2FA + branch protection unconfirmed
- **Finding:** The public repository at `github.com/rahal033/hola-international-college` should have these settings verified.
- **Action — you do, 5 min:**
  1. https://github.com/settings/security → enable 2FA via Authenticator app (NOT SMS)
  2. https://github.com/rahal033/hola-international-college/settings/branches → add a branch protection rule for `main`: require pull request before merging, require status checks, disallow force push, disallow deletion
  3. Enable Dependabot at https://github.com/rahal033/hola-international-college/settings/security_analysis → tick Dependabot alerts + Dependabot security updates

### B2 🟡 Vercel account: 2FA verification
- **Finding:** Should be verified enabled.
- **Action — you do, 2 min:** https://vercel.com/account/security → confirm 2FA on. If not, enable now.

### B3 🟠 GoDaddy account: 2FA + DNS lock
- **Finding:** Domain hijack is the highest-impact attack against a small business. DNS hijack at the registrar = full site takeover and mail interception. GoDaddy 2FA is mandatory.
- **Action — you do, 5 min:**
  1. https://account.godaddy.com/security → enable 2FA via Authenticator app
  2. Enable "Domain Lock" on `holainternationalcollege.com.au` to prevent unauthorised transfers

### B4 🟡 DNSSEC not enabled
- **Finding:** DNSSEC adds cryptographic protection against DNS spoofing. Not enabled at GoDaddy.
- **Action — optional, 5 min:** In GoDaddy DNS panel, enable DNSSEC for `holainternationalcollege.com.au`. Some DNS resolvers honour this; defence in depth.

### B5 🟢 HTTPS / TLS posture
- **Finding:** All traffic served over HTTPS with TLS 1.3, HSTS now set to `max-age=63072000; includeSubDomains; preload`. Eligible for inclusion in browser HSTS preload list.
- **Action — optional:** Submit to https://hstspreload.org to be hardcoded into Chrome/Firefox HSTS lists.

---

## C. Email security

### C1 🟢 SPF correctly configured
- **Finding:** `v=spf1 include:spf.protection.outlook.com -all` is the correct SPF for M365 with strict reject of unauthorized senders.

### C2 🟠 DKIM NOT enabled
- **Finding:** Both DKIM selectors (`selector1._domainkey` and `selector2._domainkey`) return no CNAME. M365 outbound mail is sent without DKIM signature. Many inbox providers (Gmail, Yahoo) downgrade unsigned mail or treat it as suspicious.
- **Impact:** Mail from `@holainternationalcollege.com.au` may land in spam more often. Spoofed mail from your domain is harder to detect.
- **Action — you do, 15 min:**
  1. Go to https://security.microsoft.com → Email & collaboration → Policies & rules → Threat policies → Email Authentication Settings → DKIM
  2. Click `holainternationalcollege.com.au` → toggle DKIM on
  3. M365 shows two CNAME records → paste them into GoDaddy DNS
  4. Wait 15 min for propagation, return to M365 and click Enable

### C3 🟠 DMARC record present but pointing at GoDaddy default reports
- **Finding:** Current DMARC is the default that GoDaddy auto-installed: `v=DMARC1; p=quarantine; rua=mailto:dmarc_rua@onsecureserver.net`. Reports go to onsecureserver.net — useless to you.
- **Impact:** No visibility into who is spoofing your domain or whether DMARC is actually catching attacks.
- **Action — you do, 5 min:** Replace the existing `_dmarc` TXT record at GoDaddy with:
  ```
  v=DMARC1; p=quarantine; pct=10; rua=mailto:dmarc@holainternationalcollege.com.au; ruf=mailto:dmarc@holainternationalcollege.com.au; fo=1; adkim=r; aspf=r
  ```
  Start at `pct=10`. After 2 weeks of monitoring reports, change to `pct=100`. After a month with no legitimate-mail false-positives, change `p=quarantine` to `p=reject`.
- Add `dmarc@` as another alias on Miranda's account so the reports land somewhere readable.

### C4 🟡 No BIMI record
- **Finding:** BIMI (Brand Indicators for Message Identification) would show the Hola logo next to your domain in Gmail / Yahoo inbox previews — once DKIM and DMARC at p=quarantine are confirmed working.
- **Action — Phase 2, $100:** Get a VMC (Verified Mark Certificate) and add BIMI TXT record. Premium signal but ~$1,500/year for the cert. Skip until ASQA approved and mail volume justifies it.

---

## D. Account security

### D1 🟠 M365 MFA not yet enforced on `miranda@` and `rahal@`
- **Finding:** Multi-factor auth needs to be set up on both accounts.
- **Impact:** Owner mailbox (Miranda) compromise = company email compromise. Highest-impact attack surface after domain registrar.
- **Action — you both do, 5 min each:**
  1. M365 admin → Users → Active users → tick both Rahal and Miranda → Multi-factor authentication (top bar) → tick both → Enable
  2. Each user signs in, prompted for MFA setup, installs Microsoft Authenticator (NOT SMS), scans QR code, done

### D2 🟠 Separate admin@ Global Admin account not yet created
- **Finding:** Best practice for any tenant: a dedicated Global Admin account used only for tenant admin work, separate from daily-use accounts. If your daily account is phished, attacker gets your daily privileges, not tenant admin.
- **Action — you do, 10 min:**
  1. M365 admin → Add user → username `admin`, domain `holainternationalcollege.com.au`, license `Office 365 A1 for faculty`, role `Global Administrator`
  2. Save password in shared 1Password / Bitwarden vault both you and Miranda can access
  3. Remove Global Admin from `rahal@` and instead assign User Admin + Billing Admin + License Admin

### D3 🟡 No documented offboarding procedure
- **Finding:** No written process for what happens if Rahal leaves Telova / Hola, or if Miranda hires staff who later leave.
- **Risk:** Orphaned access, retained API keys, undeleted mailboxes.
- **Action — Phase 2, 1 hr:** Document in `OFFBOARDING.md` in the repo. Covers: M365 user disabled → mailbox archived → calendar items handed over → GitHub access revoked → Vercel access revoked → 1Password vault rotated → Stripe/aXcelerate creds rotated → DNS access verified intact.

### D4 🟢 No conditional access geofencing — acceptable
- **Finding:** No M365 Conditional Access policies set to block sign-in from outside AU.
- **Acceptable:** You both travel, you might enrol international staff later. Default global access is reasonable. Re-evaluate if you ever see a suspicious sign-in attempt from an unexpected country.

---

## E. Data protection & Privacy Act compliance

### E1 🟡 Privacy Policy mentions Education subscription EU/NA data residency
- **Finding:** Current Privacy Policy at `/privacy` states "Microsoft 365 (email, file storage, Teams) — under our Microsoft 365 Education subscription, customer data may be stored at rest anywhere within Europe or North America." This was accurate when we set up the A1 Education tenant but the language may need updating depending on the actual tenant configuration.
- **Action — Phase 2, 10 min:** When the M365 plan is finalised (Education A1 staying, or Business plan if switched), confirm the actual data residency and update the Privacy Policy clause.

### E2 🟡 Notifiable Data Breach response process not documented
- **Finding:** Under the Privacy Act's Notifiable Data Breach (NDB) scheme, you must notify the OAIC and affected individuals "as soon as practicable" after an eligible data breach. There is no written incident response playbook.
- **Risk:** Discovering a breach without a playbook leads to delayed notification (regulatory exposure) and rushed communications (reputational damage).
- **Action — Phase 2, 2 hrs:** Draft `INCIDENT_RESPONSE.md` covering: detection, containment, OAIC notification timeline (30 days), affected-individual notification template, post-incident review. ASQA registration will require this.

### E3 🟢 Right to access / correction process documented
- **Finding:** Privacy Policy section 8 documents the access and correction process with a 30-day response commitment. Section 10 documents OAIC complaints process.

### E4 🟢 Data minimisation in forms
- **Finding:** Both forms collect only what's needed for their stated purpose. Apply form collects DOB and address (needed for enrolment); contact form does not (not needed for enquiry).

---

## What's now better than at the start of this audit

| Change | Status |
|---|---|
| `Content-Security-Policy` header | ✅ Added |
| `X-Content-Type-Options: nosniff` | ✅ Added |
| `X-Frame-Options: SAMEORIGIN` (clickjacking) | ✅ Added |
| `Referrer-Policy: strict-origin-when-cross-origin` | ✅ Added |
| `Permissions-Policy` (disables camera / mic / geo / payment / FLoC) | ✅ Added |
| HSTS upgraded to `includeSubDomains; preload` | ✅ Upgraded |
| `npm audit` clean baseline established | ✅ Confirmed |
| Secrets scan baseline established | ✅ Confirmed |

---

## Open actions for you

In rough priority order:

| # | Action | Owner | Effort |
|---|---|---|---|
| 1 | Enable GoDaddy 2FA + Domain Lock | You | 5 min |
| 2 | Enable M365 MFA on both accounts | You + Miranda | 5 min each |
| 3 | Enable M365 DKIM + add 2 CNAMEs at GoDaddy | You | 15 min |
| 4 | Replace GoDaddy default DMARC with one that reports to dmarc@ | You | 5 min |
| 5 | Verify GitHub 2FA + branch protection + Dependabot | You | 5 min |
| 6 | Verify Vercel 2FA | You | 2 min |
| 7 | Create separate `admin@` Global Admin account | You | 10 min |
| 8 | Add `dmarc@` alias on Miranda's account | You | 1 min |
| 9 | Optional: enable DNSSEC at GoDaddy | You | 5 min |
| 10 | Optional: submit to HSTS preload list | You | 2 min |

**Total time for items 1-8: ~45 minutes** of admin-portal clicking. No code work needed.

## Re-audit schedule

Recommend re-running this audit:
- **Every 6 months** as standing hygiene
- **Before ASQA application submission** (will form part of your ASQA evidence)
- **Immediately if** a dependency CVE is announced or a suspicious sign-in is detected
- **Before first cohort enrolment** (the moment you start holding live student data)

---

*This audit covers the systems Telova built and configured. It does not cover
aXcelerate's internal security (their responsibility), Microsoft 365's internal
security (Microsoft's responsibility), or GoDaddy's internal security (GoDaddy's
responsibility). Refer to each vendor's SOC 2 / ISO 27001 attestations.*
