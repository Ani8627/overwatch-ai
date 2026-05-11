"use client";

const stats = [
  {
    value: "$2.4M+",
    label: "AI spend analyzed",
  },
  {
    value: "38%",
    label: "Average savings identified",
  },
  {
    value: "400+",
    label: "Teams optimized",
  },
];

export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-white/2 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur"
          >
            <h3 className="text-5xl font-bold tracking-tight">
              {stat.value}
            </h3>

            <p className="mt-3 text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}