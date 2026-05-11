"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          AI Spend Optimization
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
          Reduce unnecessary AI tooling costs.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-400">
          Overwatch AI helps teams identify overlapping subscriptions,
          inefficient plans, and hidden AI infrastructure waste.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-white px-6 py-3 font-medium text-black">
            Start Free Audit
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}