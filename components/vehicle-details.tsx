// //components/vehicle-details.tsx

// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { ChevronLeft, Check } from "lucide-react"
// import { formatPrice, getWhatsAppLink } from "@/lib/data"
// import type { Vehicle } from "@/lib/data"

// interface VehicleDetailsProps {
//   vehicle: Vehicle
// }

// export function VehicleDetails({ vehicle }: VehicleDetailsProps) {
//   const [selectedImage, setSelectedImage] = useState(0)

//   if (!vehicle) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-serif text-4xl font-bold text-[var(--color-cream)] mb-4">Véhicule Non Trouvé</h1>
//           <Link
//             href="/voitures-location-vente-dakar"
//             className="text-[var(--color-orange)] hover:underline flex items-center justify-center gap-2"
//           >
//             <ChevronLeft size={20} />
//             Retour aux Véhicules
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const handleWhatsAppBooking = () => {
//     const message = `Bonjour! Je suis intéressé(e) par la location du ${vehicle.name} (${vehicle.year}). Pouvez-vous me fournir plus de détails?`
//     const whatsappUrl = getWhatsAppLink(message)
//     window.open(whatsappUrl, "_blank")
//   }

//   return (
//     <>
//       {/* Back Button */}
//       <div className="container mx-auto px-6 pt-32 pb-8">
//         <Link
//           href="/voitures-location-vente-dakar"
//           className="inline-flex items-center gap-2 text-[var(--color-cream)]/70 hover:text-[var(--color-orange)] transition-colors"
//         >
//           <ChevronLeft size={20} />
//           Retour aux Véhicules
//         </Link>
//       </div>

//       {/* Vehicle Details */}
//       <div className="container mx-auto px-6 pb-20">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Gallery Section - STICKY */}
//           <div className="lg:sticky lg:top-32 lg:self-start">
//             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
//               <img
//                 src={vehicle.gallery[selectedImage] || "/placeholder.svg"}
//                 alt={`${vehicle.name} - Image ${selectedImage + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 right-4">
//                 <span
//                   className={`px-4 py-2 text-sm font-semibold rounded-full ${
//                     vehicle.availability.available
//                       ? "bg-green-500/20 text-green-400 border border-green-500"
//                       : "bg-red-500/20 text-red-400 border border-red-500"
//                   }`}
//                 >
//                   {vehicle.availability.available ? "Disponible Maintenant" : "Actuellement Indisponible"}
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-4 gap-4">
//               {vehicle.gallery.map((img: string, idx: number) => (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedImage(idx)}
//                   className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
//                     selectedImage === idx
//                       ? "border-[var(--color-orange)]"
//                       : "border-[var(--color-gray-800)] hover:border-[var(--color-cream)]/50"
//                   }`}
//                 >
//                   <img
//                     src={img || "/placeholder.svg"}
//                     alt={`Miniature ${idx + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Details Section - SCROLLABLE */}
//           <div>
//             <div className="mb-6">
//               <span className="text-sm font-semibold text-[var(--color-orange)] uppercase tracking-wider">
//                 {vehicle.type}
//               </span>
//             </div>
//             <h1 className="font-serif text-5xl md:text-6xl font-bold text-[var(--color-cream)] mb-6 leading-tight">
//               {vehicle.name}
//             </h1>

//             {/* Price */}
//             <div className="mb-8 p-6 bg-[var(--color-gray-900)] rounded-2xl border border-[var(--color-gray-800)]">
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//     {/* Prix de vente */}
//     {vehicle.sale?.available && (
//       <div className="text-left">
//         <p className="text-sm text-[var(--color-cream)]/60 mb-2">
//           Prix de vente
//         </p>
//         <p className="font-serif text-4xl font-bold text-yellow-400">
//           {formatPrice(vehicle.sale.price)}
//         </p>
//       </div>
//     )}

//     {/* Prix par jour */}
//     <div className="text-left sm:text-right">
//       <p className="text-sm text-[var(--color-cream)]/60 mb-2">
//         Prix par jour
//       </p>
//       <p className="font-serif text-4xl font-bold text-[var(--color-orange)]">
//         {formatPrice(vehicle.pricePerDay)}
//       </p>
//     </div>
//   </div>

//   {/* Caution */}
//   <p className="text-sm text-[var(--color-cream)]/60 mt-6 text-center">
//     Caution : {formatPrice(vehicle.securityDeposit)}
//   </p>
// </div>


//             {/* Main Information */}
//             <div className="mb-8">
//               <h2 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-4">Spécifications</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
//                   <p className="text-sm text-[var(--color-cream)]/60 mb-1">Année</p>
//                   <p className="font-semibold text-[var(--color-cream)]">{vehicle.year}</p>
//                 </div>
//                 <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
//                   <p className="text-sm text-[var(--color-cream)]/60 mb-1">Transmission</p>
//                   <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.transmission}</p>
//                 </div>
//                 <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
//                   <p className="text-sm text-[var(--color-cream)]/60 mb-1">Carburant</p>
//                   <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.fuel}</p>
//                 </div>
//                 <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
//                   <p className="text-sm text-[var(--color-cream)]/60 mb-1">Places</p>
//                   <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.seats}</p>
//                 </div>
//                 <div className="p-4 bg-[var(--color-gray-900)] rounded-xl col-span-2">
//                   <p className="text-sm text-[var(--color-cream)]/60 mb-1">Consommation</p>
//                   <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.fuelConsumption}</p>
//                 </div>
//               </div>
//             </div>

//            {/* Features */}
//            <div className="mb-8">
//             <h2 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-4">Équipements & Options</h2>
//             {vehicle.features.length > 0 ? (
//               <div className="grid grid-cols-2 gap-3">
//                 {vehicle.features.map((feature: string, idx: number) => (
//                   <div key={idx} className="flex items-start gap-2 group">
//                     <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center mt-0.5 group-hover:bg-[var(--color-orange)] transition-colors">
//                       <Check size={14} className="text-[var(--color-orange)] group-hover:text-[var(--color-cream)] transition-colors" />
//                     </div>
//                     <span className="text-sm text-[var(--color-cream)]/80">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-[var(--color-cream)]/60 text-sm">Aucun équipement spécifié</p>
//             )}
//           </div>
//             {/* Rental Conditions */}
//             <div className="mb-8 p-6 bg-[var(--color-gray-900)] rounded-2xl border border-[var(--color-gray-800)]">
//               <h2 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-4">Conditions de Location</h2>
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-sm font-semibold text-[var(--color-cream)] mb-2">Options de Location</p>
//                   <div className="flex gap-3">
//                     {vehicle.availability.withDriver && (
//                       <span className="px-4 py-2 bg-[var(--color-charcoal)] text-[var(--color-cream)] text-sm rounded-lg border border-[var(--color-orange)]">
//                         Avec Chauffeur
//                       </span>
//                     )}
//                     {vehicle.availability.withoutDriver && (
//                       <span className="px-4 py-2 bg-[var(--color-charcoal)] text-[var(--color-cream)] text-sm rounded-lg border border-[var(--color-orange)]">
//                         Sans Chauffeur
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               {/* Documents */}
//                 <div>
//                   <p className="text-sm font-semibold text-[var(--color-cream)] mb-2">Documents Requis</p>
//                   {vehicle.documents.length > 0 ? (
//                     <ul className="space-y-2">
//                       {vehicle.documents.map((doc: string, idx: number) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-cream)]/70">
//                           <Check size={16} className="text-[var(--color-orange)] mt-0.5 flex-shrink-0" />
//                           {doc}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-[var(--color-cream)]/60 text-sm">À définir lors de la réservation</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button - UN SEUL BOUTON CENTRÉ */}
//             <div className="flex justify-center">
//               <button
//                 onClick={handleWhatsAppBooking}
//                 className="w-full md:w-auto px-12 py-5 bg-[var(--color-orange)] text-[var(--color-cream)] text-lg font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   width="24"
//                   height="24"
//                   fill="currentColor"
//                   className="flex-shrink-0"
//                 >
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//                 </svg>
//                 Contactez-Moi via WhatsApp
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }



