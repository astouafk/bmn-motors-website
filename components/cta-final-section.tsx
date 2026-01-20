//components/cta-final-section.tsx

import { Phone } from "lucide-react"

export function CtaFinalSection() {
  return (
    <section className="py-20 bg-[var(--color-charcoal)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--color-orange)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[var(--color-teal)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Intro Text */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] mb-6 leading-tight">
            Possédez Votre
            <br />
            <span className="italic text-[var(--color-orange)]">Véhicule de Rêve</span>
          </h2>
          <p className="text-[var(--color-gray-200)] text-lg leading-relaxed">
          Découvrez notre sélection rigoureuse de véhicules, du confort premium aux modèles haut de gamme.
          Chaque voiture bénéficie d’un historique d’entretien vérifié, d’une garantie, et de notre exigence de qualité.
          </p>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange)]/80 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-[var(--color-cream)] mb-4">
            Prêt à Trouver Votre Véhicule Idéal ?
          </h3>
          <p className="text-lg text-[var(--color-cream)]/90 mb-8 max-w-2xl mx-auto">
            Notre équipe est prête à vous aider à trouver et acquérir le véhicule de vos rêves.
          </p>

          {/* Single Centered CTA Button */}
          <div className="flex justify-center">
            
             <a href="/contact"
              className="px-10 py-4 bg-[var(--color-cream)] text-[var(--color-charcoal)] font-bold rounded-full hover:bg-[var(--color-cream)]/90 hover:scale-105 transition-all text-lg inline-flex items-center gap-3 shadow-xl"
            >
             
              Contactez-Nous Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}