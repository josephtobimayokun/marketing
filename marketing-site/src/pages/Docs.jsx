import { Link } from "react-router-dom";

const sections = [
  { id: "auth", title: "Authentication" },
  { id: "upload", title: "Upload a dataset" },
  { id: "status", title: "Check status" },
  { id: "keys", title: "API keys" },
  { id: "predict", title: "Prediction API" },
  { id: "examples", title: "Examples" },
  { id: "limits", title: "Rate limits" },
  { id: "errors", title: "Errors" },
];

function Code({ children }) {
  return (
    <pre className="bg-panel border border-panelborder rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre">
      {children}
    </pre>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4 text-sm text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function Docs() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Link to="/" className="text-mint text-sm font-semibold hover:underline">
        ← Back to Microlink
      </Link>

      <div className="grid md:grid-cols-[200px_1fr] gap-12 mt-8">
        <nav className="hidden md:block sticky top-10 self-start space-y-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="block text-sm text-muted hover:text-mint">
              {s.title}
            </a>
          ))}
        </nav>

        <div>
          <h1 className="text-3xl font-extrabold mb-2">Documentation</h1>
          <p className="text-muted text-sm mb-12">
            The core flow: upload a dataset, watch it train, publish it, and call it from
            your own product. Everything below reflects endpoints that actually exist
            today — nothing here is aspirational.
          </p>

          <Section id="auth" title="Authentication">
            <p>
              Sign up on the client app to get an organization account and a JWT. Every request
              to <code>/api/*</code> needs it as a bearer token.
            </p>
            <Code>{`curl -X POST https://api.microlink.digital/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Acme Retail", "email": "you@acme.com", "password": "..."}'

# → { "access_token": "..." }`}</Code>
          </Section>

          <Section id="upload" title="Upload a dataset">
            <p>
              Send a CSV as multipart form data. We profile it (row/column counts, per-column
              type, missingness) immediately and hand it to our team for training.
            </p>
            <Code>{`curl -X POST https://api.microlink.digital/api/datasets/upload \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -F "file=@customer_churn.csv"`}</Code>
          </Section>

          <Section id="status" title="Check status">
            <p>Poll your dataset list to see where each upload is in the pipeline:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>received</code> — uploaded, not yet trained</li>
              <li><code>in_review</code> — a model has been trained but not published</li>
              <li><code>model_ready</code> — a model is live; you can generate an API key</li>
            </ul>
            <Code>{`GET /api/datasets
Authorization: Bearer YOUR_TOKEN`}</Code>
          </Section>

          <Section id="keys" title="API keys">
            <p>
              Once a dataset shows <code>model_ready</code>, generate a key. The full key is
              only ever shown once — we store a hash, not the key itself.
            </p>
            <Code>{`curl -X POST https://api.microlink.digital/api/keys \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"label": "production", "rate_limit_per_minute": 60}'`}</Code>
          </Section>

          <Section id="predict" title="Prediction API">
            <p>
              Call your model with the API key — no JWT needed here, just the key in a header.
            </p>
            <Code>{`curl -X POST https://api.microlink.digital/v1/predict \\
  -H "X-API-Key: mk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{"row": {"plan_type": "starter", "tenure_months": 3, "monthly_spend": 35}}'

# → { "prediction": "1", "raw_score": 0.87, "task_type": "classification", "model_version": "e179e588" }`}</Code>
          </Section>

          <Section id="examples" title="Examples">
            <p className="font-semibold text-slate-200">Python</p>
            <Code>{`import requests

resp = requests.post(
    "https://api.microlink.digital/v1/predict",
    headers={"X-API-Key": "mk_live_..."},
    json={"row": {"plan_type": "starter", "tenure_months": 3}},
)
print(resp.json())`}</Code>
            <p className="font-semibold text-slate-200">JavaScript</p>
            <Code>{`const res = await fetch("https://api.microlink.digital/v1/predict", {
  method: "POST",
  headers: { "X-API-Key": "mk_live_...", "Content-Type": "application/json" },
  body: JSON.stringify({ row: { plan_type: "starter", tenure_months: 3 } }),
});
console.log(await res.json());`}</Code>
          </Section>

          <Section id="limits" title="Rate limits">
            <p>
              Each API key has its own per-minute limit (set when you create the key). Going
              over it returns <code>429</code> with the limit in the error message. Usage is
              logged per key so you can see call volume over time.
            </p>
          </Section>

          <Section id="errors" title="Errors">
            <ul className="list-disc list-inside space-y-1">
              <li><code>401</code> — missing or invalid API key / token</li>
              <li><code>409</code> — no model has been published for your account yet</li>
              <li><code>429</code> — rate limit exceeded for this key</li>
              <li><code>400</code> — the row you sent couldn't be turned into a prediction (check your feature names)</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}
