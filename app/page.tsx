// //app/page.tsx
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Location & Vente Voiture Luxe Dakar | B-M-N Motors",
//   description: "Louez ou achetez des voitures de luxe à Dakar. Mercedes, Range Rover, BMW. Location courte/longue durée. Service premium 24/7. Réservez maintenant !",
//   keywords: "location voiture luxe dakar, vente voiture premium senegal, mercedes dakar, location 4x4 dakar, bmn motors",
//   openGraph: {
//     title: "Location & Vente Voiture Luxe Dakar | B-M-N Motors",
//     description: "Louez ou achetez des voitures de luxe à Dakar. Mercedes, Range Rover, BMW.",
//     url: "https://www.bmn-motors.com",
//     siteName: "B-M-N Motors",
//     images: [
//       {
//         url: "https://www.bmn-motors.com/logo/bmn-logo.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "fr_SN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Location & Vente Voiture Luxe Dakar | B-M-N Motors",
//     description: "Louez ou achetez des voitures de luxe à Dakar.",
//     images: ["https://www.bmn-motors.com/logo/bmn-logo.png"],
//   },
// }


// import { HeroSection } from "@/components/hero-section"
// import { VehicleShowcase } from "@/components/vehicle-showcase"
// import { ServicesSection } from "@/components/services-section"
// import { ExperienceSection } from "@/components/experience-section"
// import { OwnerSection } from "@/components/owner-section"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { CtaFinalSection } from "@/components/cta-final-section"

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navigation />
//       <HeroSection />
//       <OwnerSection />
//       <VehicleShowcase />
//       <ServicesSection />
//       <ExperienceSection />
//       <CtaFinalSection /> 
//       <Footer />
//     </main>
//   )
// }


// app/page.tsx
import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { VehicleShowcase } from "@/components/vehicle-showcase"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { OwnerSection } from "@/components/owner-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaFinalSection } from "@/components/cta-final-section"
import { getHomePageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Location & Vente Voiture Luxe Dakar | B-M-N Motors",
  description: "Louez ou achetez des voitures de luxe à Dakar. Mercedes, Range Rover, BMW. Location courte/longue durée. Service premium 24/7. Réservez maintenant !",
  keywords: "location voiture luxe dakar, vente voiture premium senegal, mercedes dakar, location 4x4 dakar, bmn motors",
  openGraph: {
    title: "Location & Vente Voiture Luxe Dakar | B-M-N Motors",
    description: "Louez ou achetez des voitures de luxe à Dakar. Mercedes, Range Rover, BMW.",
    url: "https://www.bmn-motors.com",
    siteName: "B-M-N Motors",
    images: [
      {
        url: "https://www.bmn-motors.com/logo/bmn-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location & Vente Voiture Luxe Dakar | B-M-N Motors",
    description: "Louez ou achetez des voitures de luxe à Dakar.",
    images: ["https://www.bmn-motors.com/logo/bmn-logo.png"],
  },
}

export default function Home() {
  const schemas = getHomePageSchema()
  
  return (
    <main className="min-h-screen">
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
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