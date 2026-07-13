import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, ShieldCheck, Clock } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import Logo from "../components/Logo";

export default function Login() {
  usePageMeta(
    "Student & Trainer Portal - Hola International College",
    "Coming soon: the Hola International College Learning Portal. Access your course materials, assessments and grades online once enrolment opens."
  );

  return (
    <section className="bg-paper px-4 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-sm bg-white p-8 shadow-lg sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Logo size={56} />
            <h1 className="mt-4 text-3xl font-bold text-ink">Student & Trainer Portal</h1>
            <p className="mt-2 max-w-md text-sm text-ink/55">
              The Hola International College Learning Portal will go live alongside our
              first intake. Enrolled students and trainers will receive their login details
              by email.
            </p>
          </div>

          <div className="mt-8 rounded-sm border border-forest-100 bg-forest-50 p-6 text-center">
            <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 text-white">
              <Clock size={18} />
            </div>
            <p className="font-display text-2xl font-light text-forest-900">
              Learning Portal — <span className="italic text-forest-700">coming soon.</span>
            </p>
            <p className="mt-2 text-sm text-forest-900/70">
              Launching alongside our first cohort, pending registration completion.
            </p>
          </div>

          <p className="mt-8 border-t border-ink/10 pt-6 text-center text-sm text-ink/55">
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
            body="Connect with your trainers and classmates through course messaging and discussions."
          />
        </div>

        <div className="mt-6 rounded-sm border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <p>
            <strong>Need help right now?</strong> Email{" "}
            <a href="mailto:info@holainternationalcollege.com.au" className="font-semibold underline">
              info@holainternationalcollege.com.au
            </a>{" "}
            or call <a href="tel:+61466331055" className="font-semibold underline">+61 466 331 055</a> and our team will sort you out.
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
    <div className="rounded-sm bg-white p-5 shadow-sm">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-forest-100 text-forest-700">
        <Icon size={20} />
      </div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-ink/55">{body}</p>
    </div>
  );
}
