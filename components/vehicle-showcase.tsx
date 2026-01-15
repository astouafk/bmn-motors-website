// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Link from "next/link"


// const vehicles = [
//   {
//     id: 1,
//     name: "PHANTOM GT",
//     category: "LUXURY SEDAN",
//     price: "FCFA 2.145.000",
//     rental: "FCFA 35.000/jour",
//     image: "/black-luxury-sedan-side-view-studio-lighting.jpg",
//     specs: ["V8 Turbo", "450 HP", "0-60 in 3.8s"],
//   },
//   {
//     id: 2,
//     name: "APEX ROADSTER",
//     category: "SPORTS CAR",
//     price: "FCFA 1.850.000",
//     rental: "FCFA 20.000/day",
//     image: "/red-sports-car-convertible-dramatic-angle.jpg",
//     specs: ["V12 Engine", "720 HP", "0-60 in 2.9s"],
//   },
//   {
//     id: 3,
//     name: "URBAN ELITE",
//     category: "LUXURY SUV",
//     price: "FCFA 3.950.000",
//     rental: "FCFA 55.000/day",
//     image: "/white-luxury-suv-modern-design.jpg",
//     specs: ["Hybrid", "380 HP", "7 Seats"],
//   },
// ]

// export function VehicleShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Défilement automatique toutes les 3 secondes - TOUJOURS ACTIF
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % vehicles.length)
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [])

//   const nextVehicle = () => {
//     setCurrentIndex((prev) => (prev + 1) % vehicles.length)
//   }

//   const prevVehicle = () => {
//     setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length)
//   }

//   const current = vehicles[currentIndex]

//   return (
//     <section 
//       id="vehicles" 
//       className="py-20 relative overflow-hidden"
//     >
//       {/* Background avec la voiture hero VISIBLE */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/mercedes-s-class-interior-dashboard.jpg"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//         {/* Overlay sombre pour garder la lisibilité */}
//         <div className="absolute inset-0 bg-[var(--color-charcoal)]/90" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <p className="text-[var(--color-orange)] text-sm font-bold mb-4 tracking-widest animate-fade-in">
//             NOTRE COLLECTION
//           </p>
//           <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-cream)] leading-tight text-balance animate-slide-up">
//             VEDETTES DU MOMENT
//           </h2>
//         </div>

//         {/* Carousel Layout */}
//         <div className="relative">
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             {/* Vehicle Image */}
//             <div className="lg:w-2/3 relative group">
//               <div className="relative overflow-hidden rounded-lg shadow-2xl">
//                 <img
//                   key={current.id}
//                   src={current.image || "/placeholder.svg"}
//                   alt={current.name}
//                   className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105 animate-fade-in"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent opacity-60" />
                
//                 {/* Effet de brillance qui passe */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//               </div>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={prevVehicle}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--color-cream)]/10 backdrop-blur-sm border border-[var(--color-cream)]/20 rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] transition-all duration-300 opacity-0 group-hover:opacity-100"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextVehicle}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--color-cream)]/10 backdrop-blur-sm border border-[var(--color-cream)]/20 rounded-full flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] transition-all duration-300 opacity-0 group-hover:opacity-100"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>

//               {/* Counter avec animation */}
//               <div className="absolute bottom-6 right-6 bg-[var(--color-charcoal)]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--color-orange)]/20">
//                 <span className="text-[var(--color-orange)] font-bold text-lg transition-all duration-300">
//                   {String(currentIndex + 1).padStart(2, "0")}
//                 </span>
//                 <span className="text-[var(--color-cream)]/50 mx-2">/</span>
//                 <span className="text-[var(--color-cream)]/50 font-bold text-lg">
//                   {String(vehicles.length).padStart(2, "0")}
//                 </span>
//               </div>

//               {/* Barre de progression */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-cream)]/10 rounded-b-lg overflow-hidden">
//                 <div 
//                   key={currentIndex}
//                   className="h-full bg-[var(--color-orange)] animate-progress shadow-[0_0_10px_rgba(255,140,50,0.5)]"
//                 />
//               </div>
//             </div>

//             {/* Vehicle Details avec animations */}
//             <div className="lg:w-1/3 space-y-8">
//               <div key={current.id} className="animate-fade-in">
//                 <p className="text-[var(--color-orange)] text-xs font-bold mb-2 tracking-widest">
//                   {current.category}
//                 </p>
//                 <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] mb-6 italic">
//                   {current.name}
//                 </h3>

