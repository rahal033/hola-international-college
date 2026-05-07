import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found — Hola International College");
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4 py-20">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          <Compass size={32} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900">404</h1>
        <p className="mt-3 text-lg font-semibold text-gray-900">Page not found</p>
        <p className="mt-2 text-sm text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
