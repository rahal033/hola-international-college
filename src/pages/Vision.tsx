import { Award, Shield, Lightbulb, Heart } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

const values = [
  {
    icon: Award,
    title: "Excellence",
    body: "We hold ourselves to the highest standards of teaching, assessment and student support.",
  },
  {
    icon: Shield,
    title: "Integrity",
    body: "We act with honesty and transparency in everything we do, from enrolment to graduation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We continually evolve our programs to reflect contemporary practice and emerging needs.",
  },
  {
    icon: Heart,
    title: "Student Success",
    body: "Every decision we make is anchored in what helps our students learn, grow and thrive.",
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
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.22em] text-tan-300">About</p>
          <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
            Our vision. <span className="italic text-tan-300">Our mission.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-forest-100">
            What drives us, and what we promise every student who joins Hola International College.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-forest-700 p-8 text-white shadow-lg sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Our Vision</h2>
            <p className="mt-4 text-base leading-relaxed text-forest-50 sm:text-lg">
              To be the leading RTO recognised for excellence in health, aged care, and
              community services education - empowering a new generation of compassionate,
              confident professionals who transform lives in their communities.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-700 p-8 text-white shadow-lg sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Our Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-emerald-50 sm:text-lg">
              To deliver exceptional, person-centered training programs that combine
              practical skill, ethical practice and genuine care - preparing every student
              with the qualifications, confidence and pathways to build a meaningful career.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that shape how we teach, support and lead.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl bg-gray-50 p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
