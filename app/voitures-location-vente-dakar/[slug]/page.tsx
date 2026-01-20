// //app/vehicules/[slug]/page.tsx
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { VehicleDetails } from "@/components/vehicle-details"
// import { getVehicleBySlug, getAllVehicles } from "@/lib/data"
// import Link from "next/link"
// import { ChevronLeft } from "lucide-react"

// type PageProps = {
//   params: Promise<{ slug: string }>
// }

// export default async function VehicleDetailsPage({ params }: PageProps) {
//   const resolvedParams = await params
//   const vehicle = getVehicleBySlug(resolvedParams.slug)

//   if (!vehicle) {
//     return (
//       <div className="min-h-screen bg-[var(--color-charcoal)]">
//         <Navigation />
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="font-serif text-4xl font-bold text-[var(--color-cream)] mb-4">Véhicule Non Trouvé</h1>
//             <Link
//               href="/voitures-location-vente-dakar"
//               className="inline-flex items-center gap-2 text-[var(--color-orange)] hover:underline"
//             >
//               <ChevronLeft size={20} />
//               Retour aux Véhicules
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-[var(--color-charcoal)]">
//       <Navigation />
//       <VehicleDetails vehicle={vehicle} />
//       <Footer />
//     </div>
//   )
// }

// // Generate static params for all vehicles
// export async function generateStaticParams() {
//   const vehicles = getAllVehicles()
  
//   return vehicles.map((vehicle) => ({
//     slug: vehicle.slug,
//   }))
// }



// app/voitures-location-vente-dakar/[slug]/page.tsx
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VehicleDetails } from "@/components/vehicle-details"
import { getVehicleBySlug, getAllVehicles, formatPrice, type Vehicle } from "@/lib/data"
import { getVehicleSchema, getOrganizationSchema } from "@/lib/schema"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

type PageProps = {
  params: Promise<{ slug: string }>
}

// Métadonnées dynamiques pour chaque véhicule
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const vehicle = await getVehicleBySlug(resolvedParams.slug)

  if (!vehicle) {
    return {
      title: "Véhicule Non Trouvé | B-M-N Motors",
      description: "Le véhicule que vous recherchez n'est pas disponible.",
    }
  }

  const priceText = formatPrice(vehicle.pricePerDay)
  const features = vehicle.features && vehicle.features.length > 0 
    ? vehicle.features.slice(0, 3).join(", ") 
    : "Équipements premium"

  return {
    title: `Location ${vehicle.name} ${vehicle.year} Dakar - ${priceText}/jour | B-M-N Motors`,
    description: `Louez ${vehicle.name} ${vehicle.year} à Dakar. ${vehicle.type}, ${vehicle.specs.transmission}, ${vehicle.specs.seats} places, ${vehicle.specs.fuel}. ${features}. Caution ${formatPrice(vehicle.securityDeposit)}. Réservez maintenant !`,
    keywords: `location ${vehicle.name.toLowerCase()} dakar, ${vehicle.type.toLowerCase()} luxe senegal, ${vehicle.specs.transmission.toLowerCase()} ${vehicle.year}`,
    openGraph: {
      title: `Location ${vehicle.name} ${vehicle.year} Dakar`,
      description: `${priceText}/jour - ${vehicle.type} - ${vehicle.specs.transmission}`,
      url: `https://www.bmn-motors.com/voitures-location-vente-dakar/${vehicle.slug}`,
      siteName: "B-M-N Motors",
      images: [
        {
          url: `https://www.bmn-motors.com${vehicle.image}`,
          width: 1200,
          height: 630,
          alt: `${vehicle.name} ${vehicle.year} - Location Dakar`,
        },
      ],
      locale: "fr_SN",
      type: "website",
    },
  }
}

export default async function VehicleDetailsPage({ params }: PageProps) {
  const resolvedParams = await params
  const vehicle = await getVehicleBySlug(resolvedParams.slug)

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[var(--color-charcoal)]">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-[var(--color-cream)] mb-4">Véhicule Non Trouvé</h1>
            <Link
              href="/voitures-location-vente-dakar"
              className="inline-flex items-center gap-2 text-[var(--color-orange)] hover:underline"
            >
              <ChevronLeft size={20} />
              Retour aux Véhicules
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Schemas
  const vehicleSchema = getVehicleSchema(vehicle)
  const organizationSchema = getOrganizationSchema()

  return (
    <div className="min-h-screen bg-[var(--color-charcoal)]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Navigation />
      <VehicleDetails vehicle={vehicle} />
      <Footer />
    </div>
  )
}

// Generate static params for all vehicles
export async function generateStaticParams() {
  const vehicles = await getAllVehicles()
  
  return vehicles.map((vehicle: Vehicle) => ({
    slug: vehicle.slug,
  }))
}