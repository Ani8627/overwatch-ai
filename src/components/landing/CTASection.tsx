"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-br from-blue-500/10 via-white/3 to-purple-500/10 px-10 py-20">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Start Optimizing
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
              Stop overspending on AI tooling
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Run a free audit and discover where your team can
              consolidate tooling, optimize plans, and reduce
              infrastructure waste.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/audit"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Start Free Audit
              </Link>

              <button className="rounded-2xl border border-white/10 bg-white/3 px-6 py-3 font-medium transition hover:bg-white/5">
                View Example Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}