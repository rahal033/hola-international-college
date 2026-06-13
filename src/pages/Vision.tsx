import { motion } from "motion/react";
import { Award, Shield, Lightbulb, Heart } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

const values = [
  {
    n: "01",
    icon: Award,
    title: "Excellence",
    body:
      "We hold ourselves to the highest standards of teaching, assessment and student support. Every cohort, every certificate, every conversation — done properly.",
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
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Our vision. Our mission.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-100 sm:text-xl">
            What drives us, and what we promise every student who joins Hola
            International College.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-700">
            Our vision
          </p>
          <p className="font-display text-2xl font-light leading-snug text-gray-900 sm:text-3xl">
            To be the leading RTO recognised for excellence in health, aged care and
            community services education — empowering a new generation of compassionate,
            confident professionals who transform lives in their communities.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-700">
            Our mission
          </p>
          <p className="font-display text-2xl font-light leading-snug text-gray-900 sm:text-3xl">
            To deliver exceptional, person-centred training programs that combine
            practical skill, ethical practice and genuine care — preparing every
            student with the qualifications, confidence and pathways to build a
            meaningful career.
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-light leading-tight text-gray-900 sm:text-4xl">
            Care work is the most important work most people will ever do.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              Australia is ageing. Disability services are scaling. Community-services
              demand grows every year, and the people doing that work are the
              difference between dignity and indignity for families across South
              Australia and beyond.
            </p>
            <p>
              Hola International College exists to train those people — not as a
              transaction, but as a craft. Our trainers come from the floor. Our
              placements are with real providers, on real shifts, with real clients.
              Our cohorts are small enough that nobody disappears.
            </p>
            <p>
              We're a young College. ASQA registration is in progress. We have
              opinions about how this should be done, and we're building Hola around
              them — one student at a time.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 font-display text-3xl font-light leading-tight text-gray-900 sm:text-4xl">
            Our values
          </h2>

          <div className="space-y-10">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-8 md:grid-cols-[80px_64px_1fr_minmax(0,420px)] md:items-start md:gap-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <span className="font-display text-3xl font-light leading-none text-gray-400 sm:text-4xl">
                  {v.n}
                </span>
                <div className="text-forest-700">
                  <v.icon size={32} strokeWidth={1.25} />
                </div>
                <h3 className="font-display text-xl font-medium leading-tight text-gray-900 sm:text-2xl">
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
