// The signature element: an animated visualization of what happens to a
// dataset end to end. Five stages -- the fuller nine-stage architecture
// lives in PlatformArchitecture.jsx below the fold. Stacks vertically on
// mobile instead of forcing a horizontal scrollbar.

const steps = [
  { label: "Data", detail: "Upload & profile" },
  { label: "Experiment", detail: "Train & evaluate" },
  { label: "Serve", detail: "Versioned API" },
  { label: "Observe", detail: "Health & drift" },
  { label: "Operate", detail: "Detect & resolve" },
];

export default function PipelineFlow() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full">
      {steps.map((step, i) => (
        <div key={step.label} className="flex sm:flex-1 sm:flex-col items-center gap-3 sm:gap-0 w-full sm:w-auto">
          <div className="flex sm:flex-col items-center gap-3 sm:gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-mint shadow-glow shrink-0" />
            <div className="text-left sm:text-center">
              <div className="text-xs font-semibold text-slate-100">{step.label}</div>
              <div className="text-[10px] text-muted font-mono mt-0.5 whitespace-nowrap">{step.detail}</div>
            </div>
          </div>

          {i < steps.length - 1 && (
            <>
              {/* Vertical connector, mobile only */}
              <div className="flex sm:hidden items-center justify-center h-6 w-3 shrink-0">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M6 0v18m0 0-4-4m4 4 4-4" stroke="#3ee6b0" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Horizontal connector, sm and up */}
              <div className="hidden sm:flex items-center flex-1 h-3 min-w-[16px] mx-1">
                <svg className="w-full h-3" preserveAspectRatio="none" viewBox="0 0 100 2">
                  <line x1="0" y1="1" x2="100" y2="1" stroke="#3ee6b0" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 4" />
                </svg>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
