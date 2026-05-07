import { Link } from "react-router-dom";
import { ExternalLink, GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import Logo from "../components/Logo";

const CANVAS_URL = "https://canvas.instructure.com/login/canvas";

export default function Login() {
  usePageMeta(
    "Student & Trainer Login — Hola International College",
    "Log in to Canvas to access your courses, assessments and grades at Hola International College."
  );

  return (
    <section className="bg-gray-50 px-4 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Logo size={56} />
            <h1 className="mt-4 text-3xl font-bold text-gray-900">Student & Trainer Portal</h1>
            <p className="mt-2 max-w-md text-sm text-gray-600">
              Hola International College uses Canvas LMS for course delivery, assessments and
              gradebook. Log in below to access your courses.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <a
              href={CANVAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-forest-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-forest-700 hover:shadow-md"
            >
              Log in to Canvas LMS <ExternalLink size={16} />
            </a>
            <a
              href="https://canvas.instructure.com/login/canvas/forgot"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-medium text-forest-600 hover:text-forest-800"
            >
              Forgot your Canvas password?
            </a>
          </div>

          <p className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-600">
            New to Hola International College?{" "}
            <Link to="/signup" className="font-semibold text-forest-600 hover:text-forest-800">
              Apply for a course
            </Link>
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="Course materials"
            body="Access all your training resources, lecture content and reading lists in one place."
          />
          <FeatureCard
            icon={GraduationCap}
            title="Assessments & grades"
            body="Submit assignments, view feedback and track your progress through your qualification."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Trainer support"
            body="Connect with your trainers and classmates through Canvas messaging and discussions."
          />
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <p>
            <strong>First time logging in?</strong> Use the email address you provided on your
            application. If you can't sign in, contact us at{" "}
            <a href="mailto:info@holainternationalcollege.com.au" className="font-semibold underline">
              info@holainternationalcollege.com.au
            </a>{" "}
            and we'll get you sorted.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof BookOpen;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest-100 text-forest-700">
        <Icon size={20} />
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}
