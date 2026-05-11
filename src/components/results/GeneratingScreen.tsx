"use client";

export function GeneratingScreen() {
  return (
      <div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/3">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-blue-500" />

      <h2 className="mt-8 text-3xl font-semibold">
        Generating AI audit...
      </h2>

      <p className="mt-4 max-w-md text-center leading-7 text-gray-400">
        Analyzing tooling overlap, infrastructure usage,
        API patterns, and optimization opportunities.
      </p>
    </div>
  );
}