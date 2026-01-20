// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { ContactSection } from "@/components/contact-section"

// export const metadata = {
//   title: "Contact - B-M-N Motors",
//   description: "Contactez-nous pour toute demande concernant nos véhicules premium",
// }

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen bg-[var(--color-charcoal)]">
//       <Navigation />
//       <ContactSection />
//       <Footer />
//     </main>
//   )
// }


import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Contactez B-M-N Motors Dakar | Location & Vente Voiture Luxe",
  description: "Besoin d'une voiture de luxe à Dakar ? Contactez-nous : +221 77 588 99 76. Réponse en 2h. Showroom ouvert 7j/7. WhatsApp disponible.",
  keywords: "contact bmn motors, location voiture dakar telephone, whatsapp location voiture",
  openGraph: {
    title: "Contactez B-M-N Motors Dakar",
    description: "Contactez-nous pour louer ou acheter une voiture de luxe à Dakar.",
    url: "https://www.bmn-motors.com/contact",
    siteName: "B-M-N Motors",
    images: [
      {
        url: "https://www.bmn-motors.com/bmn-logo.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_SN",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-charcoal)]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <img
          src="/bmn-affiche.jpeg"
          alt="Contactez B-M-N Motors"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/60 to-[var(--color-charcoal)]" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">
            CONTACTEZ-NOUS
          </p> */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-tight mb-8">
          Parlons de Votre
            <br />
            <span className="italic">Projet</span>
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 transition-all">
            Nous sommes à votre disposition
          </div>
          {/* <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet automobile.
          </p> */}
        </div>
      </section>

      <ContactSection />
      
      <Footer />
    </main>
  )
}