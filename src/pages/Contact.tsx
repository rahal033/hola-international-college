import { useState } from "react";
import type { FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const subjects = [
  "Course Information",
  "Admissions",
  "Fees & Payment",
  "Student Support",
  "International Students",
  "Other",
];

export default function Contact() {
  usePageMeta(
    "Contact — Hola International College",
    "Get in touch with Hola International College. Adelaide SA office, phone, email and international student support."
  );
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Thanks — your message has been received. We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            We'd love to hear from you. Send us a message and our team will respond shortly.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      required
                      name="name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      name="email"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone">
                    <input type="tel" name="phone" className={inputClass} />
                  </Field>
                  <Field label="Subject" required>
                    <select required name="subject" className={inputClass} defaultValue="">
                      <option value="" disabled>Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message" required>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={inputClass}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="Visit Us">
              <p>123 Education Street<br />Adelaide, SA 5000</p>
            </InfoCard>
            <InfoCard icon={Phone} title="Call Us">
              <a href="tel:+61123456789" className="hover:text-blue-700">+61 1 2345 6789</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email Us">
              <a href="mailto:info@holainternationalcollege.com.au" className="break-all hover:text-blue-700">
                info@holainternationalcollege.com.au
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Office Hours">
              <p>Monday – Friday: 9:00 AM – 5:00 PM<br />Closed weekends and public holidays</p>
            </InfoCard>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">International Students</h3>
              <p className="mt-2 text-sm text-blue-900/80">
                Applying from overseas? Our International Student Office can guide you
                through visa, CRICOS and pre-arrival support.
              </p>
              <a
                href="mailto:international@holainternationalcollege.com.au"
                className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                international@holainternationalcollege.com.au →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

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

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <div className="mt-1 text-sm text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
}
