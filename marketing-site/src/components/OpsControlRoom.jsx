// The flagship section (brief section 13: "one of the site's strongest
// sections"). Consolidates incident lifecycle (10), dependency/impact
// intelligence (11), diagnostics (12), remediation (14), and auditability
// (15) into one coherent control-room narrative instead of five separate
// sections repeating the same card layout.

const incidentLifecycle = [
  "Detected", "Acknowledged", "Investigating", "Identified", "Mitigating", "Monitoring", "Resolved",
];

const capabilities = [
  {
    title: "Search & inspect",
    body: "Find any dataset, experiment, model, job, or key, and see its full detail — status, history, and everything it's connected to.",
  },
  {
    title: "Relate",
    body: "Follow a resource's actual dependencies: which dataset an experiment used, which model it produced, which incidents reference it.",
  },
  {
    title: "Diagnose",
    body: "Evidence-backed candidates for what's going on, each labeled as a fact, a correlation, or a hypothesis — never presented as certainty it hasn't earned.",
  },
  {
    title: "Act & verify",
    body: "Acknowledge, assign, retry, cancel, or resolve — then see the result confirmed, not just requested.",
  },
];

export default function OpsControlRoom() {
  return (
    <section id="ops" className="section">
      <div className="label-eyebrow mb-2">Operations</div>
      <h2 className="text-3xl font-bold mb-4 max-w-2xl">Your ML control room</h2>
      <p className="text-muted text-sm leading-relaxed mb-12 max-w-2xl">
        When something needs a human, Microlink Ops is where an engineer goes from a
        signal to a resolved incident — without leaving the environment or piecing
        together context from five different tools.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {capabilities.map((c) => (
          <div key={c.title} className="card-interactive p-6">
            <div className="font-semibold mb-2">{c.title}</div>
            <p className="text-sm text-muted leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="card p-6 sm:p-8 mb-6">
        <div className="label-eyebrow mb-6">Incident lifecycle</div>
        <div className="flex flex-wrap items-center gap-2">
          {incidentLifecycle.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-panelborder2 text-slate-200">
                {stage}
              </span>
              {i < incidentLifecycle.length - 1 && <span className="text-panelborder2">→</span>}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted leading-relaxed mt-6">
          A false alarm can be acknowledged and resolved directly — the lifecycle
          supports the short path, not just the full one. Every transition is a
          validated state change, not a free-form status field, and every one of them
          is written to an audit log tied to the admin who made it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="font-semibold mb-2">Dependency & impact intelligence</div>
          <p className="text-sm text-muted leading-relaxed">
            Incidents, datasets, experiments, and API keys are related resources, not
            isolated rows. Ops can show what an incident is connected to and surface
            other incidents that share the same resource — bounded, checkable context,
            not a claim about root cause.
          </p>
        </div>
        <div className="card p-6">
          <div className="font-semibold mb-2">Every action, traceable</div>
          <p className="text-sm text-muted leading-relaxed">
            Acknowledgement, assignment, resolution, retries, cancellations, and key
            revocations are all logged against the admin who performed them. If it
            changed something, it's in the audit trail.
          </p>
        </div>
      </div>
    </section>
  );
}
