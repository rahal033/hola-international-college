import { Heart, TrendingUp, Users, Coffee, MapPin, ArrowRight } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

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
      "Deliver Certificate III in Individual Support (Ageing) — combining classroom training, simulation and workplace assessment.",
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
    "Careers — Hola International College",
    "Join Hola International College. Open roles for trainers, assessors, student support and admissions in Adelaide SA."
  );
  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Careers</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Build your career with a College that's helping shape the future of care in
            South Australia.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Work With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hola International College is more than an employer — it's a community.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <b.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobs.map((j) => (
              <article
                key={j.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-gray-900">{j.title}</h3>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {j.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin size={14} className="text-blue-600" /> {j.location}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{j.description}</p>
                  </div>
                  <a
                    href="mailto:careers@holainternationalcollege.com.au"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
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
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 px-6 py-12 text-center text-white shadow-lg sm:px-12">
          <h2 className="text-3xl font-bold">Don't See the Right Role?</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            We're always interested in connecting with great people. Send us your résumé
            and we'll be in touch when a suitable role opens up.
          </p>
          <a
            href="mailto:careers@holainternationalcollege.com.au"
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-blue-50"
          >
            careers@holainternationalcollege.com.au
          </a>
        </div>
      </section>
    </>
  );
}
