"use client";

const steps = [
  {
    number: "01",
    title: "Connect your AI stack",
    description:
      "Add your current AI tools, subscriptions, API usage, and estimated monthly spend.",
  },
  {
    number: "02",
    title: "Analyze inefficiencies",
    description:
      "Overwatch AI identifies redundant tooling, oversized plans, and hidden infrastructure waste.",
  },
  {
    number: "03",
    title: "Optimize and scale",
    description:
      "Receive actionable recommendations and benchmark-driven savings insights.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Workflow
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Understand your AI spend in minutes
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A streamlined audit experience designed for fast-moving
            engineering and product teams.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/3 p-8"
            >
              <p className="text-sm font-medium tracking-[0.3em] text-blue-400">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}