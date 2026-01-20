// components/vehicle-showcase-client.tsx
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { formatPrice, type Vehicle } from "@/lib/data"

interface VehicleShowcaseClientProps {
  vehicles: Vehicle[]
}

export function VehicleShowcaseClient({ vehicles }: VehicleShowcaseClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [vehicles.length])

  const nextVehicle = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length)
  }

  const prevVehicle = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length)
  }

  const current = vehicles[currentIndex]

  return (
    <section id="vehicles" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/mercedes-s-class-interior-dashboard.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[var(--color-orange)] text-sm font-bold mb-4 tracking-widest animate-fade-in">
            NOTRE COLLECTION
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-cream)] leading-tight text-balance animate-slide-up">
            VEDETTES DU MOMENT
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 relative group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  key={current.id}
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <button
                onClick={prevVehicle}
                aria-label="Véhicule précédent"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--color-cream)]/10 backdrop-blur-sm border border-[var(--color-cream)]/20 rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextVehicle}
                aria-label="Véhicule suivant"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--color-cream)]/10 backdrop-blur-sm border border-[var(--color-cream)]/20 rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 right-6 bg-[var(--color-charcoal)]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--color-orange)]/20">
                <span className="text-[var(--color-orange)] font-bold text-lg transition-all duration-300">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--color-cream)]/50 mx-2">/</span>
                <span className="text-[var(--color-cream)]/50 font-bold text-lg">
                  {String(vehicles.length).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-cream)]/10 rounded-b-lg overflow-hidden">
                <div
                  key={currentIndex}
                  className="h-full bg-[var(--color-orange)] animate-progress shadow-[0_0_10px_rgba(255,140,50,0.5)]"
                />
              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div key={current.id} className="animate-fade-in">
                <p className="text-[var(--color-orange)] text-xs font-bold mb-2 tracking-widest">{current.type}</p>
                <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] mb-6 italic">
                  {current.name}
                </h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0s" }}>
                    <div className="w-1 h-1 bg-[var(--color-orange)] rounded-full animate-pulse" />
                    <span className="text-[var(--color-gray-200)] text-sm">{current.specs.transmission}</span>
                  </div>
                  <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="w-1 h-1 bg-[var(--color-orange)] rounded-full animate-pulse" />
                    <span className="text-[var(--color-gray-200)] text-sm">{current.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <div className="w-1 h-1 bg-[var(--color-orange)] rounded-full animate-pulse" />
                    <span className="text-[var(--color-gray-200)] text-sm">{current.specs.seats} Places</span>
                  </div>
                </div>

                <div className="border-t border-[var(--color-cream)]/10 pt-6 space-y-4">
                  <div className="group/rental cursor-pointer">
                    <p className="text-[var(--color-gray-200)] text-xs mb-1">EN LOCATION</p>
                    <p className="text-[var(--color-orange)] text-xl font-bold group-hover/rental:scale-105 transition-transform inline-block">
                      {formatPrice(current.pricePerDay)}/jour
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href={`/voitures-location-vente-dakar/${current.slug}`}
                  className="block w-full text-center px-6 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all duration-300 floating glow-orange"
                >
                  VOIR LES DÉTAILS
                </Link>
                <Link
                  href="/voitures-location-vente-dakar"
                  className="block w-full text-center px-6 py-4 border-2 border-[var(--color-cream)]/20 text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)] transition-all duration-300"
                >
                  AUTRES OPTIONS
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {vehicles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Aller au véhicule ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? "w-8 bg-[var(--color-orange)] shadow-[0_0_10px_rgba(255,140,50,0.5)]"
                    : "w-1 bg-[var(--color-cream)]/20 hover:bg-[var(--color-cream)]/40 hover:w-4"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}