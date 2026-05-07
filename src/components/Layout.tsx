import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Courses" },
  { to: "/vision", label: "Vision" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-lg font-bold text-white shadow-sm">
              H
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-blue-900 sm:text-lg">
                Hola International College
              </span>
              <span className="hidden text-xs text-gray-500 sm:block">
                Registered Training Organization
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="rounded-md px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Apply Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-base font-medium ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-3 border-t border-gray-200 pt-3">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md border border-blue-600 px-4 py-2 text-center text-sm font-medium text-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-lg font-bold text-white">
                H
              </span>
              <span className="font-semibold text-white">Hola International College</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A Registered Training Organization delivering nationally recognized
              qualifications in health, aged care, disability and community services.
            </p>
            <div className="mt-4 flex gap-3 text-xs font-semibold">
              <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white">
                f
              </a>
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white">
                ig
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white">
                in
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/vision" className="hover:text-white">Vision & Mission</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/login" className="hover:text-white">Student Portal</Link></li>
              <li><Link to="/signup" className="hover:text-white">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <span>123 Education Street<br />Adelaide, SA 5000</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="tel:+61123456789" className="hover:text-white">+61 1 2345 6789</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@holainternationalcollege.com.au" className="hover:text-white break-all">
                  info@holainternationalcollege.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} Hola International College. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
