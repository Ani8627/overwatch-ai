"use client";

export function SavingsHero({
  savings,
}: {
  savings: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-br from-blue-500/10 via-white/3 to-purple-500/10 p-10">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />

      <div className="relative">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Estimated Savings
        </p>
<p className="mt-4 text-lg text-gray-400">
  Overwatch AI Report • Acme Labs
</p>
        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
         ${Number(savings).toLocaleString()}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Potential annual savings identified based on your current
          AI tooling and infrastructure usage patterns.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/3 px-6 py-4">
            <p className="text-sm text-gray-500">
              Current Monthly Spend
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              $4,200
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 px-6 py-4">
            <p className="text-sm text-gray-500">
              Optimization Score
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              82/100
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}