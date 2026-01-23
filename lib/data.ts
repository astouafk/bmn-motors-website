// // //lib/data.ts
// // import vehiclesData from '@/data/vehicles.json'
// // import configData from '@/data/config.json'
// // import testimonialsData from '@/data/testimonials.json'
// // import benefitsData from '@/data/benefits.json'
// // import categoriesData from '@/data/categories.json'

// // // ==========================================
// // // TYPES
// // // ==========================================

// // export interface Vehicle {
// //   id: string
// //   slug: string
// //   name: string
// //   type: string
// //   year: number
// //   pricePerDay: number
// //   securityDeposit: number

// //   sale?: {
// //     price: number
// //     currency: string
// //     available: boolean
// //   }

// //   image: string
// //   gallery: string[]
// //   specs: {
// //     transmission: string
// //     fuel: string
// //     seats: number
// //     fuelConsumption: string
// //   }
// //   features: string[]
// //   availability: {
// //     available: boolean
// //     withDriver: boolean
// //     withoutDriver: boolean
// //   }
// //   documents: string[]
// //   featured: boolean
// //   order: number
// // }

// // export interface Config {
// //   contact: {
// //     phone: string
// //     phoneRaw: string
// //     whatsapp: string
// //     email: string
// //     address: string
// //     addressFull: string
// //   }
// //   social: {
// //     facebook: string
// //     instagram: string
// //     linkedin: string
// //   }
// //   business: {
// //     name: string
// //     legalName: string
// //     foundedYear: number
// //     owner: {
// //       name: string
// //       photo: string
// //       experience: string
// //     }
// //     stats: {
// //       vehicles: string
// //       experience: string
// //       satisfaction: string
// //       support: string
// //     }
// //   }
// // }

// // export interface Testimonial {
// //   id: number
// //   name: string
// //   role: string
// //   text: string
// //   rating: number
// //   avatar: string | null
// // }

// // // ==========================================
// // // VEHICLES
// // // ==========================================

// // /**
// //  * Récupère tous les véhicules
// //  */
// // export function getAllVehicles(): Vehicle[] {
// //   return vehiclesData.vehicles as Vehicle[]
// // }

// // /**
// //  * Récupère un véhicule par son slug
// //  */
// // export function getVehicleBySlug(slug: string): Vehicle | undefined {
// //   return vehiclesData.vehicles.find((v) => v.slug === slug) as Vehicle | undefined
// // }

// // /**
// //  * Récupère un véhicule par son ID (legacy support)
// //  */
// // export function getVehicleById(id: string): Vehicle | undefined {
// //   return vehiclesData.vehicles.find((v) => v.id === id) as Vehicle | undefined
// // }

// // /**
// //  * Récupère les véhicules vedettes (featured)
// //  */
// // export function getFeaturedVehicles(): Vehicle[] {
// //   return vehiclesData.vehicles
// //     .filter((v) => v.featured)
// //     .sort((a, b) => a.order - b.order) as Vehicle[]
// // }

// // /**
// //  * Récupère les véhicules disponibles
// //  */
// // export function getAvailableVehicles(): Vehicle[] {
// //   return vehiclesData.vehicles.filter((v) => v.availability.available) as Vehicle[]
// // }

// // /**
// //  * Récupère les véhicules par type
// //  */
// // export function getVehiclesByType(type: string): Vehicle[] {
// //   return vehiclesData.vehicles.filter((v) => v.type === type) as Vehicle[]
// // }

// // /**
// //  * Récupère tous les types de véhicules (uniques)
// //  */
// // export function getVehicleTypes(): string[] {
// //   const types = vehiclesData.vehicles.map((v) => v.type)
// //   return [...new Set(types)]
// // }

// // /**
// //  * Filtre les véhicules selon des critères
// //  */
// // export function filterVehicles(filters: {
// //   type?: string
// //   minPrice?: number
// //   maxPrice?: number
// //   transmission?: string
// //   fuel?: string
// //   seats?: number
// //   availability?: 'disponible' | 'indisponible'
// // }): Vehicle[] {
// //   let filtered = getAllVehicles()

// //   if (filters.type && filters.type !== 'Tout') {
// //     filtered = filtered.filter((v) => v.type === filters.type)
// //   }

