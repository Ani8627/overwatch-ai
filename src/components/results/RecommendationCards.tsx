"use client";

const recommendations = [
  {
    title: "Consolidate chatbot subscriptions",
    savings: "$4,800/year",
    description:
      "Multiple overlapping conversational AI subscriptions detected across teams.",
  },
  {
    title: "Reduce unused enterprise seats",
    savings: "$3,200/year",
    description:
      "Several inactive premium seats appear underutilized based on reported usage.",
  },
  {
    title: "Optimize API consumption",
    savings: "$6,100/year",
    description:
      "API usage patterns suggest opportunities for batching and request optimization.",
  },
];

export function RecommendationCards() {
  return (
    <section className="mt-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Recommendations
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Suggested optimizations
        </h2>
      </div>

      <div className="grid gap-6">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.title}
            className="rounded-3xl border border-white/10 bg-white/3 p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300">
  High Impact
</div>
                <h3 className="text-2xl font-semibold">
                  {recommendation.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  {recommendation.description}
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-6 py-4">
                <p className="text-sm text-green-300">
                  Estimated Savings
                </p>
<div className="mb-4 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300">
  High Impact
</div>
                <h3 className="mt-2 text-2xl font-bold text-green-400">
                  {recommendation.savings}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}