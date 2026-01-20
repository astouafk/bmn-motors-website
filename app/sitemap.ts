// // app/sitemap.ts
// import { MetadataRoute } from 'next'
// import { getAllVehicles } from '@/lib/data'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://www.bmn-motors.com'
  
//   // Pages statiques
//   const staticPages = [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'daily' as const,
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/voitures-location-vente-dakar`,
//       lastModified: new Date(),
//       changeFrequency: 'daily' as const,
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/location-voiture-luxe-dakar`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly' as const,
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/notre-experience`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly' as const,
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly' as const,
//       priority: 0.6,
//     },
//   ]

//   // Pages dynamiques (véhicules)
//   const vehicles = getAllVehicles()
//   const vehiclePages = vehicles.map((vehicle) => ({
//     url: `${baseUrl}/voitures-location-vente-dakar/${vehicle.slug}`,
//     lastModified: new Date(),
//     changeFrequency: 'weekly' as const,
//     priority: 0.8,
//   }))

//   return [...staticPages, ...vehiclePages]
// }





// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllVehicles } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.bmn-motors.com'
  
  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/voitures-location-vente-dakar`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/location-voiture-luxe-dakar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notre-experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Pages dynamiques (véhicules depuis Sanity)
  const vehicles = await getAllVehicles()
  const vehiclePages: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${baseUrl}/voitures-location-vente-dakar/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...vehiclePages]
}