// //   if (filters.minPrice !== undefined) {
// //     filtered = filtered.filter((v) => v.pricePerDay >= filters.minPrice!)
// //   }

// //   if (filters.maxPrice !== undefined) {
// //     filtered = filtered.filter((v) => v.pricePerDay <= filters.maxPrice!)
// //   }

// //   if (filters.transmission && filters.transmission !== 'Tout') {
// //     filtered = filtered.filter((v) => v.specs.transmission === filters.transmission)
// //   }

// //   if (filters.fuel && filters.fuel !== 'Tout') {
// //     filtered = filtered.filter((v) => v.specs.fuel === filters.fuel)
// //   }

// //   if (filters.seats) {
// //     filtered = filtered.filter((v) => v.specs.seats === filters.seats)
// //   }

// //   if (filters.availability === 'disponible') {
// //     filtered = filtered.filter((v) => v.availability.available)
// //   } else if (filters.availability === 'indisponible') {
// //     filtered = filtered.filter((v) => !v.availability.available)
// //   }

// //   return filtered
// // }

// // // ==========================================
// // // CONFIG
// // // ==========================================

// // /**
// //  * Récupère toute la configuration
// //  */
// // export function getConfig(): Config {
// //   return configData as Config
// // }

// // /**
// //  * Récupère les informations de contact
// //  */
// // export function getContactInfo() {
// //   return configData.contact
// // }

// // /**
// //  * Récupère les liens réseaux sociaux
// //  */
// // export function getSocialLinks() {
// //   return configData.social
// // }

// // /**
// //  * Récupère les informations business
// //  */
// // export function getBusinessInfo() {
// //   return configData.business
// // }

// // /**
// //  * Récupère les statistiques
// //  */
// // export function getStats() {
// //   return configData.business.stats
// // }

// // /**
// //  * Récupère les infos du propriétaire
// //  */
// // export function getOwnerInfo() {
// //   return configData.business.owner
// // }

// // // ==========================================
// // // TESTIMONIALS
// // // ==========================================

// // /**
// //  * Récupère tous les témoignages
// //  */
// // export function getAllTestimonials(): Testimonial[] {
// //   return testimonialsData.testimonials as Testimonial[]
// // }

// // /**
// //  * Récupère un témoignage par ID
// //  */
// // export function getTestimonialById(id: number): Testimonial | undefined {
// //   return testimonialsData.testimonials.find((t) => t.id === id) as Testimonial | undefined
// // }

// // // ==========================================
// // // BENEFITS
// // // ==========================================

// // /**
// //  * Récupère les avantages de location
// //  */
// // export function getRentalBenefits() {
// //   return benefitsData.rentalBenefits
// // }

// // /**
// //  * Récupère les privilèges membres
// //  */
// // export function getMemberBenefits() {
// //   return benefitsData.memberBenefits
// // }

// // /**
// //  * Récupère les valeurs fondamentales
// //  */
// // export function getCoreValues() {
// //   return benefitsData.coreValues
// // }

// // // ==========================================
// // // CATEGORIES
// // // ==========================================

// // /**
// //  * Récupère toutes les catégories de location
// //  */
// // export function getRentalCategories() {
// //   return categoriesData.rentalCategories
// // }

// // /**
// //  * Récupère une catégorie par ID
// //  */
// // export function getCategoryById(id: string) {
// //   return categoriesData.rentalCategories.find((c) => c.id === id)
// // }

// // // ==========================================
// // // UTILITY
// // // ==========================================

// // /**
// //  * Formate un prix en FCFA
// //  */
// // export function formatPrice(price: number): string {
// //   return `${price.toLocaleString('fr-FR')} FCFA`
// // }

// // /**
// //  * Génère un lien WhatsApp avec message pré-rempli
// //  */
// // export function getWhatsAppLink(message: string): string {
// //   const config = getConfig()
// //   return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`
// // }

// // /**
// //  * Génère un lien téléphone
// //  */
// // export function getPhoneLink(): string {
// //   const config = getConfig()
// //   return `tel:${config.contact.phoneRaw}`
// // }

// // /**
// //  * Génère un lien email
// //  */
// // export function getEmailLink(subject?: string): string {
// //   const config = getConfig()
// //   const url = `mailto:${config.contact.email}`
// //   return subject ? `${url}?subject=${encodeURIComponent(subject)}` : url
// // }








