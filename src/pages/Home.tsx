import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Phone } from "../components/icons";
import { motion } from "motion/react";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";
import Counter from "../components/Counter";

/* "Settle" - the single site-wide reveal: slower and heavier than a
   default fade so it reads deliberate. */
const settle = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

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
  { n: "01", code: "CHC33021", title: "Certificate III in Individual Support (Ageing)", short: "Individual Support (Ageing)", duration: "12 months" },
  { n: "02", code: "CHC33021", title: "Certificate III in Individual Support (Disability)", short: "Individual Support (Disability)", duration: "12 months" },
  { n: "03", code: "CHC52021", title: "Diploma of Community Services", short: "Community Services", duration: "18 months" },
  { n: "04", code: "HLTAID011", title: "First Aid + CPR", short: "First Aid + CPR", duration: "1 day" },
  { n: "05", code: "Skill set", title: "Medication Training", short: "Medication Training", duration: "1–2 days" },
];

export default function Home() {
  usePageMeta(
    "Hola International College - Aged Care, Disability & Community Services Training in Adelaide",
    "Hola International College in Elizabeth South, Adelaide delivers nationally recognised CHC qualifications in aged care (CHC33021), disability support, community services (CHC52021) and first aid (HLTAID011). Monthly intakes, real placements across South Australia."
  );

  useStructuredData(buildBreadcrumb([["Home", "/"]]));

  return (
    <>
      {/* HERO - flat plum field, display type, prospectus course index */}
      <section className="bg-forest-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/15 pt-14 sm:pt-20" />
          <div className="grid grid-cols-1 gap-14 pb-16 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20">
            <div>
              <div className="h-0.5 w-12 bg-tan-300" aria-hidden="true" />
              <h1 className="font-display-xl mt-8 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.02] tracking-[-0.025em]">
                Train for a career in care, in Adelaide.
              </h1>
              <p className="mt-10 max-w-xl text-xl leading-[1.6] text-white/80">
                Hola International College delivers nationally recognised CHC
                qualifications in aged care, disability support, community services
                and first aid. Small cohorts, monthly intakes, real placements with
                care providers across South Australia.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-base font-semibold text-forest-700 transition-colors duration-300 hover:bg-paper"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:info@holainternationalcollege.com.au?subject=Course%20advice"
                  className="group inline-flex items-center gap-2 text-base font-medium text-white"
                >
                  <span className="border-b border-white/40 pb-0.5 transition-colors duration-300 group-hover:border-white">
                    Talk to a course advisor
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Prospectus contents - course index */}
            <nav aria-label="Courses" className="hidden self-end lg:block">
              <p className="mb-2 text-sm text-white/60">Courses</p>
              {homeCourses.map((c) => (
                <Link
                  key={c.n}
                  to="/courses"
                  className="group flex items-baseline gap-4 border-t border-white/15 py-3 transition-colors duration-300 hover:bg-white/5"
                >
                  <span className="font-display text-[15px] text-white/50">{c.n}</span>
                  <span className="flex-1 text-sm text-white/80 transition-colors duration-300 group-hover:text-white">
                    {c.short}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/70"
                  />
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-white/15 pb-14 sm:pb-16" />
        </div>
      </section>

      {/* STATS - minor band */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } },
            }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="border-l border-ink/10 pl-5 sm:pl-6"
              >
                <div className="font-display text-[clamp(3.5rem,4.5vw,4.75rem)] font-light leading-none text-forest-700">
                  {Number.isFinite(Number(s.value)) ? (
                    <Counter to={Number(s.value)} duration={1.4} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="mt-3 text-sm font-medium leading-snug text-ink/55 sm:text-base">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COURSES - ledger rows */}
      <section className="bg-white py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...settle} className="mb-14 max-w-2xl">
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[1.08] tracking-[-0.015em] text-ink">
              Our courses
            </h2>
            <p className="mt-5 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/70">
              Five nationally recognised qualifications in aged care, disability
              support, community services and first aid, delivered in Elizabeth South.
            </p>
          </motion.div>

          <motion.div {...settle}>
            {homeCourses.map((c) => (
              <Link
                key={c.n}
                to="/courses"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-t border-ink/10 py-5 transition-colors duration-300 hover:bg-paper sm:grid-cols-[3rem_1fr_auto_auto] sm:gap-8"
              >
                <span className="font-display text-[15px] text-ink/40">{c.n}</span>
                <h3 className="font-display text-[1.375rem] font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-forest-600">
                  {c.title}
                </h3>
                <span className="hidden text-[13px] text-ink/50 sm:block">
                  {c.code} · {c.duration}
                </span>
                <ArrowRight
                  size={18}
                  className="hidden self-center text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-forest-600 sm:block"
                />
              </Link>
            ))}
            <div className="border-t border-ink/10" />
          </motion.div>

          <motion.div {...settle} className="mt-10">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-600 transition-colors duration-300 hover:text-forest-800"
            >
              See full course details
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY HOLA */}
      <section className="bg-paper py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...settle}
            className="mb-14 max-w-2xl font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[1.08] tracking-[-0.015em] text-ink"
          >
            A South Australian RTO built around how care work actually gets done.
          </motion.h2>

          <div className="space-y-10 sm:space-y-12">
            {features.map((f, i) => (
              <motion.div
                key={f.n}
                className="grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 md:grid-cols-[80px_1fr_minmax(0,420px)] md:items-start md:gap-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-3xl font-light leading-none text-ink/40 sm:text-4xl">
                  {f.n}
                </span>
                <h3 className="font-display text-[1.375rem] font-medium leading-snug text-ink sm:text-2xl">
                  {f.title}
                </h3>
                <p className="text-[1.0625rem] leading-[1.7] text-ink/70">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="bg-white py-24 sm:py-32 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <motion.div {...settle}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[1.08] tracking-[-0.015em] text-ink">
              Studying in Australia? We can help.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/70">
              We support applicants from across Asia and the Pacific. Our International
              Student Office can guide you through CRICOS, visa, English-language
              requirements (typically IELTS 5.5 or equivalent), and pre-arrival
              logistics in Adelaide.
            </p>
            <p className="mt-3 text-sm text-ink/50">
              CRICOS provider code coming soon — registration in progress.
            </p>
            <div className="mt-8">
              <a
                href="mailto:international@holainternationalcollege.com.au?subject=International%20student%20enquiry"
                className="inline-flex items-center gap-2 rounded-sm bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-forest-700"
              >
                Email the International Office
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div {...settle} className="border-l-2 border-forest-600 bg-paper p-8 sm:p-10">
            <h3 className="font-display text-[1.375rem] font-medium text-ink">What you'll need</h3>
            <ul className="mt-6 space-y-4 text-sm text-ink/70">
              {[
                "Year 12 or equivalent secondary qualification",
                "English proficiency: IELTS 5.5 (or equivalent PTE / TOEFL)",
                "Valid passport & suitable Australian student visa",
                "National Police Check completed before placement",
                "Overseas Student Health Cover (OSHC)",
              ].map((req, i) => (
                <li
                  key={req}
                  className="flex gap-3 border-b border-ink/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-ink/40">0{i + 1}</span>
                  <span className="flex-1">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA - left-biased against a contact column */}
      <section className="bg-forest-900 py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-20 lg:px-8">
          <motion.div {...settle}>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[1.08] tracking-[-0.015em]">
              Ready to start?
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-[1.6] text-white/80">
              Apply for the next intake, or talk to us first if you're not sure which
              course fits. Either way, you'll hear back within two business days.
            </p>
            <div className="mt-10">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-forest-700 transition-colors duration-300 hover:bg-paper"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div {...settle} className="text-sm">
            <div className="border-t border-white/15 py-4">
              <p className="text-white/60">Call us</p>
              <a
                href="tel:+61466331055"
                className="mt-1 inline-flex items-center gap-2 font-medium text-white"
              >
                <Phone size={15} /> +61 466 331 055
              </a>
            </div>
            <div className="border-t border-white/15 py-4">
              <p className="text-white/60">Email us</p>
              <Link to="/contact" className="mt-1 inline-block font-medium text-white">
                info@holainternationalcollege.com.au
              </Link>
            </div>
            <div className="border-t border-white/15" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
