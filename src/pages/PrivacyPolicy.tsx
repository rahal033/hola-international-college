import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

const lastUpdated = "9 May 2026";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy — Hola International College",
    "How Hola International College Pty Ltd collects, uses, stores and discloses your personal information under the Australian Privacy Principles."
  );

  useStructuredData(
    buildBreadcrumb([
      ["Home", "/"],
      ["Privacy Policy", "/privacy"],
    ])
  );

  return (
    <>
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-forest-100">
            How we collect, use, store and protect your personal information.
          </p>
          <p className="mt-2 text-sm text-tan-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <article className="mx-auto max-w-3xl space-y-8 px-4 text-base leading-relaxed text-gray-800 sm:px-6 lg:px-8">
          <Block title="1. Who we are">
            <p>
              <strong>Hola International College Pty Ltd</strong> (ABN pending; trading as
              Hola International College) is a registered Australian private company based at
              179B Philip Hwy, Elizabeth South SA 5112. We are working toward registration as
              a Registered Training Organisation (RTO) with the Australian Skills Quality
              Authority (ASQA), and we are committed to protecting the personal information
              of our prospective and enrolled students, staff and contacts.
            </p>
            <p>
              This Privacy Policy explains how we comply with the{" "}
              <em>Privacy Act 1988</em> (Cth) and the 13 Australian Privacy Principles (APPs).
            </p>
          </Block>

          <Block title="2. What information we collect">
            <p>The personal information we may collect includes:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Name, date of birth, contact details (email, phone, postal address)</li>
              <li>Government identifiers required for VET enrolment, including your{" "}
                <strong>Unique Student Identifier (USI)</strong></li>
              <li>Education history and previous qualifications (for RPL and credit transfer)</li>
              <li>Identification documents (e.g. driver's licence, passport for international students)</li>
              <li>Visa and citizenship details (for international students)</li>
              <li>Health and disability information you choose to disclose to support your study</li>
              <li>National Police Check results (where required for placement)</li>
              <li>Course progress, assessment results and attendance records</li>
              <li>Payment and billing details (we do not store full credit card numbers)</li>
              <li>Website analytics (anonymised — see section 9)</li>
            </ul>
          </Block>

          <Block title="3. How we collect your information">
            <p>We collect personal information directly from you through:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Online application and contact forms on this website</li>
              <li>Email, phone and in-person enquiries</li>
              <li>Enrolment paperwork and supporting documentation you provide</li>
              <li>Assessment submissions and Canvas LMS activity once enrolled</li>
              <li>Placement supervisor reports during work-based learning</li>
            </ul>
            <p>
              In limited cases we may collect information from third parties — for example,
              previous training providers (with your consent for credit transfer), or your
              education agent if you applied through one.
            </p>
          </Block>

          <Block title="4. Why we collect and use your information">
            <p>We use your personal information to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Process your enrolment and deliver your training and assessment</li>
              <li>Issue qualifications, statements of attainment and academic transcripts</li>
              <li>Communicate with you about your studies, intake dates, fees and outcomes</li>
              <li>Meet our regulatory and statistical reporting obligations to ASQA, the
                National Centre for Vocational Education Research (NCVER) and the
                Department of Employment and Workplace Relations (under AVETMISS)</li>
              <li>Maintain student records for the periods required by law (typically up to
                30 years for assessment evidence)</li>
              <li>Process payments and manage accounts</li>
              <li>Provide student support, welfare referrals and complaints handling</li>
              <li>Improve our courses, website and services</li>
            </ul>
          </Block>

          <Block title="5. Who we share your information with">
            <p>We disclose your personal information only as necessary, including to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li><strong>ASQA</strong> and other regulators, on request or as required by law</li>
              <li><strong>NCVER</strong> for AVETMISS statistical reporting (de-identified
                where possible)</li>
              <li><strong>training.gov.au</strong> for issuing nationally-recognised
                qualifications</li>
              <li><strong>USI Registry System</strong> to verify your USI</li>
              <li><strong>Placement employers</strong> when you undertake work-based learning,
                and only the information necessary for that placement</li>
              <li><strong>Service providers</strong> we engage to operate our infrastructure
                (e.g. Microsoft 365 for email, Vercel for website hosting, Canvas LMS for
                course delivery)</li>
              <li>Law enforcement or courts where required by law</li>
            </ul>
            <p>
              We do not sell your personal information and we do not disclose it for
              direct marketing purposes by third parties.
            </p>
          </Block>

          <Block title="6. Overseas data transfers">
            <p>
              Some of the services we use store data outside Australia. In particular:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li><strong>Microsoft 365</strong> (email, file storage, Teams) — under our
                Microsoft 365 Education subscription, customer data may be stored at rest
                anywhere within Europe or North America</li>
              <li><strong>Canvas LMS</strong> (course delivery) — operated by Instructure Inc.,
                primarily in the United States</li>
              <li><strong>Vercel</strong> (website hosting) — global edge network with
                Australian region preferred</li>
            </ul>
            <p>
              We take reasonable steps to ensure overseas recipients handle your information
              in accordance with the APPs. By providing personal information to us through
              this website or our enrolment processes, you consent to this overseas
              disclosure.
            </p>
          </Block>

          <Block title="7. How we store and secure your information">
            <p>
              We hold personal information in secure cloud-based systems with access
              controls, encryption in transit (TLS) and encryption at rest. Access is
              restricted to authorised staff who need it for their role. We retain
              information only for as long as required for the purpose collected or as
              required by law.
            </p>
          </Block>

          <Block title="8. Accessing and correcting your information">
            <p>
              You have the right to request access to the personal information we hold about
              you, and to ask us to correct it if it is inaccurate. To make a request, email{" "}
              <a
                href="mailto:info@holainternationalcollege.com.au"
                className="font-semibold text-forest-700 underline"
              >
                info@holainternationalcollege.com.au
              </a>
              . We will respond within 30 days.
            </p>
          </Block>

          <Block title="9. Cookies and website analytics">
            <p>
              This website may use cookies and analytics tools to understand how visitors use
              the site (e.g. which pages are popular, how users navigate). Analytics data is
              aggregated and de-identified. You can disable cookies in your browser; some
              site features may be affected.
            </p>
          </Block>

          <Block title="10. Complaints">
            <p>
              If you believe we have breached the Australian Privacy Principles or
              mishandled your personal information, please contact us first at{" "}
              <a
                href="mailto:info@holainternationalcollege.com.au"
                className="font-semibold text-forest-700 underline"
              >
                info@holainternationalcollege.com.au
              </a>{" "}
              — we will investigate and respond within 30 days.
            </p>
            <p>
              If you are not satisfied with our response, you may lodge a complaint with the{" "}
              <strong>Office of the Australian Information Commissioner (OAIC)</strong>:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Website: <a href="https://www.oaic.gov.au" className="font-semibold text-forest-700 underline" rel="noopener noreferrer" target="_blank">oaic.gov.au</a></li>
              <li>Phone: 1300 363 992</li>
              <li>Post: GPO Box 5288, Sydney NSW 2001</li>
            </ul>
          </Block>

          <Block title="11. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date
              at the top reflects the most recent change. We encourage you to review this
              page periodically.
            </p>
          </Block>

          <Block title="12. Contact us">
            <p>
              For any questions about this Privacy Policy or how we handle your personal
              information, contact:
            </p>
            <address className="not-italic">
              <strong>Hola International College Pty Ltd</strong><br />
              179B Philip Hwy, Elizabeth South SA 5112<br />
              Phone:{" "}
              <a href="tel:+61466331055" className="font-semibold text-forest-700 underline">
                +61 466 331 055
              </a><br />
              Email:{" "}
              <a
                href="mailto:info@holainternationalcollege.com.au"
                className="font-semibold text-forest-700 underline"
              >
                info@holainternationalcollege.com.au
              </a>
            </address>
          </Block>

          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            This policy is provided for transparency under the Australian Privacy
            Principles. It does not constitute legal advice. Hola International College
            recommends you seek independent legal advice if you have specific privacy
            concerns.{" "}
            <Link to="/" className="text-forest-700 underline">Back to homepage</Link>.
          </p>
        </article>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-forest-800 sm:text-2xl">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
