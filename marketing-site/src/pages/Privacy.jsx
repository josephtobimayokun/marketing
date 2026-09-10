import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div>
      <Nav />
      <main className="section max-w-3xl">
        <div className="label-eyebrow mb-2">Legal</div>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <div className="card p-5 mb-8 text-sm text-coral">
          Draft, not legal advice: written to describe what actually happens to your
          data today, not a substitute for review by an actual lawyer or a real DPA
          before this is relied on for compliance purposes.
        </div>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">What we collect</h2>
            <p>
              Your account email and organization name, the datasets you upload, the
              models trained from them, and API request logs needed to serve predictions
              and detect misuse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">How it's stored</h2>
            <p>
              Passwords are hashed, never stored in plain text. Data is currently stored
              on infrastructure we operate directly; as the platform matures this may move
              to managed cloud storage with additional redundancy — we'll update this page
              when that happens.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">Who sees it</h2>
            <p>
              Your data and models are visible only to your organization's account and to
              Microlink's own team for support and platform operation. We do not share
              your data with other organizations or use it to train models for anyone else.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-100 mb-2">Your rights</h2>
            <p>
              You can request deletion of your account and all associated data at any
              time. As a platform used by organizations in multiple countries, we intend
              to support region-specific rights (GDPR, NDPR, LGPD, and others) formally as
              we grow — for now, contact us directly for any data request.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
