import { HeroSection } from "@/components/hero-section"
import { VehicleShowcase } from "@/components/vehicle-showcase"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { OwnerSection } from "@/components/owner-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaFinalSection } from "@/components/cta-final-section"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OwnerSection />
      <VehicleShowcase />
      <ServicesSection />
      <ExperienceSection />
      <CtaFinalSection /> 
      <Footer />
    </main>
  )
}
