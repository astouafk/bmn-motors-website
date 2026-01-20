// //app/vehicules/page.tsx
// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import Link from "next/link"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Sliders, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
// import { getAllVehicles, filterVehicles, getVehicleTypes, formatPrice } from "@/lib/data"

// const ITEMS_PER_PAGE = 6

// function VehiculesClientPage() {
//   const [showFilters, setShowFilters] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [filters, setFilters] = useState({
//     type: "All",
//     minPrice: 20000,
//     maxPrice: 150000,
//     transmission: "All",
//     fuel: "All",
//     seats: "All",
//     availability: "All",
//   })

//   // Récupération des données
//   const allVehicles = getAllVehicles()
//   const vehicleTypes = getVehicleTypes()

//   // Filtrage des véhicules
//   const filteredVehicles = filterVehicles({
//     type: filters.type !== "All" ? filters.type : undefined,
//     minPrice: filters.minPrice,
//     maxPrice: filters.maxPrice,
//     transmission: filters.transmission !== "All" ? filters.transmission : undefined,
//     fuel: filters.fuel !== "All" ? filters.fuel : undefined,
//     seats: filters.seats !== "All" ? Number.parseInt(filters.seats) : undefined,
//     availability: filters.availability !== "All" ? (filters.availability.toLowerCase() as "disponible" | "indisponible") : undefined,
//   })

//   // Calcul de la pagination
//   const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const endIndex = startIndex + ITEMS_PER_PAGE
//   const currentVehicles = filteredVehicles.slice(startIndex, endIndex)

//   // Réinitialiser la page à 1 quand les filtres changent
//   const handleFilterChange = (newFilters: typeof filters) => {
//     setFilters(newFilters)
//     setCurrentPage(1)
//   }

//   // Scroll to top when page changes
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   return (
//     <div className="min-h-screen bg-[var(--color-charcoal)]">
//       <Navigation />

//       {/* Hero Section */}
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Image de fond */}
//       {/* <img
//         src="/bmn-agence.png"
//         alt="B-M-N Motors - Notre Flotte"
//         className="absolute inset-0 w-full h-full object-cover"
//       /> */}
//       <Image
//         src="/bmn-agence.png"
//         alt="B-M-N Motors - Notre Flotte"
//         fill
//         className="object-cover"
//       />
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/60 to-[var(--color-charcoal)]" />
      
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-[var(--color-cream)] mb-8 leading-tight">
//           Notre Flotte<span className="text-[var(--color-orange)]">.</span>
//         </h1>
//         <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
//           Découvrez notre incroyable collection de véhicules disponibles à la vente et à la location. Chaque véhicule
//           est méticuleusement entretenu pour garantir votre confort et votre sécurité.
//         </p>
//       </div>
// </section>

//       {/* Filters & Vehicles */}
//       <section className="py-12 bg-[var(--color-charcoal)]">
//         <div className="container mx-auto px-6">
//           {/* Filter Toggle Button */}
//           <div className="mb-8 flex justify-between items-center">
//             <p className="text-[var(--color-cream)]/70">
//               Affichage de{" "}
//               <span className="text-[var(--color-orange)] font-semibold">
//                 {startIndex + 1}-{Math.min(endIndex, filteredVehicles.length)}
//               </span>{" "}
//               sur {filteredVehicles.length} véhicules
//             </p>
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-6 py-3 bg-[var(--color-gray-800)] text-[var(--color-cream)] rounded-full hover:bg-[var(--color-orange)] transition-all"
//             >
//               <Sliders size={18} />
//               {showFilters ? "Masquer Filtres" : "Afficher Filtres"}
//             </button>
//           </div>

