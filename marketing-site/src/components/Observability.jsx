const telemetry = [
  { label: "CPU utilization", value: "12%" },
  { label: "Memory", value: "3.1 / 8 GB" },
  { label: "Storage used", value: "41%" },
  { label: "Database", value: "operational" },
];

export default function Observability() {
  return (
    <section id="observability" className="bg-panel/40 border-y border-panelborder">
      <div className="section !py-14 sm:!py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-eyebrow mb-2">Observability</div>
            <h2 className="text-3xl font-bold mb-6">See the system, not just a prediction</h2>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Real CPU, memory, storage, and network telemetry, sampled from the machine
              actually running your workloads — not simulated dashboard numbers. Database
              and storage health checks back the status page, and every job carries its
              own state and history.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Every published model is watched against the data it was trained on: if
              live requests drift more than two standard deviations from training-time
              statistics on a given column, it's flagged with the specific column and the
              gap — not a vague "something changed" warning.
            </p>
          </div>
          <div className="card p-6">
            <div className="label-eyebrow mb-4">Infrastructure telemetry (example)</div>
            <div className="space-y-3 mb-6">
              {telemetry.map((t) => (
                <div key={t.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted">{t.label}</span>
                  <span className="font-mono text-mint">{t.value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-panelborder pt-4 text-xs text-coral">
              Drift alert: "monthly_spend" averaging 61.40 vs 38.20 at training time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
