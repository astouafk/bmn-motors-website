//app/voitures-location-vente-dakar/page.tsx
import type { Metadata } from "next"
import VehiculesClientPage from "./client-page"

export const metadata: Metadata = {
  title: "50+ Voitures Premium à Louer ou Acheter à Dakar | B-M-N Motors",
  description: "Découvrez notre flotte de 50+ véhicules premium : SUV, berlines, 4x4. Location à partir de 35.000 FCFA/jour. Mercedes, BMW, Toyota. Disponible 24/7.",
  keywords: "voiture luxe dakar, suv location dakar, berline premium senegal, 4x4 toyota dakar, achat voiture occasion dakar",
  openGraph: {
    title: "50+ Voitures Premium à Louer ou Acheter à Dakar",
    description: "SUV, berlines, 4x4. Location à partir de 35.000 FCFA/jour. Vente avec garantie.",
    url: "https://www.bmn-motors.com/voitures-location-vente-dakar",
    siteName: "B-M-N Motors",
    images: [
      {
        url: "https://www.bmn-motors.com/bmn-agence.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_SN",
    type: "website",
  },
}

export default function VehiculesPage() {
  return <VehiculesClientPage />
}