//           {/* Filters Panel */}
//           {showFilters && (
//             <div className="mb-12 p-8 bg-[var(--color-gray-900)] rounded-2xl border border-[var(--color-gray-800)]">
//               <h3 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-6">Filtres</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {/* Vehicle Type */}
//                 <div>
//                   <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Type de Véhicule</label>
//                   <select
//                     value={filters.type}
//                     onChange={(e) => handleFilterChange({ ...filters, type: e.target.value })}
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
//                   >
//                     <option>Tout</option>
//                     {vehicleTypes.map((type) => (
//                       <option key={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Transmission */}
//                 <div>
//                   <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Transmission</label>
//                   <select
//                     value={filters.transmission}
//                     onChange={(e) => handleFilterChange({ ...filters, transmission: e.target.value })}
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
//                   >
//                     <option>Tout</option>
//                     <option>Automatique</option>
//                     <option>Manuelle</option>
//                   </select>
//                 </div>

//                 {/* Fuel Type */}
//                 <div>
//                   <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Carburant</label>
//                   <select
//                     value={filters.fuel}
//                     onChange={(e) => handleFilterChange({ ...filters, fuel: e.target.value })}
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
//                   >
//                     <option>Tout</option>
//                     <option>Pétrole</option>
//                     <option>Diesel</option>
//                     <option>Hybride</option>
//                   </select>
//                 </div>

//                 {/* Number of Seats */}
//                 <div>
//                   <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Nombre de Places</label>
//                   <select
//                     value={filters.seats}
//                     onChange={(e) => handleFilterChange({ ...filters, seats: e.target.value })}
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
//                   >
//                     <option>Tout</option>
//                     <option>5</option>
//                     <option>7</option>
//                     <option>8</option>
//                   </select>
//                 </div>

//                 {/* Availability */}
//                 <div>
//                   <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Disponibilité</label>
//                   <select
//                     value={filters.availability}
//                     onChange={(e) => handleFilterChange({ ...filters, availability: e.target.value })}
//                     className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
//                   >
//                     <option>Tout</option>
//                     <option>Disponible</option>
//                     <option>Indisponible</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Vehicles Grid */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {currentVehicles.map((vehicle) => (
//               <div
//                 key={vehicle.id}
//                 className="group bg-[var(--color-charcoal)] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-[var(--color-gray-800)]"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={vehicle.image || "/placeholder.svg"}
//                     alt={vehicle.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-[var(--color-orange)] text-[var(--color-cream)] px-4 py-2 rounded-full font-bold text-sm">
//                     {formatPrice(vehicle.pricePerDay)}/jour
//                   </div>
//                   {!vehicle.availability.available && (
//                     <div className="absolute top-4 left-4 bg-red-500/90 text-white px-4 py-2 rounded-full font-semibold text-xs">
//                       Non Disponible
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-6">
//                 <div className="mb-2 flex items-center justify-between gap-3">
//                 {/* Type */}
//                 <p className="text-[var(--color-orange)] text-sm font-semibold uppercase tracking-wider">
//                   {vehicle.type}
//                 </p>

//                 {/* Prix de vente */}
//                 {vehicle.sale?.available && (
//                   <span className="text-sm font-bold text-yellow-400 whitespace-nowrap">
//                     {formatPrice(vehicle.sale.price)}
//                   </span>
//                 )}
//               </div>
//                   <h3 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-2">{vehicle.name}</h3>
//                   <div className="flex gap-4 text-sm text-[var(--color-cream)]/60 mb-4">
//                     <span>{vehicle.year}</span>
//                     <span>•</span>
//                     <span>{vehicle.specs.transmission}</span>
//                     <span>•</span>
//                     <span>{vehicle.specs.fuel}</span>
//                   </div>
//                   <div className="space-y-2 mb-6">
//                     {vehicle.features.slice(0, 3).map((feature, idx) => (
//                       <div key={idx} className="flex items-center gap-2 text-sm text-[var(--color-cream)]/80">
//                         <CheckCircle2 size={16} className="text-[var(--color-orange)]" />
//                         <span>{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <Link
//                     href={`/voitures-location-vente-dakar/${vehicle.slug}`}
//                     className="block w-full text-center px-6 py-3 bg-[var(--color-cream)] text-[var(--color-charcoal)] font-semibold rounded-full hover:bg-[var(--color-cream)]/90 transition-all"
//                   >
//                     Voir Détails
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* No Results */}
//           {filteredVehicles.length === 0 && (
//             <div className="text-center py-20">
//               <p className="text-xl text-[var(--color-cream)]/60">
//                 Aucun véhicule ne correspond à vos critères. Essayez d'ajuster les filtres.
//               </p>
//             </div>
//           )}

