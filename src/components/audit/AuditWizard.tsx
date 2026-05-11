"use client";

import { useState } from "react";
import { GeneratingScreen } from "../results/GeneratingScreen";

const steps = [
  "Team Info",
  "AI Tools",
  "Monthly Spend",
  "Usage Patterns",
  "Review",
];

export function AuditWizard() {
    
  const [currentStep, setCurrentStep] = useState(0);
const [formData, setFormData] = useState({
  companyName: "",
  teamSize: "",
  tools: [] as string[],
  spend: "",
  usage: "",
});
const [isGenerating, setIsGenerating] = useState(false);

const toggleTool = (tool: string) => {
  setFormData((prev) => ({
    ...prev,
    tools: prev.tools.includes(tool)
      ? prev.tools.filter((t) => t !== tool)
      : [...prev.tools, tool],
  }));
};
const progress = ((currentStep + 1) / steps.length) * 100;

  if (isGenerating) {
    return (
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6">
          <GeneratingScreen />
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            AI Audit
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Analyze your AI stack
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Answer a few questions to receive a personalized AI spend optimization report.
          </p>
        </div>
<div className="mb-10">
  <div className="mb-3 flex items-center justify-between">
    <p className="text-sm text-gray-500">
      Audit Progress
    </p>

    <p className="text-sm text-gray-500">
      {Math.round(progress)}%
    </p>
  </div>

  <div className="h-2 overflow-hidden rounded-full bg-white/10">
    <div
      className="h-full rounded-full bg-blue-500 transition-all duration-500"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
        <div className="mb-12 flex flex-wrap gap-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`rounded-2xl border px-4 py-2 text-sm transition ${
                index === currentStep
                  ? "border-blue-500 bg-blue-500/10 text-white"
                  : "border-white/10 text-gray-500"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/3 p-10">
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Company Name
                </label>
<input
  type="text"
  placeholder="Acme Labs"
  value={formData.companyName}
  onChange={(e) =>
    setFormData({
      ...formData,
      companyName: e.target.value,
    })
  }
  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-blue-500"
/>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Team Size
                </label>
<input
  type="number"
  placeholder="12"
  value={formData.teamSize}
  onChange={(e) =>
    setFormData({
      ...formData,
      teamSize: e.target.value,
    })
  }
  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-blue-500"
/>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "ChatGPT",
                "Claude",
                "Cursor",
                "Perplexity",
                "Midjourney",
                "GitHub Copilot",
              ].map((tool) => (
               <button
  key={tool}
  onClick={() => toggleTool(tool)}
  className={`rounded-2xl border px-6 py-4 text-left transition ${
    formData.tools.includes(tool)
      ? "border-blue-500 bg-blue-500/10"
      : "border-white/10 bg-black/30"
  }`}
>
  {tool}
</button>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Estimated Monthly AI Spend
              </label>
<input
  type="number"
  placeholder="2500"
  value={formData.spend}
  onChange={(e) =>
    setFormData({
      ...formData,
      spend: e.target.value,
    })
  }
  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-blue-500"
/>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Describe your AI usage
              </label>
<textarea
  placeholder="We use AI for engineering productivity, support automation, and internal research workflows..."
  value={formData.usage}
  onChange={(e) =>
    setFormData({
      ...formData,
      usage: e.target.value,
    })
  }
  className="min-h-45 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-blue-500"
/>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Ready to generate report
              </h2>

              <p className="text-gray-400">
                Your AI infrastructure analysis is ready to process.
              </p>
<button
  onClick={() => {
    setIsGenerating(true);

    setTimeout(() => {
      window.location.href = "/results/demo";
    }, 2500);
  }}
  className="rounded-2xl bg-white px-6 py-3 font-medium text-black"
>
  Generate Audit
</button>
            </div>
          )}

          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={() =>
                setCurrentStep((prev) => Math.max(prev - 1, 0))
              }
              className="rounded-2xl border border-white/10 px-5 py-3 transition hover:bg-white/3"
            >
              Back
            </button>

            <button
              onClick={() =>
                setCurrentStep((prev) =>
                  Math.min(prev + 1, steps.length - 1)
                )
              }
              className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}