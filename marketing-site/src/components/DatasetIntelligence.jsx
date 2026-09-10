const stats = [
  { label: "Rows", value: "52,430" },
  { label: "Missing values", value: "1.3%" },
  { label: "Duplicate rows", value: "234" },
  { label: "Recommended task", value: "Binary classification" },
  { label: "Organization scope", value: "Isolated per account" },
  { label: "Linked experiments", value: "3" },
];

export default function DatasetIntelligence() {
  return (
    <section id="data" className="section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="label-eyebrow mb-2">Data intelligence</div>
          <h2 className="text-3xl font-bold mb-6">Understand your data before anything trains on it</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            The moment a dataset lands, Microlink profiles every column — type,
            missingness, duplicates — and tells you what it's about to do before it does
            it. No guesswork, no black box.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            Every dataset stays scoped to its organization and carries its lineage
            forward: which experiments used it, which models it produced, and which of
            those are still live. Datasets aren't files sitting in storage — they're the
            first node in a chain you can trace all the way to production.
          </p>
        </div>
        <div className="card p-6">
          <div className="label-eyebrow mb-4">Dataset analysis (example)</div>
          <div className="space-y-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="text-muted">{s.label}</span>
                <span className="font-semibold text-mint">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
