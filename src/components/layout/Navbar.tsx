"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Overwatch AI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Pricing
          </Link>

          <Link
            href="/audit"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Start Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}