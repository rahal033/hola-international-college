import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData, buildBreadcrumb } from "../hooks/useStructuredData";

type Course = {
  category: string;
  title: string;
  code: string;
  duration: string;
  mode: string;
  description: string;
  image: string;
  imageAlt: string;
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
        image: "/media/ageing.webp",
        imageAlt: "Warm residential bedroom with plum pillows and afternoon light",
      },
      {
        category: "Health & Community Services",
        title: "Certificate III in Individual Support (Disability)",
        code: "CHC33021",
        duration: "12 months",
        mode: "Full-time / Part-time",
        description:
          "Person-centered training for aspiring disability support workers, aligned to NDIS practice standards.",
        image: "/media/disability.webp",
        imageAlt: "Wheelchair beside a sunlit window in a warm living room",
      },
      {
        category: "Health & Community Services",
        title: "Diploma of Community Services",
        code: "CHC52021",
        duration: "18 months",
        mode: "Full-time / Part-time",
        description:
          "A leadership-track qualification for case managers, coordinators and program supervisors across the community sector.",
        image: "/media/community.webp",
        imageAlt: "Community centre table with teapot, cups and folded plum blanket",
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
        image: "/media/firstaid.webp",
        imageAlt: "Red first aid kit with bandaids on a timber table",
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
        image: "/media/medication.webp",
        imageAlt: "Medication blister pack and glass of water on a timber tray",
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
      provider: {
        "@type": "EducationalOrganization",
        "@id": "https://www.holainternationalcollege.com.au/#org",
        name: "Hola International College",
      },
      offers: {
        "@type": "Offer",
        category: "Fees",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
      },
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
            repeatFrequency: "Monthly",
            repeatCount: 12,
            startDate: "2026-08-01",
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
      <section className="bg-forest-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-0.5 w-12 bg-tan-300" aria-hidden="true" />
          <h1 className="font-display-xl mt-8 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Our courses
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-[1.6] text-white/80">
            Nationally recognised CHC qualifications and skill sets in aged care,
            disability support, community services and first aid - all delivered from
            Elizabeth South, South Australia.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="mb-8 font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[1.08] tracking-[-0.015em] text-ink">
                {cat.name}
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {cat.courses.map((c) => (
                  <article
                    key={c.title}
                    className="flex flex-col rounded-sm border border-ink/10 bg-white p-3"
                  >
                    <img
                      src={c.image}
                      alt={c.imageAlt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full rounded-[2px] object-cover"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-[1.375rem] font-medium leading-snug text-ink">
                        {c.title}
                      </h3>
                      <p className="mt-4 flex-1 text-[1.0625rem] leading-[1.7] text-ink/70">
                        {c.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-4">
                        <span className="text-[13px] text-ink/50">
                          {c.code} · {c.duration} · {c.mode}
                        </span>
                        <Link
                          to="/signup"
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-600 transition-colors duration-300 hover:text-forest-800"
                        >
                          Apply Now
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
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