// // lib/data.ts
// import { client } from '@/sanity/lib/client'
// import {
//   ALL_VEHICLES_QUERY,
//   VEHICLE_BY_SLUG_QUERY,
//   FEATURED_VEHICLES_QUERY,
//   AVAILABLE_VEHICLES_QUERY,
//   VEHICLE_TYPES_QUERY,
// } from './sanity-queries'

// // Garder les anciens imports pour compatibilité temporaire
// import vehiclesData from '@/data/vehicles.json'
// import configData from '@/data/config.json'
// import testimonialsData from '@/data/testimonials.json'
// import benefitsData from '@/data/benefits.json'
// import categoriesData from '@/data/categories.json'

// // ==========================================
// // TYPES
// // ==========================================

// export interface Vehicle {
//   _id?: string
//   id?: string
//   slug: { current: string } | string
//   name: string
//   type: string
//   year: number
//   pricePerDay: number
//   securityDeposit: number
//   sale?: {
//     price: number
//     currency?: string
//     available: boolean
//   }
//   image: string
//   gallery: string[]
//   specs: {
//     transmission: string
//     fuel: string
//     seats: number
//     fuelConsumption: string
//   }
//   features: string[]
//   availability: {
//     available: boolean
//     withDriver: boolean
//     withoutDriver: boolean
//   }
//   documents: string[]
//   featured: boolean
//   order: number
// }

// export interface Config {
//   contact: {
//     phone: string
//     phoneRaw: string
//     whatsapp: string
//     email: string
//     address: string
//     addressFull: string
//   }
//   social: {
//     facebook: string
//     instagram: string
//     linkedin: string
//   }
//   business: {
//     name: string
//     legalName: string
//     foundedYear: number
//     owner: {
//       name: string
//       photo: string
//       experience: string
//     }
//     stats: {
//       vehicles: string
//       experience: string
//       satisfaction: string
//       support: string
//     }
//   }
// }

// export interface Testimonial {
//   id: number
//   name: string
//   role: string
//   text: string
//   rating: number
//   avatar: string | null
// }

// // ==========================================
// // HELPER : Normaliser le slug
// // ==========================================
// function normalizeSlug(slug: { current: string } | string): string {
//   return typeof slug === 'string' ? slug : slug.current
// }

// // ==========================================
// // VEHICLES (SANITY)
// // ==========================================

// /**
//  * Récupère tous les véhicules depuis Sanity
//  */
// // export async function getAllVehicles(): Promise<Vehicle[]> {
// //   try {
// //     const vehicles = await client.fetch(ALL_VEHICLES_QUERY)
// //     return vehicles.map((v: any) => ({
// //       ...v,
// //       id: v._id,
// //       slug: normalizeSlug(v.slug),
// //     }))
// //   } catch (error) {
// //     console.error('Error fetching vehicles from Sanity:', error)
// //     // Fallback vers JSON si Sanity échoue
// //     return vehiclesData.vehicles as Vehicle[]
// //   }
// // }


// /**
//  * Récupère tous les véhicules depuis Sanity
//  */
// export async function getAllVehicles(): Promise<Vehicle[]> {
//   try {
//     const vehicles = await client.fetch(ALL_VEHICLES_QUERY)
//     return vehicles.map((v: any) => normalizeVehicle(v))
//   } catch (error) {
//     console.error('Error fetching vehicles from Sanity:', error)
//     // Fallback vers JSON si Sanity échoue
//     return vehiclesData.vehicles as Vehicle[]
//   }
// }


// /**
//  * Normalise un véhicule Sanity (convertit null en tableaux vides)
//  */
// function normalizeVehicle(vehicle: any): Vehicle {
//   return {
//     ...vehicle,
//     id: vehicle._id || vehicle.id,
//     slug: normalizeSlug(vehicle.slug),
//     features: vehicle.features || [],           // ← FIX
//     documents: vehicle.documents || [],         // ← FIX
//     gallery: vehicle.gallery || [],             // ← FIX
//     sale: vehicle.sale || { available: false, price: 0 }, // ← FIX
//   }
// }


