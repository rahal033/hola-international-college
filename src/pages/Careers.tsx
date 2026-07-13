import { Heart, TrendingUp, Users, Coffee, MapPin, ArrowRight } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

const benefits = [
  {
    icon: Heart,
    title: "Purposeful Work",
    body: "Help shape the next generation of care professionals making a real difference.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Development",
    body: "Ongoing professional development and clear pathways for career progression.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    body: "Join a supportive team that values diverse perspectives and shared success.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    body: "Flexible arrangements, generous leave and a workplace that respects your time.",
  },
];

const jobs = [
  {
    title: "Aged Care Trainer / Assessor",
    department: "Training & Assessment",
    location: "Adelaide, SA",
    description:
      "Deliver Certificate III in Individual Support (Ageing) - combining classroom training, simulation and workplace assessment.",
  },
  {
    title: "Disability Support Trainer",
    department: "Training & Assessment",
    location: "Adelaide, SA",
    description:
      "Lead training for Cert III Individual Support (Disability) with a focus on person-centered, NDIS-aligned practice.",
  },
  {
    title: "First Aid Instructor",
    department: "Training & Assessment",
    location: "Adelaide, SA",
    description:
      "Casual instructor role delivering HLTAID011 / HLTAID009 to corporate, community and student cohorts.",
  },
  {
    title: "Student Support Officer",
    department: "Student Services",
    location: "Adelaide, SA",
    description:
      "Be the first point of contact for student wellbeing, academic support and pastoral care across all programs.",
  },
  {
    title: "Admissions Coordinator",
    department: "Admissions",
    location: "Adelaide, SA",
    description:
      "Guide applicants through enrolment, manage CRM workflows and partner with marketing on intake campaigns.",
  },
];

export default function Careers() {
  usePageMeta(
    "Careers - Trainer, Assessor & Support Roles | Hola International College Adelaide",
    "Work with Hola International College in Elizabeth South, Adelaide. Open roles for aged care trainers, disability support trainers, first aid instructors, student support and admissions coordinators."
  );

  useStructuredData(
    buildBreadcrumb([
      ["Home", "/"],
      ["Careers", "/careers"],
    ])
  );

  return (
    <>
      <section className="bg-forest-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Careers at Hola
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-100 sm:text-xl">
            Help shape the next generation of South Australian care professionals at an
            Adelaide RTO that puts trainers, students and outcomes first.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Why Work With Us?
            </h2>
            <p className="mt-4 text-lg text-ink/55">
              Hola International College is more than an employer - it's a community.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-sm bg-paper p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-forest-100 text-forest-700">
                  <b.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobs.map((j) => (
              <article
                key={j.title}
                className="rounded-sm bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-ink">{j.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/55">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-forest-600" /> {j.location}
                      </span>
                      <span className="text-ink/40">·</span>
                      <span>{j.department}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/55">{j.description}</p>
                  </div>
                  <a
                    href="mailto:careers@holainternationalcollege.com.au"
                    className="inline-flex items-center gap-2 rounded-sm bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 hover:shadow-md"
                  >
                    Apply Now <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-sm bg-forest-700 px-6 py-12 text-center text-white shadow-lg sm:px-12">
          <h2 className="text-3xl font-bold">Don't See the Right Role?</h2>
          <p className="mx-auto mt-3 max-w-xl text-forest-100">
            We're always interested in connecting with great people. Send us your résumé
            and we'll be in touch when a suitable role opens up.
          </p>
          <a
            href="mailto:careers@holainternationalcollege.com.au"
            className="mt-6 inline-flex rounded-sm bg-white px-6 py-3 font-semibold text-forest-700 shadow-md transition hover:bg-forest-50"
          >
            careers@holainternationalcollege.com.au
          </a>
        </div>
      </section>
    </>
  );
}
