import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Lock, Mail } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Login() {
  usePageMeta("Login — Hola International College");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Login is a demo placeholder — no authentication has been wired up yet.");
  }

  return (
    <section className="flex items-center justify-center bg-gray-50 px-4 py-16 sm:py-20">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-2xl font-bold text-white shadow-sm">
              H
            </span>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-1 text-sm text-gray-600">Sign in to your student portal</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700">Email</span>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700">Password</span>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <a href="#" className="font-medium text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-gray-400">
            <span className="h-px flex-1 bg-gray-200" />
            Or
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <a
            href="https://canvas.instructure.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:shadow-md"
          >
            Access Canvas LMS <ExternalLink size={14} />
          </a>

          <p className="mt-6 text-center text-sm text-gray-600">
            New to Hola?{" "}
            <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-800">
              Apply for a course
            </Link>
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
          <h3 className="mb-2 font-semibold">Student Portal Features</h3>
          <ul className="list-inside list-disc space-y-1 text-blue-900/80">
            <li>Access course materials and assessments</li>
            <li>Track your progress and grades</li>
            <li>Connect with trainers and classmates</li>
            <li>Manage your enrolment and billing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
