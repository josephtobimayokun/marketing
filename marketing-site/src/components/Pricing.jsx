import { SIGNUP_URL } from "../config";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    blurb: "For trying Microlink out",
    features: ["1 published model", "1,000 predictions/month", "Community support"],
    cta: "Get Started",
    href: SIGNUP_URL,
  },
  {
    name: "Growth",
    price: "Contact us",
    blurb: "For teams shipping to production",
    features: ["Multiple published models", "Higher rate limits", "Priority training queue", "Email support"],
    cta: "Talk to us",
    href: SIGNUP_URL,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "For regulated or high-volume workloads",
    features: ["Dedicated infrastructure", "Custom SLAs", "SSO / audit logs", "Dedicated support"],
    cta: "Talk to us",
    href: SIGNUP_URL,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="label-eyebrow mb-2">Pricing</div>
      <h2 className="text-3xl font-bold mb-10">Start free. Scale when you need to.</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`card-interactive p-6 flex flex-col ${t.highlighted ? "border-mint/50" : ""}`}
          >
            <div className="font-semibold mb-1">{t.name}</div>
            <div className="text-2xl font-bold mb-1">{t.price}</div>
            <div className="text-xs text-muted mb-5">{t.blurb}</div>
            <ul className="space-y-2 mb-6 flex-1">
              {t.features.map((f) => (
                <li key={f} className="text-sm text-slate-300 flex gap-2">
                  <span className="text-mint">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href={t.href}
              className={t.highlighted ? "btn-primary text-center" : "btn-link text-center border border-panelborder rounded-lg py-2.5"}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
