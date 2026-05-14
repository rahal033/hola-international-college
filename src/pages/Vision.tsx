import { motion } from "motion/react";
import { Award, Shield, Lightbulb, Heart } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";
import SplitText from "../components/SplitText";

const values = [
  {
    n: "01",
    icon: Award,
    title: "Excellence",
    body:
      "We hold ourselves to the highest standards of teaching, assessment and student support. Every cohort, every cert, every conversation - it's worth doing properly.",
  },
  {
    n: "02",
    icon: Shield,
    title: "Integrity",
    body:
      "We act with honesty and transparency in everything we do, from the first enrolment chat through to the day a graduate walks into their first shift.",
  },
  {
    n: "03",
    icon: Lightbulb,
    title: "Innovation",
    body:
      "We continually evolve our programs to reflect contemporary practice and emerging needs in aged care, disability and community services.",
  },
  {
    n: "04",
    icon: Heart,
    title: "Student success",
    body:
      "Every decision we make is anchored in what helps our students learn, grow and thrive in the work that matters most.",
  },
];

export default function Vision() {
  usePageMeta(
    "About Us - Vision, Mission, Values | Hola International College Adelaide",
    "Our vision, mission and the four values that drive Hola International College - an Australian RTO based in Elizabeth South delivering aged care, disability and community services training."
  );

  useStructuredData(
    buildBreadcrumb([
      ["Home", "/"],
      ["Vision", "/vision"],
    ])
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-display text-sm uppercase tracking-[0.28em] text-tan-300">
            About / MMXXVI / Issue 01
          </p>
          <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            <SplitText text="Our vision. " by="word" stagger={0.07} />
            <span className="italic text-tan-300">
              <SplitText text="Our mission." by="word" stagger={0.07} delay={0.5} />
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-100 sm:text-xl">
            What drives us, and what we promise every student who joins Hola International College.
          </p>
        </div>
      </section>

      {/* MAGAZINE SPREAD - Vision (large pull quote) */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-10 md:grid-cols-[120px_1fr]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="editorial-index text-sm text-forest-700/60">Chapter</p>
              <p className="font-display text-6xl font-light leading-none text-forest-700/40">I</p>
            </div>
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-forest-700">
                Our Vision
              </p>
              <blockquote className="optical-quote font-display text-3xl font-light italic leading-[1.18] text-forest-900 sm:text-4xl lg:text-5xl">
                "To be the leading RTO recognised for excellence in health, aged care, and community services education - empowering a new generation of compassionate, confident professionals who transform lives in their communities."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAGAZINE SPREAD - Mission */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-10 md:grid-cols-[1fr_120px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="md:order-1 md:text-right">
              <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-forest-700">
                Our Mission
              </p>
              <blockquote className="font-display text-3xl font-light italic leading-[1.18] text-forest-900 sm:text-4xl lg:text-5xl">
                "To deliver exceptional, person-centered training programs that combine practical skill, ethical practice and genuine care - preparing every student with the qualifications, confidence and pathways to build a meaningful career."
              </blockquote>
            </div>
            <div className="md:order-2 md:text-right">
              <p className="editorial-index text-sm text-forest-700/60">Chapter</p>
              <p className="font-display text-6xl font-light leading-none text-forest-700/40">II</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAGAZINE SPREAD - Manifesto with drop cap */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-forest-700">
              The case for care
            </p>
            <h2 className="font-display text-4xl font-light leading-tight text-forest-900 sm:text-5xl">
              Care work is the most important work most people will ever do.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 space-y-6 text-lg leading-relaxed text-forest-900/85 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="drop-cap">
              Australia is ageing. Disability services are scaling. Community-services
              demand grows every year, and the people doing that work are the
              difference between dignity and indignity for families across South
              Australia and beyond.
            </p>
            <p>
              Hola International College exists to train those people - not as a
              transaction, but as a craft. Our trainers come from the floor.
              Our placements are with real providers, on real shifts, with real
              clients. Our cohorts are small enough that nobody disappears.
            </p>
            <p>
              We're a young College. ASQA registration is in progress. We have
              opinions about how this should be done, and we're building Hola
              around them - one student at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES - editorial alternating numbered rows */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-forest-700">
              Chapter III · Values
            </p>
            <h2 className="font-display text-4xl font-light leading-[1.05] text-forest-900 sm:text-5xl">
              Four principles. <span className="italic text-forest-700">No compromises.</span>
            </h2>
          </motion.div>

          <div className="space-y-12 sm:space-y-16">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                className="grid grid-cols-1 gap-6 border-t border-forest-700/15 pt-10 md:grid-cols-[140px_64px_1fr_minmax(0,420px)] md:items-start md:gap-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <span className="font-display text-5xl font-light leading-none text-forest-700/40 sm:text-6xl">
                    {v.n}
                  </span>
                </div>
                <div className="text-forest-700">
                  <v.icon size={36} strokeWidth={1.25} />
                </div>
                <h3 className="font-display text-2xl font-light leading-tight text-forest-900 sm:text-3xl">
                  {v.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
