// Concrete, checkable facts instead of the usual "trusted by" logo strip --
// which would be fabricated for a pre-revenue product. These are specific
// enough to be falsifiable, which is what makes them a trust signal at all.
const facts = [
  { label: "Platform layers", value: "6 shipped" },
  { label: "Model latency", value: "< 50ms typical" },
  { label: "Founder", value: "Joseph Tobi Mayokun" },
  { label: "Documentation", value: "Available now" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-panelborder bg-panel/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center sm:justify-between gap-x-10 gap-y-3">
        {facts.map((f) => (
          <div key={f.label} className="flex items-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
            <span className="text-muted">{f.label}</span>
            <span className="text-slate-200 font-mono font-medium">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
