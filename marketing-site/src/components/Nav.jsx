import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_URL, SIGNUP_URL } from "../config";

const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Ops", href: "/#ops" },
  { label: "Pricing", href: "/#pricing" },
];

// Fixed height shared by the header and its spacer below, so content never
// starts underneath it -- every page that renders <Nav /> gets this for
// free, no per-page padding to remember.
const NAV_HEIGHT = "h-[76px]";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-30 ${NAV_HEIGHT} flex items-center bg-ink/85 backdrop-blur border-b border-panelborder`}>
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="#3ee6b0" strokeWidth="1.4" />
              <path d="M1 11h20M11 1c2.8 2.8 4.3 6.4 4.3 10s-1.5 7.2-4.3 10c-2.8-2.8-4.3-6.4-4.3-10S8.2 3.8 11 1z"
                    stroke="#3ee6b0" strokeWidth="1.4" fill="none" />
            </svg>
            <span className="font-extrabold text-lg tracking-tight">Microlink</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-slate-300 hover:text-mint transition">
                {l.label}
              </a>
            ))}
            <Link to="/docs" className="text-slate-300 hover:text-mint transition">
              Docs
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href={LOGIN_URL} className="text-mint font-semibold text-sm hover:underline">
              Sign In
            </a>
            <a href={SIGNUP_URL} className="btn-primary">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-76px)] overflow-y-auto bg-panel border-b border-panelborder px-5 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-slate-200">
                {l.label}
              </a>
            ))}
            <Link to="/docs" onClick={() => setOpen(false)} className="text-sm font-semibold text-slate-200">
              Docs
            </Link>
            <div className="border-t border-panelborder pt-5 flex flex-col gap-4">
              <a href={LOGIN_URL} className="text-mint font-semibold text-sm">Sign In</a>
              <a href={SIGNUP_URL} className="btn-primary text-center">Get Started</a>
            </div>
          </div>
        )}
      </header>
      {/* Spacer: reserves the space the fixed header no longer takes in flow */}
      <div className={NAV_HEIGHT} aria-hidden="true" />
    </>
  );
}
