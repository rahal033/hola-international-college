import { Link } from "react-router-dom";
import {
  Award,
  Clock,
  Users,
  Briefcase,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

const stats = [
  { value: "5", label: "Nationally Recognised Courses" },
  { value: "3", label: "Specialist Areas" },
  { value: "12", label: "Intakes per Year" },
  { value: "AQF", label: "Aligned Qualifications" },
];

const features = [
  {
    icon: Award,
    title: "Nationally Recognised Training",
    body: "All our qualifications sit under the Australian Qualifications Framework (AQF) and are recognised by aged-care, disability and community-service employers Australia-wide.",
  },
  {
    icon: Clock,
    title: "Monthly Intakes, Flexible Study",
    body: "Full-time, part-time and blended delivery. New cohort every month — start when you're ready, not when the academic calendar says.",
  },
  {
    icon: Users,
    title: "Industry-Experienced Trainers",
    body: "Our trainers come from the floor — registered nurses, support coordinators, disability advocates — not from textbooks. You'll learn the way the work is actually done.",
  },
  {
    icon: Briefcase,
    title: "Real Placements in SA",
    body: "We partner with aged-care providers, disability services and community organisations across South Australia for hands-on placement hours that count toward your qualification.",
  },
];

const homeCourses = [
  {
    code: "CHC33021",
    title: "Certificate III in Individual Support (Ageing)",
    duration: "12 months",
  },
  {
    code: "CHC33021",
    title: "Certificate III in Individual Support (Disability)",
    duration: "12 months",
  },
  {
    code: "CHC52021",
    title: "Diploma of Community Services",
    duration: "18 months",
  },
  {
    code: "HLTAID011",
    title: "First Aid + CPR",
    duration: "1 day",
  },
  {
    code: "Skill Set",
    title: "Medication Training",
    duration: "1–2 days",
  },
];

export default function Home() {
  usePageMeta(
    "Hola International College — Aged Care, Disability & Community Services Training in Adelaide",
    "Hola International College in Elizabeth South, Adelaide delivers nationally recognised CHC qualifications in aged care (CHC33021), disability support, community services (CHC52021) and first aid (HLTAID011). Monthly intakes, real placements across South Australia."
  );

  useStructuredData(buildBreadcrumb([["Home", "/"]]));

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-tan-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-forest-100 ring-1 ring-white/20">
              <MapPin size={14} className="text-tan-300" /> Elizabeth South, Adelaide SA
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Train for a career in care, in Adelaide.
            </h1>
            <p className="mt-6 text-lg text-forest-100 sm:text-xl">
              Hola International College delivers nationally recognised CHC qualifications in
              aged care, disability support, community services and first aid. Small cohorts,
              monthly intakes, hands-on placements with care providers across South Australia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-forest-700 shadow-lg transition hover:bg-forest-50 hover:shadow-xl"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:info@holainternationalcollege.com.au?subject=Course%20advice"
                className="inline-flex items-center gap-2 rounded-lg bg-tan-300 px-6 py-3 text-base font-semibold text-forest-900 shadow-lg transition hover:bg-tan-200 hover:shadow-xl"
              >
                <MessageCircle size={18} /> Talk to a course advisor
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Browse courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-forest-700 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-gray-600 sm:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses preview */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Courses
              </h2>
              <p className="mt-3 max-w-xl text-base text-gray-600">
                Five nationally recognised qualifications in aged care, disability support,
                community services and first aid — delivered in Elizabeth South.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
            >
              See all course details <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeCourses.map((c) => (
              <Link
                key={c.title}
                to="/courses"
                className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md bg-forest-100 px-2 py-1 text-xs font-semibold tracking-wide text-forest-700">
                  {c.code}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-forest-700">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{c.duration}</p>
                </div>
                <ArrowRight size={16} className="mt-1 text-gray-300 group-hover:text-forest-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hola */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Hola International College
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're a South Australian RTO built around how care work actually gets done.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-100 text-forest-700">
                  <f.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International students */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-tan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-tan-500">
              For International Students
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Studying in Australia? We can help.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We support applicants from across Asia and the Pacific. Our International Student
              Office can guide you through CRICOS, visa, English-language requirements
              (typically IELTS 5.5 or equivalent), and pre-arrival logistics in Adelaide.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              CRICOS provider code coming soon — registration in progress.
            </p>
            <div className="mt-6">
              <a
                href="mailto:international@holainternationalcollege.com.au?subject=International%20student%20enquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 hover:shadow-md"
              >
                Email the International Office <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-paper p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-forest-800">What you'll need</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-tan-300" /> Year 12 or equivalent secondary qualification</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-tan-300" /> English proficiency: IELTS 5.5 (or equivalent PTE / TOEFL)</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-tan-300" /> Valid passport &amp; suitable Australian student visa</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-tan-300" /> National Police Check completed before placement</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-tan-300" /> Overseas Student Health Cover (OSHC)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 px-6 py-12 text-center text-white shadow-lg sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to start?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-100">
            Apply for the next intake, or talk to us first if you're not sure which course
            fits. Either way, you'll hear back within two business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-forest-700 shadow-md transition hover:bg-forest-50"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+61466331055"
              className="inline-flex items-center gap-2 rounded-lg bg-tan-300 px-6 py-3 font-semibold text-forest-900 shadow-md transition hover:bg-tan-200"
            >
              <Phone size={18} /> +61 466 331 055
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Email us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
