import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="sales" className="bg-[var(--color-cream)] relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Sales Section */}
        <div className="relative h-[600px] lg:h-[800px] overflow-hidden group">
          <img
            src="/luxury-car-dealership-showroom-interior.jpg"
            alt="Premium car sales"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/90 via-[var(--color-charcoal)]/60 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-12 lg:p-16">
            <p className="text-[var(--color-orange)] text-xs font-bold mb-4 tracking-widest">VENTES PREMIUM</p>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] mb-6 leading-tight">
            Affirmez votre 
              <br />
              <span className="italic">Héritage</span>
            </h3>
            <p className="text-[var(--color-gray-200)] text-lg mb-8 max-w-md leading-relaxed">
            Acquérez des véhicules d’exception et profitez d’une expérience sur mesure.
            </p>
            {/* <Link
              href="/experience"
              className="group inline-flex items-center gap-2 text-[var(--color-cream)] font-bold hover:text-[var(--color-orange)] transition-colors"
            >
              UNE EXPÉRIENCE INOUBLIABLE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </div>
        </div>

        {/* Rentals Section */}
        <div className="relative h-[600px] lg:h-[800px] overflow-hidden group" id="rentals">
          <img
            src="/rental.png"
            alt="Premium car rentals"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-teal)]/90 via-[var(--color-teal)]/60 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-12 lg:p-16">
            <p className="text-[var(--color-cream)] text-xs font-bold mb-4 tracking-widest">LOCATIONS FLEXIBLES</p>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] mb-6 leading-tight">
              Vivez la
              <br />
              <span className="italic">Liberté</span>
            </h3>
            <p className="text-[var(--color-cream)]/90 text-lg mb-8 max-w-md leading-relaxed">
            Locations à la journée, à la semaine ou au mois. Prenez le volant de véhicules d’exception pour toutes vos occasions.
            </p>
            {/* <Link
              href="/rentals"
              className="group inline-flex items-center gap-2 text-[var(--color-cream)] font-bold hover:text-[var(--color-orange)] transition-colors"
            >
              POURQUOI LOUER CHEZ BMN
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}