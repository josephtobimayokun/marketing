// The platform-wide layer diagram (brief section 20). Built as real markup,
// not an image, so it stays responsive: a vertical rail on mobile, a
// horizontal one from md up.

const layers = [
  { name: "Data Intelligence", detail: "Datasets, quality, lineage" },
  { name: "Experimentation", detail: "Training, evaluation, retries" },
  { name: "Model Serving", detail: "Hosted inference, API keys" },
  { name: "Batch Execution", detail: "Queued, scheduled workloads" },
  { name: "Observability", detail: "Telemetry, drift, health" },
  { name: "Operations", detail: "Incidents, diagnostics, audit" },
];

export default function PlatformArchitecture() {
  return (
    <section id="platform" className="section">
      <div className="label-eyebrow mb-2">Platform architecture</div>
      <h2 className="text-3xl font-bold mb-4 max-w-2xl">
        One system, from raw data to an operated production endpoint
      </h2>
      <p className="text-muted text-sm leading-relaxed mb-12 max-w-2xl">
        Each layer hands off to the next automatically. Nothing here is a separate tool
        you have to integrate — a dataset's lineage carries through to the experiment
        that used it, the model it produced, and the incident that might one day
        reference it.
      </p>

      <div className="card p-6 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-stretch gap-0">
          {layers.map((layer, i) => (
            <div key={layer.name} className="flex md:flex-1 md:flex-col items-center gap-3 md:gap-0">
              <div className="flex md:flex-col items-center gap-3 md:gap-3 w-full">
                <div className="w-full md:w-auto flex-1 md:flex-none card-interactive px-5 py-4 text-center">
                  <div className="text-sm font-semibold text-slate-100">{layer.name}</div>
                  <div className="text-[11px] text-muted font-mono mt-1">{layer.detail}</div>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="shrink-0 flex md:hidden items-center justify-center w-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h10m0 0-3-3m3 3-3 3" stroke="#3ee6b0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {i < layers.length - 1 && (
                <div className="hidden md:flex items-center justify-center h-8 w-full my-1">
                  <svg width="100%" height="16" viewBox="0 0 100 16" preserveAspectRatio="none">
                    <path d="M0 8h90m0 0-6-5m6 5-6 5" stroke="#3ee6b0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-panelborder flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <span>Every layer runs behind organization-scoped authentication and API keys.</span>
          <span className="font-mono text-mint">Automation feeds back into every layer above</span>
        </div>
      </div>
    </section>
  );
}
