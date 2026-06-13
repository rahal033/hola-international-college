import { Link } from "react-router-dom";
import { Clock, BookOpen, ArrowRight } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

type Course = {
  category: string;
  title: string;
  code: string;
  duration: string;
  mode: string;
  description: string;
};

const categories: { name: string; courses: Course[] }[] = [
  {
    name: "Health & Community Services",
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
    "Courses - CHC33021, CHC52021, HLTAID011 | Hola International College Adelaide",
    "Nationally recognised CHC33021 Individual Support (Ageing & Disability), CHC52021 Diploma of Community Services, HLTAID011 First Aid + CPR and medication training. Full-time, part-time and face-to-face study in Elizabeth South, Adelaide SA."
  );

  const allCourses = categories.flatMap((cat) =>
    cat.courses.map((c) => ({
      "@context": "https://schema.org",
      "@type": "Course",
      name: c.title,
      description: c.description,
      courseCode: c.code,
      educationalCredentialAwarded: c.code.startsWith("CHC")
        ? `Certificate / Diploma - ${c.code}`
        : c.code === "HLTAID011 / HLTAID009"
        ? "First Aid Statement of Attainment"
        : "Statement of Attainment",
      provider: { "@id": "https://www.holainternationalcollege.com.au/#org" },
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: c.mode.toLowerCase().includes("online") ? "Blended" : "InPerson",
          location: {
            "@type": "Place",
            name: "Hola International College",
            address: {
              "@type": "PostalAddress",
              streetAddress: "179B Philip Hwy",
              addressLocality: "Elizabeth South",
              addressRegion: "SA",
              postalCode: "5112",
                addressCountry: "AU",
            },
          },
          courseSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1M",
            startDate: "2026-06-01",
          },
        },
      ],
    }))
  );

  useStructuredData([
    buildBreadcrumb([
      ["Home", "/"],
      ["Courses", "/courses"],
    ]),
    ...allCourses,
  ]);

  return (
    <>
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Our courses
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-100 sm:text-xl">
            Nationally recognised CHC qualifications and skill sets in aged care,
            disability support, community services and first aid - all delivered from
            Elizabeth South, South Australia.
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
