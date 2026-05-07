import { Link } from "react-router-dom";
import {
  Award,
  Clock,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const stats = [
  { value: "2,000+", label: "Students" },
  { value: "5", label: "Courses" },
  { value: "50+", label: "Industry Partners" },
  { value: "10+", label: "Years of Excellence" },
];

const features = [
  {
    icon: Award,
    title: "Nationally Recognized Training",
    body: "Qualifications recognized across Australia under the AQF framework, opening doors to a career anywhere in the country.",
  },
  {
    icon: Clock,
    title: "Flexible Learning Options",
    body: "Full-time, part-time and blended delivery designed to fit work, family and life commitments.",
  },
  {
    icon: Users,
    title: "Experienced Trainers",
    body: "Industry practitioners with years of frontline experience guiding you through real-world scenarios.",
  },
  {
    icon: Briefcase,
    title: "Career-Ready Skills",
    body: "Practical placements and employer connections that translate directly into job-ready capability.",
  },
];

export default function Home() {
  usePageMeta(
    "Hola International College — Health, Aged Care & Community Services Training in Adelaide",
    "Earn nationally recognized qualifications in health, aged care, disability and community services at Hola International College, Adelaide SA."
  );
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-forest-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-forest-100 ring-1 ring-white/20">
              Registered Training Organization
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Future Starts at Hola International College
            </h1>
            <p className="mt-6 text-lg text-forest-100 sm:text-xl">
              Earn nationally recognized qualifications in health, aged care, disability
              support and community services — taught by industry experts and built around
              the way you want to learn.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-forest-700 shadow-lg transition hover:bg-forest-50 hover:shadow-xl"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Explore Courses
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

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Hola International College
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to launch a meaningful career in care.
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

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 px-6 py-12 text-center text-white shadow-lg sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start Your Journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-100">
            Join over 2,000 students building careers that matter. Applications are open
            for monthly intakes throughout the year.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-forest-700 shadow-md transition hover:bg-forest-50"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
