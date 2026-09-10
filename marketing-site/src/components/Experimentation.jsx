// Section 5 of the brief: experiments as a lifecycle, not "train a model".
// Every state and action named here is a real transition in the backend
// state machine (admin_experiments.py) -- queued/running/failed/cancelled,
// retry, and cooperative cancellation.

const lifecycle = [
  { state: "Queued", note: "Waiting to run" },
  { state: "Running", note: "Training in progress" },
  { state: "Failed", note: "Stopped with a logged cause" },
  { state: "Cancelled", note: "Stopped on request" },
  { state: "Complete", note: "Model produced" },
];

export default function Experimentation() {
  return (
    <section id="experiments" className="section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 card p-6">
          <div className="label-eyebrow mb-4">Experiment #4021 — attempts</div>
          <div className="space-y-3 mb-6">
            {lifecycle.map((l) => (
              <div key={l.state} className="flex items-center justify-between text-sm">
                <span className="font-mono text-slate-200">{l.state}</span>
                <span className="text-muted text-xs">{l.note}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-panelborder pt-4 flex items-center justify-between text-xs">
            <span className="text-muted">Attempt 2 of 2 — retried after a failure</span>
            <span className="text-mint font-mono">loss 0.091</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="label-eyebrow mb-2">Experimentation</div>
          <h2 className="text-3xl font-bold mb-6">An experiment is a lifecycle, not a single run</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Training runs as a real, observable process: queued, running, and either
            complete or failed with a logged cause. A failed or cancelled experiment can
            be retried against the same dataset without losing its history — the
            original attempt stays on record, so you can see exactly what changed.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            Cancellation is cooperative and real, not a UI illusion: a running job is
            asked to stop and moves through an observable "cancelling" state until it
            actually does. Every experiment keeps its relationship to the dataset it
            trained on and the model it produced.
          </p>
        </div>
      </div>
    </section>
  );
}
