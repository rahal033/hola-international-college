import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";
import HeroIllustration from "../components/HeroIllustration";

const stats = [
  { value: "5", label: "Nationally recognised courses" },
  { value: "3", label: "Specialist areas" },
  { value: "12", label: "Intakes per year" },
  { value: "AQF", label: "Aligned qualifications" },
];

const features = [
  {
    n: "01",
    eyebrow: "Recognition",
    title: "Nationally recognised under the AQF",
    body: "All our qualifications sit under the Australian Qualifications Framework. Your CHC certificate from Hola is the same legal document recognised by aged-care and disability employers Australia-wide — Adelaide, Sydney, Perth, anywhere.",
  },
  {
    n: "02",
    eyebrow: "Cadence",
    title: "Monthly intakes, no academic calendar",
    body: "We don't make you wait until February or July. Full-time, part-time and blended delivery, with a fresh cohort starting every single month — so the right time to enrol is when life is ready, not when the calendar permits it.",
  },
  {
    n: "03",
    eyebrow: "Practitioners",
    title: "Trainers from the floor, not the textbook",
    body: "Our trainers are registered nurses, support coordinators, disability advocates and aged-care veterans who still work the sector. You'll learn how the work is actually done — including the parts the textbook leaves out.",
  },
  {
    n: "04",
    eyebrow: "Placement",
    title: "Real placements with South Australian providers",
    body: "We partner with aged-care residences, NDIS providers and community organisations across metropolitan Adelaide and the northern suburbs. Your placement hours happen with people, in real settings — counting toward your qualification and your résumé from day one.",
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
    "Hola International College — Aged Care, Disability & Community Services Training in Adelaide",
    "Hola International College in Elizabeth South, Adelaide delivers nationally recognised CHC qualifications in aged care (CHC33021), disability support, community services (CHC52021) and first aid (HLTAID011). Monthly intakes, real placements across South Australia."
  );

  useStructuredData(buildBreadcrumb([["Home", "/"]]));

  return (
    <>
      {/* HERO — editorial split, oversized serif headline */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-tan-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,400px)] lg:gap-16 lg:px-8 lg:py-36">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-forest-100 ring-1 ring-white/20">
                <MapPin size={14} className="text-tan-300" /> Elizabeth South, Adelaide SA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tan-300/20 px-4 py-1 text-sm font-medium text-tan-300 ring-1 ring-tan-300/30">
                <Sparkles size={12} /> Established 2023 · Pty Ltd
              </span>
            </div>

            <h1 className="font-display text-[2.75rem] font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Train for a career in{" "}
              <span className="italic text-tan-300" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                care
              </span>
              ,
              <br />
              <span className="text-forest-100">in Adelaide.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-100 sm:text-xl">
              Hola International College delivers nationally recognised CHC qualifications
              in aged care, disability support, community services and first aid. Small
              cohorts, monthly intakes, real placements with care providers across
              South Australia.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-forest-700 shadow-lg shadow-forest-900/40 transition hover:shadow-xl hover:shadow-forest-900/60"
              >
                Apply Now
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:info@holainternationalcollege.com.au?subject=Course%20advice"
                className="group inline-flex items-center gap-2 rounded-full bg-tan-300 px-7 py-3.5 text-base font-semibold text-forest-900 shadow-lg shadow-forest-900/40 transition hover:bg-tan-200 hover:shadow-xl"
              >
                <MessageCircle size={18} /> Talk to a course advisor
              </a>
              <Link
                to="/courses"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Browse courses
                <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden items-center justify-center lg:flex"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroIllustration className="h-auto w-full max-w-md" />
          </motion.div>
        </div>

      </section>

      {/* STATS — paper background, serif numerals, divider rules */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 flex items-baseline justify-between">
            <p className="font-display text-sm uppercase tracking-[0.22em] text-forest-700">
              The College, in numbers
            </p>
            <span className="hidden font-display text-sm italic text-forest-700/60 sm:inline">
              May 2026
            </span>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="border-l border-forest-700/20 pl-5 sm:pl-6"
              >
                <div className="font-display text-5xl font-light leading-none text-forest-700 sm:text-6xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm font-medium leading-snug text-forest-900/70 sm:text-base">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COURSES preview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] md:items-end"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="mb-4 font-display text-sm uppercase tracking-[0.22em] text-forest-700">
                Our courses
              </p>
              <h2 className="font-display text-4xl font-light leading-tight text-forest-900 sm:text-5xl">
                Five qualifications.{" "}
                <span className="italic text-forest-700">One purpose.</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-gray-600 md:text-right">
              Aged care, disability support, community services and first aid — every
              one nationally recognised, every one delivered in Elizabeth South.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {homeCourses.map((c) => (
              <motion.div
                key={c.title}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  to="/courses"
                  className="group flex h-full items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/5"
                >
                  <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md bg-forest-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-forest-700 transition group-hover:bg-forest-600 group-hover:text-white">
                    {c.code}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium leading-snug text-gray-900 transition group-hover:text-forest-700">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-xs uppercase tracking-wider text-gray-400">
                      {c.duration}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-0.5 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest-700"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900"
            >
              See full course details
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY HOLA — editorial alternating rows */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-display text-sm uppercase tracking-[0.22em] text-forest-700">
              Why Hola International College
            </p>
            <h2 className="font-display text-4xl font-light leading-[1.05] text-forest-900 sm:text-5xl">
              A South Australian RTO built around{" "}
              <span className="italic text-forest-700">how care work actually gets done.</span>
            </h2>
          </motion.div>

          <div className="space-y-12 sm:space-y-16">
            {features.map((f, i) => (
              <motion.div
                key={f.n}
                className={`grid grid-cols-1 gap-6 border-t border-forest-700/15 pt-10 md:grid-cols-[140px_1fr_minmax(0,420px)] md:items-start md:gap-10`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <span className="font-display text-5xl font-light leading-none text-forest-700/40 sm:text-6xl">
                    {f.n}
                  </span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-tan-500">
                    {f.eyebrow}
                  </p>
                </div>
                <h3 className="font-display text-2xl font-light leading-tight text-forest-900 sm:text-3xl">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 font-display text-sm uppercase tracking-[0.22em] text-tan-500">
              For International Students
            </p>
            <h2 className="font-display text-4xl font-light leading-tight text-forest-900 sm:text-5xl">
              Studying in Australia?{" "}
              <span className="italic text-forest-700">We can help.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              We support applicants from across Asia and the Pacific. Our International
              Student Office can guide you through CRICOS, visa, English-language
              requirements (typically IELTS 5.5 or equivalent), and pre-arrival
              logistics in Adelaide.
            </p>
            <p className="mt-3 text-sm italic text-gray-500">
              CRICOS provider code coming soon — registration in progress.
            </p>
            <div className="mt-8">
              <a
                href="mailto:international@holainternationalcollege.com.au?subject=International%20student%20enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-forest-700 hover:shadow-lg"
              >
                Email the International Office
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-paper p-8 shadow-sm ring-1 ring-forest-700/10 sm:p-10"
          >
            <h3 className="font-display text-xl font-medium text-forest-800">What you'll need</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              {[
                "Year 12 or equivalent secondary qualification",
                "English proficiency: IELTS 5.5 (or equivalent PTE / TOEFL)",
                "Valid passport & suitable Australian student visa",
                "National Police Check completed before placement",
                "Overseas Student Health Cover (OSHC)",
              ].map((req, i) => (
                <li key={req} className="flex gap-3 border-b border-forest-700/10 pb-4 last:border-0 last:pb-0">
                  <span className="font-display text-sm italic text-tan-500">0{i + 1}</span>
                  <span className="flex-1">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-forest-900 py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-tan-300 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-forest-600 blur-3xl" />
        </div>
        <motion.div
          className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-5xl font-light leading-[1.05] sm:text-6xl">
            Ready to{" "}
            <span className="italic text-tan-300">start?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-forest-100">
            Apply for the next intake, or talk to us first if you're not sure which
            course fits. Either way, you'll hear back within two business days.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-forest-700 shadow-md transition hover:bg-forest-50 hover:shadow-xl"
            >
              Apply Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+61466331055"
              className="group inline-flex items-center gap-2 rounded-full bg-tan-300 px-7 py-3.5 font-semibold text-forest-900 shadow-md transition hover:bg-tan-200"
            >
              <Phone size={18} /> +61 466 331 055
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Email us
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
