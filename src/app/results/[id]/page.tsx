import { SavingsHero } from "../../../components/results/SavingsHero";
import { RecommendationCards } from "../../../components/results/RecommendationCards";
import { SpendBreakdown } from "../../../components/results/SpendBreakdown";
import { BenchmarkSection } from "../../../components/results/BenchmarkSection";
export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <SavingsHero />

        <RecommendationCards />

        <SpendBreakdown />
        <BenchmarkSection />
      </div>
    </main>
  );
}