// /**
//  * Récupère un véhicule par son slug depuis Sanity
//  */
// // export async function getVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
// //   try {
// //     const vehicle = await client.fetch(VEHICLE_BY_SLUG_QUERY, { slug })
// //     if (!vehicle) return undefined
    
// //     return {
// //       ...vehicle,
// //       id: vehicle._id,
// //       slug: normalizeSlug(vehicle.slug),
// //     }
// //   } catch (error) {
// //     console.error('Error fetching vehicle by slug from Sanity:', error)
// //     // Fallback vers JSON
// //     return vehiclesData.vehicles.find((v) => v.slug === slug) as Vehicle | undefined
// //   }
// // }


// /**
//  * Récupère un véhicule par son slug depuis Sanity
//  */
// export async function getVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
//   try {
//     const vehicle = await client.fetch(VEHICLE_BY_SLUG_QUERY, { slug })
//     if (!vehicle) return undefined
    
//     return normalizeVehicle(vehicle)
//   } catch (error) {
//     console.error('Error fetching vehicle by slug from Sanity:', error)
//     // Fallback vers JSON
//     return vehiclesData.vehicles.find((v) => v.slug === slug) as Vehicle | undefined
//   }
// }

// /**
//  * Récupère un véhicule par son ID (legacy support)
//  */
// export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
//   const vehicles = await getAllVehicles()
//   return vehicles.find((v) => v.id === id || v._id === id)
// }

// /**
//  * Récupère les véhicules vedettes (featured)
//  */
// // export async function getFeaturedVehicles(): Promise<Vehicle[]> {
// //   try {
// //     const vehicles = await client.fetch(FEATURED_VEHICLES_QUERY)
// //     return vehicles.map((v: any) => ({
// //       ...v,
// //       id: v._id,
// //       slug: normalizeSlug(v.slug),
// //     }))
// //   } catch (error) {
// //     console.error('Error fetching featured vehicles from Sanity:', error)
// //     // Fallback
// //     return vehiclesData.vehicles
// //       .filter((v) => v.featured)
// //       .sort((a, b) => a.order - b.order) as Vehicle[]
// //   }
// // }


// /**
//  * Récupère les véhicules vedettes (featured)
//  */
// export async function getFeaturedVehicles(): Promise<Vehicle[]> {
//   try {
//     const vehicles = await client.fetch(FEATURED_VEHICLES_QUERY)
//     return vehicles.map((v: any) => normalizeVehicle(v))
//   } catch (error) {
//     console.error('Error fetching featured vehicles from Sanity:', error)
//     // Fallback
//     return vehiclesData.vehicles
//       .filter((v) => v.featured)
//       .sort((a, b) => a.order - b.order) as Vehicle[]
//   }
// }

// /**
//  * Récupère les véhicules disponibles
//  */
// // export async function getAvailableVehicles(): Promise<Vehicle[]> {
// //   try {
// //     const vehicles = await client.fetch(AVAILABLE_VEHICLES_QUERY)
// //     return vehicles.map((v: any) => ({
// //       ...v,
// //       id: v._id,
// //       slug: normalizeSlug(v.slug),
// //     }))
// //   } catch (error) {
// //     console.error('Error fetching available vehicles from Sanity:', error)
// //     // Fallback
// //     return vehiclesData.vehicles.filter((v) => v.availability.available) as Vehicle[]
// //   }
// // }


// /**
//  * Récupère les véhicules disponibles
//  */
// export async function getAvailableVehicles(): Promise<Vehicle[]> {
//   try {
//     const vehicles = await client.fetch(AVAILABLE_VEHICLES_QUERY)
//     return vehicles.map((v: any) => normalizeVehicle(v))
//   } catch (error) {
//     console.error('Error fetching available vehicles from Sanity:', error)
//     // Fallback
//     return vehiclesData.vehicles.filter((v) => v.availability.available) as Vehicle[]
//   }
// }


// /**
//  * Récupère les véhicules par type
//  */
// export async function getVehiclesByType(type: string): Promise<Vehicle[]> {
//   const vehicles = await getAllVehicles()
//   return vehicles.filter((v) => v.type === type)
// }