//components/vehicle-details.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Check } from "lucide-react"
import { formatPrice, getWhatsAppLink } from "@/lib/data"
import type { Vehicle } from "@/lib/data"

interface VehicleDetailsProps {
  vehicle: Vehicle
}

export function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[var(--color-cream)] mb-4">Véhicule Non Trouvé</h1>
          <Link
            href="/voitures-location-vente-dakar"
            className="text-[var(--color-orange)] hover:underline flex items-center justify-center gap-2"
          >
            <ChevronLeft size={20} />
            Retour aux Véhicules
          </Link>
        </div>
      </div>
    )
  }

  const handleWhatsAppBooking = () => {
    const message = `Bonjour! Je suis intéressé(e) par ${vehicle.sale?.available ? 'l\'achat' : 'la location'} du ${vehicle.name} (${vehicle.year}). Pouvez-vous me fournir plus de détails?`
    const whatsappUrl = getWhatsAppLink(message)
    window.open(whatsappUrl, "_blank")
  }

  // ✅ Vérifier si le véhicule est disponible à la location
  const isRentalAvailable = vehicle.pricePerDay != null && vehicle.pricePerDay > 0

  return (
    <>
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-32 pb-8">
        <Link
          href="/voitures-location-vente-dakar"
          className="inline-flex items-center gap-2 text-[var(--color-cream)]/70 hover:text-[var(--color-orange)] transition-colors"
        >
          <ChevronLeft size={20} />
          Retour aux Véhicules
        </Link>
      </div>

      {/* Vehicle Details */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery Section - STICKY */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img
                src={vehicle.gallery[selectedImage] || "/placeholder.svg"}
                alt={`${vehicle.name} - Image ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-4 py-2 text-sm font-semibold rounded-full ${
                    vehicle.availability.available
                      ? "bg-green-500/20 text-green-400 border border-green-500"
                      : "bg-red-500/20 text-red-400 border border-red-500"
                  }`}
                >
                  {vehicle.availability.available ? "Disponible Maintenant" : "Actuellement Indisponible"}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {vehicle.gallery.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-[var(--color-orange)]"
                      : "border-[var(--color-gray-800)] hover:border-[var(--color-cream)]/50"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Miniature ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section - SCROLLABLE */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-semibold text-[var(--color-orange)] uppercase tracking-wider">
                {vehicle.type}
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[var(--color-cream)] mb-6 leading-tight">
              {vehicle.name}
            </h1>

            {/* Price - Gestion intelligente selon disponibilité */}
            <div className="mb-8 p-6 bg-[var(--color-gray-900)] rounded-2xl border border-[var(--color-gray-800)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Prix de vente */}
                {vehicle.sale?.available && vehicle.sale.price && (
                  <div className="text-left">
                    <p className="text-sm text-[var(--color-cream)]/60 mb-2">
                      Prix de vente
                    </p>
                    <p className="font-serif text-4xl font-bold text-yellow-400">
                      {formatPrice(vehicle.sale.price)}
                    </p>
                  </div>
                )}

                {/* Prix par jour - Affiché uniquement si disponible */}
                {isRentalAvailable && vehicle.pricePerDay && (
                  <div className={`text-left ${vehicle.sale?.available ? 'sm:text-right' : ''}`}>
                    <p className="text-sm text-[var(--color-cream)]/60 mb-2">
                      Prix par jour
                    </p>
                    <p className="font-serif text-4xl font-bold text-[var(--color-orange)]">
                      {formatPrice(vehicle.pricePerDay)}
                    </p>
                  </div>
                )}
              </div>

              {/* Caution - Affichée uniquement si location disponible ET caution définie */}
              {isRentalAvailable && vehicle.securityDeposit != null && vehicle.securityDeposit > 0 && (
                <p className="text-sm text-[var(--color-cream)]/60 mt-6 text-center">
                  Caution : {formatPrice(vehicle.securityDeposit)}
                </p>
              )}

              {/* Message si ni location ni vente disponible */}
              {!vehicle.sale?.available && !isRentalAvailable && (
                <p className="text-center text-[var(--color-cream)]/60">
                  Prix sur demande - Contactez-nous pour plus d'informations
                </p>
              )}
            </div>

            {/* Main Information */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-4">Spécifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
                  <p className="text-sm text-[var(--color-cream)]/60 mb-1">Année</p>
                  <p className="font-semibold text-[var(--color-cream)]">{vehicle.year}</p>
                </div>
                <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
                  <p className="text-sm text-[var(--color-cream)]/60 mb-1">Transmission</p>
                  <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.transmission}</p>
                </div>
                <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
                  <p className="text-sm text-[var(--color-cream)]/60 mb-1">Carburant</p>
                  <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.fuel}</p>
                </div>
                <div className="p-4 bg-[var(--color-gray-900)] rounded-xl">
                  <p className="text-sm text-[var(--color-cream)]/60 mb-1">Places</p>
                  <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.seats}</p>
                </div>
                <div className="p-4 bg-[var(--color-gray-900)] rounded-xl col-span-2">
                  <p className="text-sm text-[var(--color-cream)]/60 mb-1">Consommation</p>
                  <p className="font-semibold text-[var(--color-cream)]">{vehicle.specs.fuelConsumption}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-4">Équipements & Options</h2>
              {vehicle.features.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 group">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center mt-0.5 group-hover:bg-[var(--color-orange)] transition-colors">
                        <Check size={14} className="text-[var(--color-orange)] group-hover:text-[var(--color-cream)] transition-colors" />
                      </div>
                      <span className="text-sm text-[var(--color-cream)]/80">{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--color-cream)]/60 text-sm">Aucun équipement spécifié</p>
              )}
            </div>

            {/* Rental Conditions - Affiché uniquement si location disponible */}
            {isRentalAvailable && (
              <div className="mb-8 p-6 bg-[var(--color-gray-900)] rounded-2xl border border-[var(--color-gray-800)]">
                <h2 className="font-serif text-2xl font-bold text-[var(--color-cream)] mb-4">Conditions de Location</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-cream)] mb-2">Options de Location</p>
                    <div className="flex gap-3">
                      {vehicle.availability.withDriver && (
                        <span className="px-4 py-2 bg-[var(--color-charcoal)] text-[var(--color-cream)] text-sm rounded-lg border border-[var(--color-orange)]">
                          Avec Chauffeur
                        </span>
                      )}
                      {vehicle.availability.withoutDriver && (
                        <span className="px-4 py-2 bg-[var(--color-charcoal)] text-[var(--color-cream)] text-sm rounded-lg border border-[var(--color-orange)]">
                          Sans Chauffeur
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Documents */}
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-cream)] mb-2">Documents Requis</p>
                    {vehicle.documents.length > 0 ? (
                      <ul className="space-y-2">
                        {vehicle.documents.map((doc: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-cream)]/70">
                            <Check size={16} className="text-[var(--color-orange)] mt-0.5 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[var(--color-cream)]/60 text-sm">À définir lors de la réservation</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full md:w-auto px-12 py-5 bg-[var(--color-orange)] text-[var(--color-cream)] text-lg font-bold rounded-full hover:bg-[var(--color-orange)]/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contactez-Moi via WhatsApp.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}