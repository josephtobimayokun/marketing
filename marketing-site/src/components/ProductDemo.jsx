function MockWindow({ title, children }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-panelborder">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 text-xs text-muted">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default function ProductDemo() {
  return (
    <section className="section">
      <div className="label-eyebrow mb-2">Illustrative walkthrough</div>
      <h2 className="text-3xl font-bold mb-3">From raw CSV to a live API, in four steps</h2>
      <p className="text-sm text-muted mb-10 max-w-2xl">
        A sample run, not a live dashboard — this is what the flow looks like end to end.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <MockWindow title="Upload dataset — customer_churn.csv">
          <div className="text-xs text-muted mb-2">customer_churn.csv · 2,400 rows · 9 columns</div>
          <div className="h-2 rounded-full bg-ink overflow-hidden mb-1">
            <div className="h-full bg-mint" style={{ width: "100%" }} />
          </div>
          <div className="text-xs text-mint">Quality score 82/100 — queued for training</div>
        </MockWindow>

        <MockWindow title="Training progress — experiment #4021">
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div>epoch 50/300 — loss 0.412</div>
            <div>epoch 150/300 — loss 0.187</div>
            <div className="text-mint">epoch 300/300 — loss 0.091 — complete</div>
          </div>
        </MockWindow>

        <MockWindow title="Model — explainability">
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex justify-between"><span>tenure_months</span><span className="text-coral">-0.41</span></div>
            <div className="flex justify-between"><span>monthly_charges</span><span className="text-mint">+0.28</span></div>
            <div className="flex justify-between"><span>support_tickets</span><span className="text-mint">+0.19</span></div>
          </div>
        </MockWindow>

        <MockWindow title="API response">
          <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap">
{`POST /v1/predict
{
  "prediction": "churn",
  "raw_score": 0.87,
  "model_version": "e179e588",
  "explanation": [...]
}`}
          </pre>
        </MockWindow>
      </div>
    </section>
  );
}