// /**
//  * Récupère tous les types de véhicules (uniques)
//  */
// export async function getVehicleTypes(): Promise<string[]> {
//   try {
//     return await client.fetch(VEHICLE_TYPES_QUERY)
//   } catch (error) {
//     console.error('Error fetching vehicle types from Sanity:', error)
//     // Fallback
//     const types = vehiclesData.vehicles.map((v) => v.type)
//     return [...new Set(types)]
//   }
// }

// /**
//  * Filtre les véhicules selon des critères
//  */
// export async function filterVehicles(filters: {
//   type?: string
//   minPrice?: number
//   maxPrice?: number
//   transmission?: string
//   fuel?: string
//   seats?: number
//   availability?: 'disponible' | 'indisponible'
// }): Promise<Vehicle[]> {
//   let filtered = await getAllVehicles()

//   if (filters.type && filters.type !== 'Tout') {
//     filtered = filtered.filter((v) => v.type === filters.type)
//   }

//   if (filters.minPrice !== undefined) {
//     filtered = filtered.filter((v) => v.pricePerDay >= filters.minPrice!)
//   }

//   if (filters.maxPrice !== undefined) {
//     filtered = filtered.filter((v) => v.pricePerDay <= filters.maxPrice!)
//   }

//   if (filters.transmission && filters.transmission !== 'Tout') {
//     filtered = filtered.filter((v) => v.specs.transmission === filters.transmission)
//   }

//   if (filters.fuel && filters.fuel !== 'Tout') {
//     filtered = filtered.filter((v) => v.specs.fuel === filters.fuel)
//   }

//   if (filters.seats) {
//     filtered = filtered.filter((v) => v.specs.seats === filters.seats)
//   }

//   if (filters.availability === 'disponible') {
//     filtered = filtered.filter((v) => v.availability.available)
//   } else if (filters.availability === 'indisponible') {
//     filtered = filtered.filter((v) => !v.availability.available)
//   }

//   return filtered
// }

// // ==========================================
// // CONFIG (JSON - pas encore migré)
// // ==========================================

// export function getConfig(): Config {
//   return configData as Config
// }

// export function getContactInfo() {
//   return configData.contact
// }

// export function getSocialLinks() {
//   return configData.social
// }

// export function getBusinessInfo() {
//   return configData.business
// }

// export function getStats() {
//   return configData.business.stats
// }

// export function getOwnerInfo() {
//   return configData.business.owner
// }

// // ==========================================
// // TESTIMONIALS (JSON - pas encore migré)
// // ==========================================

// export function getAllTestimonials(): Testimonial[] {
//   return testimonialsData.testimonials as Testimonial[]
// }

// export function getTestimonialById(id: number): Testimonial | undefined {
//   return testimonialsData.testimonials.find((t) => t.id === id) as Testimonial | undefined
// }

// // ==========================================
// // BENEFITS (JSON - pas encore migré)
// // ==========================================

// export function getRentalBenefits() {
//   return benefitsData.rentalBenefits
// }

// export function getMemberBenefits() {
//   return benefitsData.memberBenefits
// }

// export function getCoreValues() {
//   return benefitsData.coreValues
// }

// // ==========================================
// // CATEGORIES (JSON - pas encore migré)
// // ==========================================

// export function getRentalCategories() {
//   return categoriesData.rentalCategories
// }

// export function getCategoryById(id: string) {
//   return categoriesData.rentalCategories.find((c) => c.id === id)
// }

// // ==========================================
// // UTILITY
// // ==========================================

// export function formatPrice(price: number): string {
//   return `${price.toLocaleString('fr-FR')} FCFA`
// }

// export function getWhatsAppLink(message: string): string {
//   const config = getConfig()
//   return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`
// }

// export function getPhoneLink(): string {
//   const config = getConfig()
//   return `tel:${config.contact.phoneRaw}`
// }

// export function getEmailLink(subject?: string): string {
//   const config = getConfig()
//   const url = `mailto:${config.contact.email}`
//   return subject ? `${url}?subject=${encodeURIComponent(subject)}` : url
// }




// lib/data.ts
import { client } from '@/sanity/lib/client'
import {
  ALL_VEHICLES_QUERY,
  VEHICLE_BY_SLUG_QUERY,
  FEATURED_VEHICLES_QUERY,
  AVAILABLE_VEHICLES_QUERY,
  VEHICLE_TYPES_QUERY,
} from './sanity-queries'

