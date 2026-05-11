"use client";

const categories = [
  {
    category: "Chatbots & Assistants",
    value: "$1,800/mo",
  },
  {
    category: "Developer AI Tools",
    value: "$1,100/mo",
  },
  {
    category: "Image & Media Generation",
    value: "$700/mo",
  },
  {
    category: "API Infrastructure",
    value: "$600/mo",
  },
];

export function SpendBreakdown() {
  return (
    <section className="mt-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Spend Breakdown
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          AI infrastructure allocation
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
        <div className="space-y-6">
          {categories.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between border-b border-white/5 pb-4"
            >
              <p className="text-lg text-gray-300">
                {item.category}
              </p>

              <p className="text-lg font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}