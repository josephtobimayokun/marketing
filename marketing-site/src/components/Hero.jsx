import { SIGNUP_URL } from "../config";
import PipelineFlow from "./PipelineFlow";

function QualityPreview() {
  return (
    <div className="card p-5 w-full max-w-sm shadow-glow">
      <div className="flex items-center justify-between mb-4">
        <span className="label-eyebrow">Data quality report</span>
        <span className="text-xs text-mint font-mono">75 / 100</span>
      </div>
      <div className="h-1.5 rounded-full bg-panelborder overflow-hidden mb-5">
        <div className="h-full bg-mint" style={{ width: "75%" }} />
      </div>
      <ul className="space-y-2.5 text-xs text-slate-300">
        <li className="flex gap-2">
          <span className="text-coral">•</span>
          6% of rows missing "income" — safe to proceed, worth reviewing
        </li>
        <li className="flex gap-2">
          <span className="text-mint">•</span>
          No duplicate rows detected
        </li>
        <li className="flex gap-2">
          <span className="text-mint">•</span>
          Target column is reasonably balanced
        </li>
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient grid + glow, tied to the infra positioning -- not decoration for its own sake */}
      <div className="absolute inset-0 bg-grid [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-mint/10 blur-[120px]" />

      <section className="relative max-w-7xl mx-auto px-5 sm:px-10 pt-20 sm:pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <div className="max-w-xl">
            <div className="label-eyebrow mb-4">Infrastructure for production machine learning</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Build, serve, and operate machine learning systems from one platform.
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Microlink takes an ML workload from raw data to a monitored production
              endpoint: dataset intelligence, experiment tracking, model serving, batch
              execution, observability, and an operations control room for when
              something needs a human's attention — all in one place, not five tools
              wired together by hand.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={SIGNUP_URL} className="btn-primary px-6 py-3">
                Get Started
              </a>
              <a href="/docs" className="btn-link">
                View Documentation
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <QualityPreview />
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <div className="label-eyebrow mb-6">What happens to every workload</div>
          <PipelineFlow />
        </div>
      </section>
    </div>
  );
}
