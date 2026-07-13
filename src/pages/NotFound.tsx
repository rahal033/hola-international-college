import { Link } from "react-router-dom";
import { Compass } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found - Hola International College");
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-paper px-4 py-20">
      <div className="w-full max-w-md rounded-sm bg-white p-10 text-center shadow-lg">
        <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
          <Compass size={32} />
        </div>
        <h1 className="text-5xl font-bold text-forest-900">404</h1>
        <p className="mt-3 text-lg font-semibold text-ink">Page not found</p>
        <p className="mt-2 text-sm text-ink/55">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-sm bg-forest-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-forest-700 hover:shadow-md"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
