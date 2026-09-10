const roles = [
  { title: "ML teams", body: "Train, evaluate, deploy, and operate models without switching tools between experimentation and production." },
  { title: "ML platform engineers", body: "Manage execution, serving, and infrastructure health from a single operational surface." },
  { title: "Data scientists", body: "Move from a raw dataset to production inference, with quality and lineage visible at every step." },
  { title: "Engineering teams", body: "Observe and troubleshoot ML workloads through one control plane instead of scattered logs." },
];

export default function UseCases() {
  return (
    <section className="section">
      <div className="label-eyebrow mb-2">Who it's for</div>
      <h2 className="text-3xl font-bold mb-10">Built around real ML engineering problems</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {roles.map((r) => (
          <div key={r.title} className="card-interactive p-6">
            <div className="font-semibold mb-2">{r.title}</div>
            <p className="text-sm text-muted leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
