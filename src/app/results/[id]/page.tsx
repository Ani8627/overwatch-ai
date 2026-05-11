import { SavingsHero } from "../../../components/results/SavingsHero";
import { RecommendationCards } from "../../../components/results/RecommendationCards";

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ savings?: string }>;
}) {
  const params = await searchParams;

  const savings = params.savings || "18400";

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <SavingsHero savings={savings} />

        <RecommendationCards />
      </div>
    </main>
  );
}