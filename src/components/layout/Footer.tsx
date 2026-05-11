export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            Overwatch AI
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            AI spend optimization platform for modern teams.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}