// Garder les anciens imports pour compatibilité temporaire
import vehiclesData from '@/data/vehicles.json'
import configData from '@/data/config.json'
import testimonialsData from '@/data/testimonials.json'
import benefitsData from '@/data/benefits.json'
import categoriesData from '@/data/categories.json'

// ==========================================
// TYPES
// ==========================================

export interface Vehicle {
  _id?: string
  id?: string
  slug: { current: string } | string
  name: string
  type: string
  year: number
  pricePerDay?: number // ✅ Maintenant optionnel
  securityDeposit?: number // ✅ Maintenant optionnel
  sale?: {
    price: number
    currency?: string
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

export interface Config {
  contact: {
    phone: string
    phoneRaw: string
    whatsapp: string
    email: string
    address: string
    addressFull: string
  }
  social: {
    facebook: string
    instagram: string
    linkedin: string
  }
  business: {
    name: string
    legalName: string
    foundedYear: number
    owner: {
      name: string
      photo: string
      experience: string
    }
    stats: {
      vehicles: string
      experience: string
      satisfaction: string
      support: string
    }
  }
}

export interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  rating: number
  avatar: string | null
}

// ==========================================
// HELPER : Normaliser le slug
// ==========================================
function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === 'string' ? slug : slug.current
}

// ==========================================
// HELPER : Normaliser un véhicule Sanity
// ==========================================
/**
 * Normalise un véhicule Sanity (convertit null en tableaux vides et gère les champs optionnels)
 */
function normalizeVehicle(vehicle: any): Vehicle {
  return {
    ...vehicle,
    id: vehicle._id || vehicle.id,
    slug: normalizeSlug(vehicle.slug),
    features: vehicle.features || [],
    documents: vehicle.documents || [],
    gallery: vehicle.gallery || [],
    sale: vehicle.sale || { available: false, price: 0 },
    // ✅ Gestion des champs optionnels - si null/undefined, on les supprime
    pricePerDay: vehicle.pricePerDay ?? undefined,
    securityDeposit: vehicle.securityDeposit ?? undefined,
  }
}

// ==========================================
// VEHICLES (SANITY)
// ==========================================

/**
 * Récupère tous les véhicules depuis Sanity
 */
export async function getAllVehicles(): Promise<Vehicle[]> {
  try {
    const vehicles = await client.fetch(ALL_VEHICLES_QUERY)
    return vehicles.map((v: any) => normalizeVehicle(v))
  } catch (error) {
    console.error('Error fetching vehicles from Sanity:', error)
    // Fallback vers JSON si Sanity échoue
    return vehiclesData.vehicles as Vehicle[]
  }
}

/**
 * Récupère un véhicule par son slug depuis Sanity
 */
export async function getVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
  try {
    const vehicle = await client.fetch(VEHICLE_BY_SLUG_QUERY, { slug })
    if (!vehicle) return undefined
    
    return normalizeVehicle(vehicle)
  } catch (error) {
    console.error('Error fetching vehicle by slug from Sanity:', error)
    // Fallback vers JSON
    return vehiclesData.vehicles.find((v) => v.slug === slug) as Vehicle | undefined
  }
}

/**
 * Récupère un véhicule par son ID (legacy support)
 */
export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
  const vehicles = await getAllVehicles()
  return vehicles.find((v) => v.id === id || v._id === id)
}

/**
 * Récupère les véhicules vedettes (featured)
 */
export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  try {
    const vehicles = await client.fetch(FEATURED_VEHICLES_QUERY)
    return vehicles.map((v: any) => normalizeVehicle(v))
  } catch (error) {
    console.error('Error fetching featured vehicles from Sanity:', error)
    // Fallback
    return vehiclesData.vehicles
      .filter((v) => v.featured)
      .sort((a, b) => a.order - b.order) as Vehicle[]
  }
}

/**
 * Récupère les véhicules disponibles
 */
export async function getAvailableVehicles(): Promise<Vehicle[]> {
  try {
    const vehicles = await client.fetch(AVAILABLE_VEHICLES_QUERY)
    return vehicles.map((v: any) => normalizeVehicle(v))
  } catch (error) {
    console.error('Error fetching available vehicles from Sanity:', error)
    // Fallback
    return vehiclesData.vehicles.filter((v) => v.availability.available) as Vehicle[]
  }
}

