//components/experience-section.tsx

import { Shield, Award, TrendingUp, Wallet } from "lucide-react"
import { getCoreValues, getStats } from "@/lib/data"

export function ExperienceSection() {
  const advantages = getCoreValues()
  const stats = getStats()

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background avec mouvement up-down */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-sports-car-in-dark-showroom-with-dramatic-l.jpg"
          alt=""
          className="w-full h-full object-cover animate-float-slow"
        />
        {/* Overlay sombre pour garder la lisibilité */}
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-orange)]/5 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[var(--color-teal)]/5 rounded-full blur-3xl z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[var(--color-orange)] text-sm font-bold mb-6 tracking-widest animate-fade-in">
            LA DIFFÉRENCE B-M-N MOTORS
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-cream)] leading-tight mb-6 animate-slide-up">
            <span className="italic">Redéfinir</span>
            <br />
            LE LUXE
            <br />
            AUTOMOBILE
          </h2>
          <p className="text-[var(--color-gray-200)] text-lg md:text-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Nous ne vendons pas simplement des voitures. Nous créons des expériences qui élèvent votre voyage avec qualité, service et excellence.
          </p>
        </div>


        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            // Mapping des icônes
            const iconMap: Record<string, any> = {
              Shield,
              Award,
              TrendingUp,
              Wallet,
            }
            const Icon = iconMap[advantage.icon] || Shield

            return (
              <div
                key={index}
                className="group relative bg-[var(--color-charcoal)]/80 backdrop-blur-sm p-8 rounded-2xl border border-[var(--color-cream)]/10 hover:border-[var(--color-orange)]/50 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-6 relative inline-block">
                  <div className="w-16 h-16 bg-[var(--color-orange)]/10 rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-orange)] transition-all duration-300">
                    <Icon
                      className="w-8 h-8 text-[var(--color-orange)] group-hover:text-[var(--color-cream)] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--color-teal)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-[var(--color-cream)] text-lg font-bold mb-3 tracking-wide">
                  {advantage.title}
                </h3>
                <p className="text-[var(--color-gray-200)] text-sm leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-teal)] group-hover:w-20 transition-all duration-500" />
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-[var(--color-cream)]/10">
          <div className="text-center group">
            <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stats.vehicles}
            </p>
            <p className="text-[var(--color-gray-200)] text-sm tracking-widest">VÉHICULES</p>
          </div>
          <div className="text-center group">
            <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stats.experience}
            </p>
            <p className="text-[var(--color-gray-200)] text-sm tracking-widest">ANNÉES</p>
          </div>
          <div className="text-center group">
            <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stats.satisfaction}
            </p>
            <p className="text-[var(--color-gray-200)] text-sm tracking-widest">SATISFACTION</p>
          </div>
          <div className="text-center group">
            <p className="font-serif text-5xl md:text-6xl text-[var(--color-orange)] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stats.support}
            </p>
            <p className="text-[var(--color-gray-200)] text-sm tracking-widest">SUPPORT</p>
          </div>
        </div>
      </div>

      {/* Dégradé de transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-charcoal)] pointer-events-none z-20" />
    </section>
  )
}