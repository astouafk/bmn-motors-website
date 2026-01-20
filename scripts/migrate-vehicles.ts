// scripts/migrate-vehicles.ts
import { client } from '../sanity/lib/client'
import vehiclesData from '../data/vehicles.json'

interface VehicleJSON {
  id: string
  slug: string
  name: string
  type: string
  year: number
  pricePerDay: number
  securityDeposit: number
  sale?: {
    price: number
    currency: string
    available: boolean
  }
  image: string
  gallery: string[]
  specs: {
    transmission: string
    fuel: string
    seats: number
    fuelConsumption: string
  }
  features: string[]
  availability: {
    available: boolean
    withDriver: boolean
    withoutDriver: boolean
  }
  documents: string[]
  featured: boolean
  order: number
}

/**
 * Transforme un véhicule JSON en document Sanity
 */
function transformVehicleForSanity(vehicle: VehicleJSON) {
  return {
    _type: 'vehicle',
    name: vehicle.name,
    slug: {
      _type: 'slug',
      current: vehicle.slug,
    },
    type: vehicle.type,
    year: vehicle.year,
    pricePerDay: vehicle.pricePerDay,
    securityDeposit: vehicle.securityDeposit,
    sale: vehicle.sale || null,
    // Images : on va juste stocker les URLs pour l'instant
    // Tu pourras uploader les vraies images plus tard dans Sanity Studio
    imageUrl: vehicle.image,
    galleryUrls: vehicle.gallery,
    specs: vehicle.specs,
    features: vehicle.features,
    availability: vehicle.availability,
    documents: vehicle.documents,
    featured: vehicle.featured,
    order: vehicle.order,
  }
}

/**
 * Migration principale
 */
async function migrateVehicles() {
  console.log('🚀 Début de la migration des véhicules...\n')

  const vehicles = vehiclesData.vehicles as VehicleJSON[]
  
  console.log(`📊 ${vehicles.length} véhicules à migrer\n`)

  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i]
    
    try {
      console.log(`⏳ [${i + 1}/${vehicles.length}] Migration de "${vehicle.name}"...`)
      
      // Vérifier si le véhicule existe déjà
      const existingVehicle = await client.fetch(
        `*[_type == "vehicle" && slug.current == $slug][0]`,
        { slug: vehicle.slug }
      )

      if (existingVehicle) {
        console.log(`   ⚠️  "${vehicle.name}" existe déjà (ignoré)`)
        continue
      }

      // Transformer et créer le document
      const sanityVehicle = transformVehicleForSanity(vehicle)
      
      await client.create(sanityVehicle)
      
      console.log(`   ✅ "${vehicle.name}" migré avec succès!`)
      
    } catch (error) {
      console.error(`   ❌ Erreur lors de la migration de "${vehicle.name}":`, error)
    }
  }

  console.log('\n🎉 Migration terminée!\n')
}

// Exécuter la migration
migrateVehicles()
  .then(() => {
    console.log('✅ Script terminé avec succès')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Erreur fatale:', error)
    process.exit(1)
  })