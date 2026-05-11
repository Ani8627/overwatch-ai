"use client";

export function BenchmarkSection() {
  return (
    <section className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Benchmark Insights
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          How your AI spend compares
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm text-gray-500">
              Your Monthly Spend
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              $4,200
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm text-gray-500">
              Industry Average
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              $3,100
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm text-gray-500">
              Overspend Estimate
            </p>

            <h3 className="mt-3 text-3xl font-bold text-red-400">
              +35%
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}