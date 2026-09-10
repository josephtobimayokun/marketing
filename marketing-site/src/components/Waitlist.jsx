import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // No backend endpoint for this yet — wire this up to a real list
    // (a Google Sheet, Mailchimp, or a /waitlist route) before launch.
    setSubmitted(true);
  }

  return (
    <section className="section">
      <div className="card p-10 text-center max-w-2xl mx-auto">
        <div className="label-eyebrow mb-2">Early access</div>
        <h2 className="text-2xl font-bold mb-3">Building something that needs a model behind it?</h2>
        <p className="text-muted text-sm mb-6">
          We're onboarding early teams directly. Join the waitlist and we'll reach out.
        </p>
        {submitted ? (
          <p className="text-mint text-sm font-medium">You're on the list — we'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-ink border border-panelborder rounded-lg px-4 py-2.5 text-sm outline-none focus:border-mint/60"
            />
            <button className="btn-primary whitespace-nowrap">Join the waitlist</button>
          </form>
        )}
      </div>
    </section>
  );
}
