import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

type FaqItem = { q: string; a: string };
type FaqCategory = { name: string; items: FaqItem[] };

const categories: FaqCategory[] = [
  {
    name: "Admissions & Enrollment",
    items: [
      {
        q: "What are the entry requirements?",
        a: "Most courses require applicants to be 18 years or older with a Year 10 equivalent education, sound English language skills (IELTS 5.5 or equivalent for international students) and a willingness to undertake a National Police Check before placement.",
      },
      {
        q: "How do I apply?",
        a: "You can apply online via our Apply Now page. Our admissions team will be in touch within 2 business days to confirm your details, discuss your course choice and walk you through next steps.",
      },
      {
        q: "When are the intakes?",
        a: "We run monthly intakes throughout the year for most qualifications. First Aid and short-course skill sets are scheduled fortnightly - check the Courses page for the next available dates.",
      },
      {
        q: "Can international students enrol?",
        a: "Yes. We welcome international students and can support you through the CRICOS visa process. Contact our International Student Office for tailored guidance.",
      },
    ],
  },
  {
    name: "Fees & Payment",
    items: [
      {
        q: "How much do courses cost?",
        a: "Course fees vary by qualification and intake. A detailed fee schedule is provided with your offer letter. Payment plans are available for most full qualifications.",
      },
      {
        q: "Do you offer scholarships?",
        a: "Yes - we offer a limited number of merit and equity scholarships each intake. Eligibility and application details are available from the admissions team.",
      },
      {
        q: "Are VET Student Loans available?",
        a: "Selected diploma-level courses are approved for VET Student Loans for eligible domestic students. Speak with our team to check whether your course qualifies.",
      },
    ],
  },
  {
    name: "Study Options & Support",
    items: [
      {
        q: "What study modes do you offer?",
        a: "We offer full-time, part-time and blended (online plus on-campus) delivery for most qualifications. Short courses and skill sets are typically delivered face-to-face.",
      },
      {
        q: "How does online learning work?",
        a: "All online learning is delivered through our Learning Portal. You can access learning materials, assessments and trainer support 24/7, with scheduled live sessions each week. The platform we use is being finalised - details confirmed at enrolment.",
      },
      {
        q: "What student support is available?",
        a: "Every student is assigned a dedicated Student Support Officer. We also provide academic support, language and literacy support, careers advice and mental wellbeing referrals.",
      },
      {
        q: "How do I access the Learning Portal?",
        a: "Once enrolled, you'll receive login details for the Learning Portal by email. You'll also be able to sign in from the Login page on this site as soon as your account is provisioned.",
      },
    ],
  },
  {
    name: "Recognition & Pathways",
    items: [
      {
        q: "Are your qualifications nationally recognised?",
        a: "Yes. All our qualifications are accredited under the Australian Qualifications Framework (AQF) and recognised by employers Australia-wide.",
      },
      {
        q: "Can I get Recognition of Prior Learning (RPL)?",
        a: "Absolutely. If you have prior work experience or formal study, our team will help you assemble an RPL portfolio that may credit you toward parts of your qualification.",
      },
      {
        q: "Do your courses lead to university?",
        a: "Yes. Our Diploma of Community Services has articulation pathways into bachelor degrees in Social Work, Community Services and related fields at partner universities.",
      },
    ],
  },
];

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-base font-medium text-ink">{item.q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-ink/50 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm leading-relaxed text-ink/55">{item.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  usePageMeta(
    "FAQ - Admissions, Fees, Intakes | Hola International College Adelaide",
    "Answers to common questions about RTO admissions, course fees, monthly intakes, study modes, Recognition of Prior Learning (RPL), VET Student Loans and university pathways at Hola International College, Elizabeth South SA."
  );

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  useStructuredData([
    buildBreadcrumb([
      ["Home", "/"],
      ["FAQ", "/faq"],
    ]),
    faqPageSchema,
  ]);

  return (
    <>
      <section className="bg-forest-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Frequently asked questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-100 sm:text-xl">
            Everything our students and applicants ask most often - admissions, fees,
            study modes, recognition, pathways.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-sm bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-xl font-bold text-forest-800 sm:text-2xl">{cat.name}</h2>
              <div>
                {cat.items.map((it) => (
                  <FaqRow key={it.q} item={it} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-sm bg-forest-700 px-6 py-12 text-center text-white shadow-lg sm:px-12">
          <h2 className="text-3xl font-bold">Still Have Questions?</h2>
          <p className="mx-auto mt-3 max-w-xl text-forest-100">
            Our admissions team is here to help. Get in touch and we'll respond within one
            business day.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-sm bg-white px-6 py-3 font-semibold text-forest-700 shadow-md transition hover:bg-forest-50"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
