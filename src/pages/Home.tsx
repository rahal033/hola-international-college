import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Phone,
  ArrowUpRight,
} from "../components/icons";
import { motion } from "motion/react";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";
import Counter from "../components/Counter";

const stats = [
  { value: "5", label: "Nationally recognised courses" },
  { value: "3", label: "Specialist areas" },
  { value: "12", label: "Intakes per year" },
  { value: "AQF", label: "Aligned qualifications" },
];

const features = [
  {
    n: "01",
    title: "Nationally recognised under the AQF",
    body: "All our qualifications sit under the Australian Qualifications Framework. Your CHC certificate from Hola is the same legal document recognised by aged-care and disability employers Australia-wide.",
  },
  {
    n: "02",
    title: "Monthly intakes, no academic calendar",
    body: "Full-time, part-time and blended delivery, with a fresh cohort starting every month. Start when life is ready, not when the calendar permits.",
  },
  {
    n: "03",
    title: "Trainers from the floor, not the textbook",
    body: "Registered nurses, support coordinators, disability advocates and aged-care veterans who still work the sector. You'll learn how the work is actually done.",
  },
  {
    n: "04",
    title: "Real placements with South Australian providers",
    body: "We partner with aged-care residences, NDIS providers and community organisations across metropolitan Adelaide and the northern suburbs.",
  },
];

const homeCourses = [
  { code: "CHC33021", title: "Certificate III in Individual Support (Ageing)", duration: "12 months" },
  { code: "CHC33021", title: "Certificate III in Individual Support (Disability)", duration: "12 months" },
  { code: "CHC52021", title: "Diploma of Community Services", duration: "18 months" },
  { code: "HLTAID011", title: "First Aid + CPR", duration: "1 day" },
  { code: "Skill Set", title: "Medication Training", duration: "1–2 days" },
];

export default function Home() {
  usePageMeta(
    "Hola International College - Aged Care, Disability & Community Services Training in Adelaide",
    "Hola International College in Elizabeth South, Adelaide delivers nationally recognised CHC qualifications in aged care (CHC33021), disability support, community services (CHC52021) and first aid (HLTAID011). Monthly intakes, real placements across South Australia."
  );

  useStructuredData(buildBreadcrumb([["Home", "/"]]));

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-forest-100 ring-1 ring-white/20">
                <MapPin size={14} className="text-forest-100" /> Elizabeth South, Adelaide SA
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Train for a career in care, in Adelaide.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-100 sm:text-xl">
              Hola International College delivers nationally recognised CHC qualifications
              in aged care, disability support, community services and first aid. Small
              cohorts, monthly intakes, real placements with care providers across
              South Australia.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-forest-700 transition hover:bg-forest-50"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Browse courses
              </Link>
              <a
                href="mailto:info@holainternationalcollege.com.au?subject=Course%20advice"
                className="inline-flex items-center gap-2 px-2 py-3 text-base font-medium text-white underline-offset-4 hover:underline"
              >
                Talk to a course advisor
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="border-l border-forest-700/20 pl-5 sm:pl-6"
              >
                <div className="font-display text-4xl font-light leading-none text-forest-700 sm:text-5xl">
                  {Number.isFinite(Number(s.value)) ? (
                    <Counter to={Number(s.value)} duration={1.4} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="mt-3 text-sm font-medium leading-snug text-gray-600 sm:text-base">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COURSES preview */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] md:items-end">
            <h2 className="font-display text-3xl font-light leading-tight text-gray-900 sm:text-4xl">
              Our courses
            </h2>
            <p className="text-base leading-relaxed text-gray-600 md:text-right">
              Five nationally recognised qualifications in aged care, disability support,
              community services and first aid, delivered in Elizabeth South.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeCourses.map((c) => (
              <Link
                key={c.title}
                to="/courses"
                className="group flex h-full items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 transition hover:border-forest-300 hover:shadow-sm"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-forest-700/70">
                    {c.code}
                  </p>
                  <h3 className="mt-1.5 font-medium leading-snug text-gray-900 group-hover:text-forest-700">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-xs uppercase tracking-wider text-gray-400">
                    {c.duration}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-0.5 text-gray-300 transition group-hover:text-forest-700"
                />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900"
            >
              See full course details
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY HOLA */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 max-w-2xl font-display text-3xl font-light leading-tight text-gray-900 sm:text-4xl">
            A South Australian RTO built around how care work actually gets done.
          </h2>

          <div className="space-y-10 sm:space-y-12">
            {features.map((f, i) => (
              <motion.div
                key={f.n}
                className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-8 md:grid-cols-[80px_1fr_minmax(0,420px)] md:items-start md:gap-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <span className="font-display text-3xl font-light leading-none text-gray-400 sm:text-4xl">
                  {f.n}
                </span>
                <h3 className="font-display text-xl font-medium leading-tight text-gray-900 sm:text-2xl">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-light leading-tight text-gray-900 sm:text-4xl">
              Studying in Australia? We can help.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              We support applicants from across Asia and the Pacific. Our International
              Student Office can guide you through CRICOS, visa, English-language
              requirements (typically IELTS 5.5 or equivalent), and pre-arrival
              logistics in Adelaide.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              CRICOS provider code coming soon — registration in progress.
            </p>
            <div className="mt-8">
              <a
                href="mailto:international@holainternationalcollege.com.au?subject=International%20student%20enquiry"
                className="inline-flex items-center gap-2 rounded-md bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-700"
              >
                Email the International Office
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-8 sm:p-10">
            <h3 className="font-display text-xl font-medium text-gray-900">What you'll need</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              {[
                "Year 12 or equivalent secondary qualification",
                "English proficiency: IELTS 5.5 (or equivalent PTE / TOEFL)",
                "Valid passport & suitable Australian student visa",
                "National Police Check completed before placement",
                "Overseas Student Health Cover (OSHC)",
              ].map((req, i) => (
                <li
                  key={req}
                  className="flex gap-3 border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-gray-400">0{i + 1}</span>
                  <span className="flex-1">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-forest-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-forest-100">
            Apply for the next intake, or talk to us first if you're not sure which
            course fits. Either way, you'll hear back within two business days.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-forest-700 transition hover:bg-forest-50"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+61466331055"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={18} /> +61 466 331 055
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Email us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
