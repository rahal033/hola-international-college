import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

const educationLevels = [
  "Year 10 or equivalent",
  "Year 12 / SACE",
  "Certificate / Diploma",
  "Bachelor degree",
  "Postgraduate",
  "Other",
];

const australianStates = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

const courses = [
  "Certificate III in Individual Support (Ageing) — CHC33021",
  "Certificate III in Individual Support (Disability) — CHC33021",
  "Diploma of Community Services — CHC52021",
  "First Aid + CPR — HLTAID011 / HLTAID009",
  "Medication Training",
];

const studyModes = ["Full-time", "Part-time", "Blended (online + on-campus)", "Face-to-face"];

const intakes = (() => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const year = new Date().getFullYear();
  return [...months.map((m) => `${m} ${year}`), ...months.slice(0, 6).map((m) => `${m} ${year + 1}`)];
})();

export default function SignUp() {
  usePageMeta(
    "Apply Now — Hola International College",
    "Apply online for nationally recognised qualifications in health, aged care, disability and community services. Monthly intakes."
  );
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Application submitted! We'll be in touch within 2 business days.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Apply Now</h1>
          <p className="mt-4 max-w-2xl text-lg text-forest-100">
            Take the first step. Complete the application form below and our admissions
            team will be in touch within 2 business days.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-xl bg-white p-6 shadow-sm sm:p-10"
          >
            <Section title="Personal Information">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First Name" required>
                  <input type="text" required name="firstName" className={inputClass} />
                </Field>
                <Field label="Last Name" required>
                  <input type="text" required name="lastName" className={inputClass} />
                </Field>
                <Field label="Email" required>
                  <input type="email" required name="email" className={inputClass} />
                </Field>
                <Field label="Phone" required>
                  <input type="tel" required name="phone" className={inputClass} />
                </Field>
                <Field label="Date of Birth" required>
                  <input type="date" required name="dob" className={inputClass} />
                </Field>
                <Field label="Highest Level of Education" required>
                  <select required name="education" defaultValue="" className={inputClass}>
                    <option value="" disabled>Select…</option>
                    {educationLevels.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </Section>

            <Section title="Address Details">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Street Address" required>
                    <input type="text" required name="street" className={inputClass} />
                  </Field>
                </div>
                <Field label="City / Suburb" required>
                  <input type="text" required name="city" className={inputClass} />
                </Field>
                <Field label="State" required>
                  <select required name="state" defaultValue="" className={inputClass}>
                    <option value="" disabled>Select…</option>
                    {australianStates.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Postcode" required>
                  <input type="text" required name="postcode" className={inputClass} />
                </Field>
                <Field label="Country" required>
                  <input type="text" required name="country" defaultValue="Australia" className={inputClass} />
                </Field>
              </div>
            </Section>

            <Section title="Course Selection">
              <div className="grid gap-5">
                <Field label="Course" required>
                  <select required name="course" defaultValue="" className={inputClass}>
                    <option value="" disabled>Select a course…</option>
                    {courses.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Study Mode" required>
                    <select required name="mode" defaultValue="" className={inputClass}>
                      <option value="" disabled>Select…</option>
                      {studyModes.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred Intake" required>
                    <select required name="intake" defaultValue="" className={inputClass}>
                      <option value="" disabled>Select…</option>
                      {intakes.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </Field>
                </div>
              </div>
            </Section>

            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-forest-600 focus:ring-forest-500"
              />
              <span>
                I agree to the Hola International College{" "}
                <a href="#" className="font-semibold text-forest-600 hover:text-forest-800">terms & conditions</a>{" "}
                and consent to the collection and handling of my personal information in
                line with the privacy policy.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-forest-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-forest-700 hover:shadow-md disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-forest-600 hover:text-forest-800">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 border-b border-gray-200 pb-2 text-lg font-semibold text-forest-800">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}
