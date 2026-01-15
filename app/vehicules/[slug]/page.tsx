import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VehicleDetails } from "@/components/vehicle-details"
import { getVehicleBySlug, getAllVehicles } from "@/lib/data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function VehicleDetailsPage({ params }: PageProps) {
  const resolvedParams = await params
  const vehicle = getVehicleBySlug(resolvedParams.slug)

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[var(--color-charcoal)]">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-[var(--color-cream)] mb-4">Véhicule Non Trouvé</h1>
            <Link
              href="/vehicules"
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

  return (
    <div className="min-h-screen bg-[var(--color-charcoal)]">
      <Navigation />
      <VehicleDetails vehicle={vehicle} />
      <Footer />
    </div>
  )
}

// Generate static params for all vehicles
export async function generateStaticParams() {
  const vehicles = getAllVehicles()
  
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }))
}