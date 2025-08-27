import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroCarousel } from "@/components/hero-carousel";
import { ImpactCarousel } from "@/components/impact-carousel";
import { PhotoGallery } from "@/components/photo-gallery";
import { ProgramsOverview } from "@/components/programs-overview";
import { RecentProjects } from "@/components/recent-projects";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
      <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <ImpactCarousel />
        <ProgramsOverview />
        <StatsSection />
        <RecentProjects />
        <PhotoGallery />
        <TestimonialsSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