/**
 * Récupère les véhicules par type
 */
export async function getVehiclesByType(type: string): Promise<Vehicle[]> {
  const vehicles = await getAllVehicles()
  return vehicles.filter((v) => v.type === type)
}

/**
 * Récupère tous les types de véhicules (uniques)
 */
export async function getVehicleTypes(): Promise<string[]> {
  try {
    return await client.fetch(VEHICLE_TYPES_QUERY)
  } catch (error) {
    console.error('Error fetching vehicle types from Sanity:', error)
    // Fallback
    const types = vehiclesData.vehicles.map((v) => v.type)
    return [...new Set(types)]
  }
}

/**
 * Filtre les véhicules selon des critères
 * ✅ Mise à jour pour gérer les pricePerDay optionnels
 */
export async function filterVehicles(filters: {
  type?: string
  minPrice?: number
  maxPrice?: number
  transmission?: string
  fuel?: string
  seats?: number
  availability?: 'disponible' | 'indisponible'
}): Promise<Vehicle[]> {
  let filtered = await getAllVehicles()

  if (filters.type && filters.type !== 'Tout') {
    filtered = filtered.filter((v) => v.type === filters.type)
  }

  // ✅ Filtres de prix - ignorer les véhicules sans prix
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((v) => v.pricePerDay != null && v.pricePerDay >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((v) => v.pricePerDay != null && v.pricePerDay <= filters.maxPrice!)
  }

  if (filters.transmission && filters.transmission !== 'Tout') {
    filtered = filtered.filter((v) => v.specs.transmission === filters.transmission)
  }

  if (filters.fuel && filters.fuel !== 'Tout') {
    filtered = filtered.filter((v) => v.specs.fuel === filters.fuel)
  }

  if (filters.seats) {
    filtered = filtered.filter((v) => v.specs.seats === filters.seats)
  }

  if (filters.availability === 'disponible') {
    filtered = filtered.filter((v) => v.availability.available)
  } else if (filters.availability === 'indisponible') {
    filtered = filtered.filter((v) => !v.availability.available)
  }

  return filtered
}

// ==========================================
// CONFIG (JSON - pas encore migré)
// ==========================================

export function getConfig(): Config {
  return configData as Config
}

export function getContactInfo() {
  return configData.contact
}

export function getSocialLinks() {
  return configData.social
}

export function getBusinessInfo() {
  return configData.business
}

export function getStats() {
  return configData.business.stats
}

export function getOwnerInfo() {
  return configData.business.owner
}

// ==========================================
// TESTIMONIALS (JSON - pas encore migré)
// ==========================================

export function getAllTestimonials(): Testimonial[] {
  return testimonialsData.testimonials as Testimonial[]
}

export function getTestimonialById(id: number): Testimonial | undefined {
  return testimonialsData.testimonials.find((t) => t.id === id) as Testimonial | undefined
}

// ==========================================
// BENEFITS (JSON - pas encore migré)
// ==========================================

export function getRentalBenefits() {
  return benefitsData.rentalBenefits
}

export function getMemberBenefits() {
  return benefitsData.memberBenefits
}

export function getCoreValues() {
  return benefitsData.coreValues
}

// ==========================================
// CATEGORIES (JSON - pas encore migré)
// ==========================================

export function getRentalCategories() {
  return categoriesData.rentalCategories
}

export function getCategoryById(id: string) {
  return categoriesData.rentalCategories.find((c) => c.id === id)
}

// ==========================================
// UTILITY
// ==========================================

/**
 * Formate un prix en FCFA
 * ✅ Gestion des valeurs nulles/undefined
 */
export function formatPrice(price?: number | null): string {
  if (price == null) return 'Prix sur demande'
  return `${price.toLocaleString('fr-FR')} FCFA`
}

export function getWhatsAppLink(message: string): string {
  const config = getConfig()
  return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function getPhoneLink(): string {
  const config = getConfig()
  return `tel:${config.contact.phoneRaw}`
}

export function getEmailLink(subject?: string): string {
  const config = getConfig()
  const url = `mailto:${config.contact.email}`
  return subject ? `${url}?subject=${encodeURIComponent(subject)}` : url
}