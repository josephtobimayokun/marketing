const items = [
  { label: "Organizations", body: "Every dataset, model, key, and incident belongs to exactly one organization." },
  { label: "Authentication", body: "JWT-based accounts for your team, separate API keys for programmatic access." },
  { label: "API keys", body: "Per-key rate limits, usage tracking, and one-click revocation." },
  { label: "Admin audit log", body: "Every privileged action is recorded against the admin who took it." },
];

export default function Security() {
  return (
    <section className="bg-panel/40 border-y border-panelborder">
      <div className="section !py-14 sm:!py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-eyebrow mb-2">Security & multi-tenancy</div>
            <h2 className="text-3xl font-bold mb-6">Organization-aware by default, not by upgrade</h2>
            <p className="text-muted text-sm leading-relaxed">
              Isolation between organizations, authenticated access, and a full audit
              trail are part of the base platform every account runs on — not a
              higher-tier add-on. We don't hold any third-party security certifications
              today; if your compliance requirements need one, talk to us directly.
            </p>
          </div>
          <div className="space-y-4">
            {items.map((i) => (
              <div key={i.label} className="card px-5 py-4">
                <div className="text-sm font-semibold mb-1">{i.label}</div>
                <div className="text-xs text-muted leading-relaxed">{i.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
