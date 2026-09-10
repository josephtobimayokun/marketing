import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div>
      <Nav />
      <main className="section max-w-3xl">
        <div className="label-eyebrow mb-2">Legal</div>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <div className="card p-5 mb-8 text-sm text-coral">
          Draft, not legal advice: this is a starting point covering the basics, written to
          be honest about where Microlink actually stands today — not a substitute for
          review by an actual lawyer before this is relied on for real contracts.
        </div>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">1. What Microlink is, today</h2>
            <p>
              Microlink is an early-stage, pre-revenue machine learning platform. Model
              training uses a single linear model architecture (regression or
              classification, inferred from your data) — not deep learning, not automatic
              model selection. We tell you this here explicitly because a vendor's terms
              should describe what you're actually getting.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">2. Your data</h2>
            <p>
              Data you upload is used only to train and serve your model, and to generate
              the data quality report shown to you before training. We do not use your
              data to train models for other organizations, and do not sell it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">3. No uptime guarantee yet</h2>
            <p>
              As a pre-revenue platform, we do not currently offer a formal SLA or uptime
              guarantee. If your use case requires one, talk to us directly before relying
              on Microlink for anything business-critical.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">4. Account termination</h2>
            <p>
              You can delete your account and data at any time by contacting us. We may
              suspend accounts that violate these terms or misuse the platform (including
              attempts to access other organizations' data or models).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">5. Changes</h2>
            <p>
              These terms will change as the platform matures. We'll update this page and,
              once we have a real user base, notify active accounts of material changes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
