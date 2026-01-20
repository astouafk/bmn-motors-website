//components/hero-section.tsx

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[var(--color-charcoal)]">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="/black-luxury-sedan-side-view-studio-lighting.jpg" // ✅ IMAGE, pas vidéo !
        >
          <source src="/videos/hero-car (1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/60 via-transparent to-[var(--color-charcoal)]/80" />
      </div>

      {/* Content - Layout vertical centré */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-between py-20">
        
        {/* Top: Titre principal */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-[var(--color-cream)] leading-none animate-slide-up">
              DRIVE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-cream)] italic">
                TON
              </span>
              <br />
              AMBITION
            </h1>
          </div>
        </div>

        {/* Bottom: Description et boutons */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-center text-lg md:text-xl text-[var(--color-gray-200)] max-w-3xl mx-auto">
            Vivez l'excellence automobile. Des véhicules haut de gamme à la vente et à la location.
            <br />
            Là où le luxe rencontre la performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              className="px-8 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] text-sm font-bold rounded-full
                        inline-flex items-center gap-2 cursor-pointer select-none
                        floating glow-orange hover:scale-105 transition-all duration-300"
            >
              Collection Sophistiquée 👑
            </button>

            <button
              type="button"
              className="px-8 py-4 border-2 border-[var(--color-cream)] text-[var(--color-cream)] text-sm font-bold rounded-full
                        cursor-pointer select-none
                        floating glow-cream hover:scale-105 transition-all duration-300"
            >
              Qualité Performante
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}