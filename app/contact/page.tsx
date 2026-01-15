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

export const metadata = {
  title: "Contact - B-M-N Motors",
  description: "Contactez-nous pour toute demande concernant nos véhicules premium",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-charcoal)]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <img
          src="/bmn-logo.jpeg"
          alt="Contactez B-M-N Motors"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/60 to-[var(--color-charcoal)]" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest">
            CONTACTEZ-NOUS
          </p> */}
          {/* <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-tight mb-8">
            Parlons de Votre
            <br />
            <span className="italic">Projet</span>
          </h1> */}
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