//                 {/* Specs avec animation décalée */}
//                 <div className="space-y-3 mb-8">
//                   {current.specs.map((spec, idx) => (
//                     <div 
//                       key={idx} 
//                       className="flex items-center gap-3 animate-fade-in"
//                       style={{ animationDelay: `${idx * 0.1}s` }}
//                     >
//                       <div className="w-1 h-1 bg-[var(--color-orange)] rounded-full animate-pulse" />
//                       <span className="text-[var(--color-gray-200)] text-sm">{spec}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pricing avec effet glow */}
//                 <div className="border-t border-[var(--color-cream)]/10 pt-6 space-y-4">
//                   <div className="group/price cursor-pointer">
//                     <p className="text-[var(--color-gray-200)] text-xs mb-1">PRIX IMBATTABLE</p>
//                     <p className="text-[var(--color-cream)] text-2xl font-bold group-hover/price:text-[var(--color-orange)] transition-colors">
//                       {current.price}
//                     </p>
//                   </div>
//                   <div className="group/rental cursor-pointer">
//                     <p className="text-[var(--color-gray-200)] text-xs mb-1">EN LOCATION</p>
//                     <p className="text-[var(--color-orange)] text-xl font-bold group-hover/rental:scale-105 transition-transform inline-block">
//                       {current.rental}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons avec effets */}
//               <div className="space-y-3">
//                 {/* <button className="w-full px-6 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all duration-300 floating glow-orange">
//                   VOIR LES DETAILS
//                 </button> */}
//                 <Link href="/vehicules" className="w-full">
//                 <button className="w-full px-6 py-4 border-2 border-[var(--color-cream)]/20 text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)] transition-all duration-300">
//                   AUTRES OPTIONS
//                 </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Dots Indicator avec progression */}
//           <div className="flex justify-center gap-2 mt-12">
//             {vehicles.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`h-1 rounded-full transition-all duration-500 ${
//                   idx === currentIndex
//                     ? "w-8 bg-[var(--color-orange)] shadow-[0_0_10px_rgba(255,140,50,0.5)]"
//                     : "w-1 bg-[var(--color-cream)]/20 hover:bg-[var(--color-cream)]/40 hover:w-4"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { getFeaturedVehicles, formatPrice } from "@/lib/data"

export function VehicleShowcase() {
  const vehicles = getFeaturedVehicles()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Défilement automatique toutes les 3 secondes - TOUJOURS ACTIF
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

  if (!current) return null

  return (
    <section id="vehicles" className="py-20 relative overflow-hidden">
      {/* Background avec la voiture hero VISIBLE */}
      <div className="absolute inset-0 z-0">
        <img src="/mercedes-s-class-interior-dashboard.jpg" alt="" className="w-full h-full object-cover" />
        {/* Overlay sombre pour garder la lisibilité */}
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-[var(--color-orange)] text-sm font-bold mb-4 tracking-widest animate-fade-in">
            NOTRE COLLECTION
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-cream)] leading-tight text-balance animate-slide-up">
            VEDETTES DU MOMENT
          </h2>
        </div>

        {/* Carousel Layout */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Vehicle Image */}
            <div className="lg:w-2/3 relative group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  key={current.id}
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent opacity-60" />

                {/* Effet de brillance qui passe */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Navigation Buttons */}
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

              {/* Counter avec animation */}
              <div className="absolute bottom-6 right-6 bg-[var(--color-charcoal)]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--color-orange)]/20">
                <span className="text-[var(--color-orange)] font-bold text-lg transition-all duration-300">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--color-cream)]/50 mx-2">/</span>
                <span className="text-[var(--color-cream)]/50 font-bold text-lg">
                  {String(vehicles.length).padStart(2, "0")}
                </span>
              </div>

              {/* Barre de progression */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-cream)]/10 rounded-b-lg overflow-hidden">
                <div
                  key={currentIndex}
                  className="h-full bg-[var(--color-orange)] animate-progress shadow-[0_0_10px_rgba(255,140,50,0.5)]"
                />
              </div>
            </div>

            {/* Vehicle Details avec animations */}
            <div className="lg:w-1/3 space-y-8">
              <div key={current.id} className="animate-fade-in">
                <p className="text-[var(--color-orange)] text-xs font-bold mb-2 tracking-widest">{current.type}</p>
                <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] mb-6 italic">
                  {current.name}
                </h3>

                {/* Specs avec animation décalée */}
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

                {/* Pricing avec effet glow */}
                {/* Pricing avec effet glow */}
                <div className="border-t border-[var(--color-cream)]/10 pt-6 space-y-4">
                  <div className="group/price cursor-pointer">
                    <p className="text-[var(--color-gray-200)] text-xs mb-1">PRIX IMBATTABLE</p>
                    <p className="text-[var(--color-cream)] text-2xl font-bold group-hover/price:text-[var(--color-orange)] transition-colors">
                      {formatPrice(current.pricePerDay)} 
                    </p>
                  </div>
                  <div className="group/rental cursor-pointer">
                    <p className="text-[var(--color-gray-200)] text-xs mb-1">EN LOCATION</p>
                    <p className="text-[var(--color-orange)] text-xl font-bold group-hover/rental:scale-105 transition-transform inline-block">
                      {formatPrice(current.pricePerDay)}/jour
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons avec effets */}
              <div className="space-y-3">
                {/* <Link
                  href={`/vehicules/${current.slug}`}
                  className="block w-full text-center px-6 py-4 bg-[var(--color-orange)] text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all duration-300 floating glow-orange"
                >
                  VOIR LES DÉTAILS
                </Link> */}
                <Link
                  href="/vehicules"
                  className="block w-full text-center px-6 py-4 border-2 border-[var(--color-cream)]/20 text-[var(--color-cream)] font-bold rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)] transition-all duration-300"
                >
                  AUTRES OPTIONS
                </Link>
              </div>
            </div>
          </div>

          {/* Dots Indicator avec progression */}
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