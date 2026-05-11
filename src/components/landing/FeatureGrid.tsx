"use client";

const features = [
  {
    title: "AI Stack Auditing",
    description:
      "Analyze overlapping subscriptions, inefficient plans, and redundant tooling.",
  },
  {
    title: "Savings Insights",
    description:
      "Receive realistic cost optimization recommendations based on your usage.",
  },
  {
    title: "Benchmark Comparisons",
    description:
      "Compare your AI spend against similar startups and engineering teams.",
  },
  {
    title: "Usage Visibility",
    description:
      "Track where AI budgets are scaling unnecessarily across departments.",
  },
  {
    title: "Tool Consolidation",
    description:
      "Identify opportunities to reduce vendor fragmentation and complexity.",
  },
  {
    title: "Executive Reporting",
    description:
      "Generate clean, shareable summaries for stakeholders and leadership.",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Platform Features
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Built for modern AI-first teams
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Overwatch AI helps startups and engineering teams
            understand where AI tooling costs are growing — and
            how to optimize them before they scale.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
             className="rounded-3xl border border-white/10 bg-white/3 p-8 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}