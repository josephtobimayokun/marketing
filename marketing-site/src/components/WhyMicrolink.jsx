const reasons = [
  "One platform for data, training, serving, and operations — not five tools wired together",
  "Every resource keeps its lineage: dataset → experiment → model → incident",
  "Evidence-backed diagnostics that separate fact from hypothesis",
  "Encrypted storage, per-org isolation, and an audit trail on every account",
];

export default function WhyMicrolink() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="label-eyebrow mb-2">Why Microlink</div>
          <h2 className="text-3xl font-bold mb-6">Built for teams who have to operate what they ship</h2>
          <p className="text-muted text-sm leading-relaxed">
            Training a model is the easy part. The harder part is what happens after —
            watching it drift, tracing an incident back to the dataset that caused it,
            and proving what changed and who changed it. Microlink treats that as core
            product, not an afterthought bolted onto a training tool.
          </p>
        </div>
        <div className="space-y-4">
          {reasons.map((r) => (
            <div key={r} className="flex items-center gap-3 card px-5 py-4">
              <span className="text-mint shrink-0">✓</span>
              <span className="text-sm">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
