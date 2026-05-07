import { Link } from "react-router-dom";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

type Course = {
  category: string;
  title: string;
  code: string;
  duration: string;
  mode: string;
  description: string;
};

const categories: { name: string; color: string; courses: Course[] }[] = [
  {
    name: "Health & Community Services",
    color: "bg-forest-100 text-forest-700",
    courses: [
      {
        category: "Health & Community Services",
        title: "Certificate III in Individual Support (Ageing)",
        code: "CHC33021",
        duration: "12 months",
        mode: "Full-time / Part-time",
        description:
          "Build the practical skills to support older Australians to live independently with dignity. Includes mandatory work placement.",
      },
      {
        category: "Health & Community Services",
        title: "Certificate III in Individual Support (Disability)",
        code: "CHC33021",
        duration: "12 months",
        mode: "Full-time / Part-time",
        description:
          "Person-centered training for aspiring disability support workers, aligned to NDIS practice standards.",
      },
      {
        category: "Health & Community Services",
        title: "Diploma of Community Services",
        code: "CHC52021",
        duration: "18 months",
        mode: "Full-time / Part-time",
        description:
          "A leadership-track qualification for case managers, coordinators and program supervisors across the community sector.",
      },
    ],
  },
  {
    name: "First Aid & Emergency Care",
    color: "bg-red-100 text-red-700",
    courses: [
      {
        category: "First Aid & Emergency Care",
        title: "First Aid + CPR",
        code: "HLTAID011 / HLTAID009",
        duration: "1 day",
        mode: "Face-to-face",
        description:
          "Nationally recognised certification covering CPR and the provision of first aid in workplace and community settings.",
      },
    ],
  },
  {
    name: "Medication & Clinical Skills",
    color: "bg-green-100 text-green-700",
    courses: [
      {
        category: "Medication & Clinical Skills",
        title: "Medication Training",
        code: "Skill Set",
        duration: "1–2 days",
        mode: "Face-to-face",
        description:
          "Practical training in safe medication assistance for support workers, aligned with current clinical guidelines.",
      },
    ],
  },
];

export default function Courses() {
  usePageMeta(
    "Courses — Hola International College",
    "Nationally recognised CHC33021, CHC52021, HLTAID011 and medication training. Full-time, part-time and face-to-face study options."
  );
  return (
    <>
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Courses</h1>
          <p className="mt-4 max-w-2xl text-lg text-forest-100">
            Nationally recognised qualifications and skill sets in health, aged care,
            disability and community services.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">{cat.name}</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {cat.courses.map((c) => (
                  <article
                    key={c.title}
                    className="flex flex-col rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <span
                      className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${cat.color}`}
                    >
                      {cat.name}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen size={16} className="text-forest-600" />
                        <span className="font-medium">{c.code}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={16} className="text-forest-600" />
                        {c.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500">
                        {c.mode}
                      </span>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                      {c.description}
                    </p>
                    <Link
                      to="/signup"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 hover:shadow-md"
                    >
                      Apply Now <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
