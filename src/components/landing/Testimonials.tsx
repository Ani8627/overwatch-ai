"use client";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, SprintLayer",
    quote:
      "We discovered nearly 35% redundant AI tooling spend across engineering and support within the first week.",
  },
  {
    name: "Sarah Kim",
    role: "Head of Operations, Northstar Labs",
    quote:
      "The benchmark insights helped us standardize AI tooling across teams and reduce unnecessary vendor overlap.",
  },
  {
    name: "Daniel Ross",
    role: "CTO, ArcForge",
    quote:
      "Overwatch AI gave us a surprisingly clear view into how fragmented our AI infrastructure had become.",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Testimonials
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Teams already optimizing their AI spend
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Example testimonials for demonstration purposes.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/3 p-8"
            >
              <p className="leading-8 text-gray-300">
                "{testimonial.quote}"
              </p>

              <div className="mt-10">
                <h3 className="text-lg font-semibold">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}