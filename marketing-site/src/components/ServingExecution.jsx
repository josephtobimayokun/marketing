// Sections 6 (model serving) and 7 (batch execution) of the brief,
// side by side since they're the two ways a model actually gets used.

export default function ServingExecution() {
  return (
    <section id="serving" className="section">
      <div className="label-eyebrow mb-2">From trained model to production inference</div>
      <h2 className="text-3xl font-bold mb-10 max-w-2xl">
        Serve it live, or run it against a batch — both are first-class
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="font-semibold mb-1">Model serving</div>
          <p className="text-sm text-muted leading-relaxed mb-5">
            Publish a model behind a versioned prediction API, authenticated with an
            organization-scoped API key. Bring an already-trained model and host it the
            same way, without training it here first.
          </p>
          <div className="bg-ink border border-panelborder rounded-lg p-4">
            <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap">
{`POST /v1/predict
X-API-Key: mk_live_...

{
  "prediction": "1",
  "raw_score": 0.87,
  "model_version": "e179e588"
}`}
            </pre>
          </div>
          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><span className="text-mint">✓</span> Per-key rate limits and usage tracking</li>
            <li className="flex gap-2"><span className="text-mint">✓</span> Versioned endpoints, not a bare script with a URL</li>
          </ul>
        </div>

        <div className="card p-6">
          <div className="font-semibold mb-1">Batch execution</div>
          <p className="text-sm text-muted leading-relaxed mb-5">
            Don't need a live endpoint? Submit a file and get every row back with
            predictions attached. Jobs move through queued, running, complete, or
            failed — with cancellation, retry, and history, the same way experiments do.
          </p>
          <div className="space-y-2.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Job #8842</span>
              <span className="text-mint font-mono text-xs">complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Job #8843</span>
              <span className="text-coral font-mono text-xs">failed — retried</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Job #8844</span>
              <span className="text-slate-400 font-mono text-xs">running</span>
            </div>
          </div>
          <p className="text-xs text-muted leading-relaxed mt-5 pt-5 border-t border-panelborder">
            A background reconciliation pass finds jobs left behind by an interrupted
            process and recovers them, instead of leaving a workload stuck with no
            explanation.
          </p>
        </div>
      </div>
    </section>
  );
}