//           {/* Pagination */}
//           {filteredVehicles.length > ITEMS_PER_PAGE && (
//             <div className="mt-12 flex items-center justify-center gap-2">
//               {/* Previous Button */}
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className={`p-3 rounded-full transition-all ${
//                   currentPage === 1
//                     ? "bg-[var(--color-gray-800)] text-[var(--color-cream)]/30 cursor-not-allowed"
//                     : "bg-[var(--color-gray-800)] text-[var(--color-cream)] hover:bg-[var(--color-orange)]"
//                 }`}
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               {/* Page Numbers */}
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => handlePageChange(page)}
//                   className={`w-10 h-10 rounded-full font-semibold transition-all ${
//                     currentPage === page
//                       ? "bg-[var(--color-orange)] text-[var(--color-cream)]"
//                       : "bg-[var(--color-gray-800)] text-[var(--color-cream)] hover:bg-[var(--color-orange)]"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               {/* Next Button */}
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className={`p-3 rounded-full transition-all ${
//                   currentPage === totalPages
//                     ? "bg-[var(--color-gray-800)] text-[var(--color-cream)]/30 cursor-not-allowed"
//                     : "bg-[var(--color-gray-800)] text-[var(--color-cream)] hover:bg-[var(--color-orange)]"
//                 }`}
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default VehiculesClientPage







// app/voitures-location-vente-dakar/client-page.tsx
"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Sliders, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { getAllVehicles, filterVehicles, getVehicleTypes, formatPrice } from "@/lib/data"
import { getVehicleListSchema, getOrganizationSchema } from "@/lib/schema"

const ITEMS_PER_PAGE = 6

function VehiculesClientPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    type: "All",
    minPrice: 20000,
    maxPrice: 150000,
    transmission: "All",
    fuel: "All",
    seats: "All",
    availability: "All",
  })

  // Récupération des données
  const allVehicles = getAllVehicles()
  const vehicleTypes = getVehicleTypes()

  // Filtrage des véhicules
  const filteredVehicles = filterVehicles({
    type: filters.type !== "All" ? filters.type : undefined,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    transmission: filters.transmission !== "All" ? filters.transmission : undefined,
    fuel: filters.fuel !== "All" ? filters.fuel : undefined,
    seats: filters.seats !== "All" ? Number.parseInt(filters.seats) : undefined,
    availability: filters.availability !== "All" ? (filters.availability.toLowerCase() as "disponible" | "indisponible") : undefined,
  })

  // Schemas
  const vehicleListSchema = getVehicleListSchema(filteredVehicles)
  const organizationSchema = getOrganizationSchema()

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentVehicles = filteredVehicles.slice(startIndex, endIndex)

  // Réinitialiser la page à 1 quand les filtres changent
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  // Scroll to top when page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[var(--color-charcoal)]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/bmn-agence.png"
          alt="B-M-N Motors - Notre Flotte"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/60 to-[var(--color-charcoal)]" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-[var(--color-cream)] mb-8 leading-tight">
            Notre Flotte<span className="text-[var(--color-orange)]">.</span>
          </h1>
          <p className="text-[var(--color-gray-200)] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Découvrez notre incroyable collection de véhicules disponibles à la vente et à la location. Chaque véhicule
            est méticuleusement entretenu pour garantir votre confort et votre sécurité.
          </p>
        </div>
      </section>

      {/* Filters & Vehicles */}
      <section className="py-12 bg-[var(--color-charcoal)]">
        <div className="container mx-auto px-6">
          {/* Filter Toggle Button */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-[var(--color-cream)]/70">
              Affichage de{" "}
              <span className="text-[var(--color-orange)] font-semibold">
                {startIndex + 1}-{Math.min(endIndex, filteredVehicles.length)}
              </span>{" "}
              sur {filteredVehicles.length} véhicules
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--color-gray-800)] text-[var(--color-cream)] rounded-full hover:bg-[var(--color-orange)] transition-all"
            >
              <Sliders size={18} />
              {showFilters ? "Masquer Filtres" : "Afficher Filtres"}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mb-12 p-8 bg-[var(--color-gray-900)] rounded-2xl border border-[var(--color-gray-800)]">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-6">Filtres</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Type de Véhicule</label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange({ ...filters, type: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
                  >
                    <option>All</option>
                    {vehicleTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Transmission</label>
                  <select
                    value={filters.transmission}
                    onChange={(e) => handleFilterChange({ ...filters, transmission: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
                  >
                    <option>All</option>
                    <option>Automatique</option>
                    <option>Manuelle</option>
                  </select>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Carburant</label>
                  <select
                    value={filters.fuel}
                    onChange={(e) => handleFilterChange({ ...filters, fuel: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
                  >
                    <option>All</option>
                    <option>Pétrole</option>
                    <option>Diesel</option>
                    <option>Hybride</option>
                  </select>
                </div>

                {/* Number of Seats */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Nombre de Places</label>
                  <select
                    value={filters.seats}
                    onChange={(e) => handleFilterChange({ ...filters, seats: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
                  >
                    <option>All</option>
                    <option>5</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-cream)] mb-2">Disponibilité</label>
                  <select
                    value={filters.availability}
                    onChange={(e) => handleFilterChange({ ...filters, availability: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] border border-[var(--color-gray-800)] rounded-lg focus:outline-none focus:border-[var(--color-orange)] transition-all"
                  >
                    <option>All</option>
                    <option>Disponible</option>
                    <option>Indisponible</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Vehicles Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {currentVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-[var(--color-charcoal)] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-[var(--color-gray-800)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--color-orange)] text-[var(--color-cream)] px-4 py-2 rounded-full font-bold text-sm">
                    {formatPrice(vehicle.pricePerDay)}/jour
                  </div>
                  {!vehicle.availability.available && (
                    <div className="absolute top-4 left-4 bg-red-500/90 text-white px-4 py-2 rounded-full font-semibold text-xs">
                      Non Disponible
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-[var(--color-orange)] text-sm font-semibold uppercase tracking-wider">
                      {vehicle.type}
                    </p>
                    {vehicle.sale?.available && (
                      <span className="text-sm font-bold text-yellow-400 whitespace-nowrap">
                        {formatPrice(vehicle.sale.price)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-2">{vehicle.name}</h3>
                  <div className="flex gap-4 text-sm text-[var(--color-cream)]/60 mb-4">
                    <span>{vehicle.year}</span>
                    <span>•</span>
                    <span>{vehicle.specs.transmission}</span>
                    <span>•</span>
                    <span>{vehicle.specs.fuel}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--color-cream)]/80">
                        <CheckCircle2 size={16} className="text-[var(--color-orange)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/voitures-location-vente-dakar/${vehicle.slug}`}
                    className="block w-full text-center px-6 py-3 bg-[var(--color-cream)] text-[var(--color-charcoal)] font-semibold rounded-full hover:bg-[var(--color-cream)]/90 transition-all"
                  >
                    Voir Détails
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-[var(--color-cream)]/60">
                Aucun véhicule ne correspond à vos critères. Essayez d'ajuster les filtres.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredVehicles.length > ITEMS_PER_PAGE && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-full transition-all ${
                  currentPage === 1
                    ? "bg-[var(--color-gray-800)] text-[var(--color-cream)]/30 cursor-not-allowed"
                    : "bg-[var(--color-gray-800)] text-[var(--color-cream)] hover:bg-[var(--color-orange)]"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full font-semibold transition-all ${
                    currentPage === page
                      ? "bg-[var(--color-orange)] text-[var(--color-cream)]"
                      : "bg-[var(--color-gray-800)] text-[var(--color-cream)] hover:bg-[var(--color-orange)]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full transition-all ${
                  currentPage === totalPages
                    ? "bg-[var(--color-gray-800)] text-[var(--color-cream)]/30 cursor-not-allowed"
                    : "bg-[var(--color-gray-800)] text-[var(--color-cream)] hover:bg-[var(--color-orange)]"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VehiculesClientPage