import { Link } from "react-router-dom";

// Same principle as Nav.jsx: only link to things that exist. A generic
// "Github" link pointing at github.com's homepage, or "About"/"Security"
// pointing at "#", reads as filler copied from a template rather than an
// actual company's footer.
const columns = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/#platform" },
      { label: "Ops", href: "/#ops" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Documentation", to: "/docs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-panelborder">
      <div className="max-w-6xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-extrabold text-lg mb-2">Microlink</div>
          <p className="text-xs text-muted leading-relaxed max-w-[220px]">
            Infrastructure for building, serving, observing, and operating production
            machine-learning systems.
          </p>
          <a href="mailto:hello@microlink.digital" className="text-xs text-mint hover:underline mt-3 inline-block">
            hello@microlink.digital
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-xs uppercase tracking-widest text-muted mb-3">{col.title}</div>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-sm text-slate-300 hover:text-mint">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-sm text-slate-300 hover:text-mint">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-8 py-6 border-t border-panelborder text-xs text-muted">
        © {new Date().getFullYear()} Microlink. All rights reserved.
      </div>
    </footer>
  );
}
