import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/landing/HeroSection";
import { StatsSection } from "../components/landing/StatsSection";
import { FeatureGrid } from "../components/landing/FeatureGrid";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Testimonials } from "../components/landing/Testimonials";
import { CTASection } from "../components/landing/CTASection";
import { Footer } from "../components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <HeroSection />

      <StatsSection />

      <FeatureGrid />

      <HowItWorks />

      <Testimonials />

      <CTASection />

      <Footer />
    </main>
  );
}