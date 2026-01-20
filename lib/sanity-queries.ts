// lib/sanity-queries.ts
import { groq } from 'next-sanity'

/**
 * Requête pour récupérer tous les véhicules
 */
export const ALL_VEHICLES_QUERY = groq`
  *[_type == "vehicle"] | order(order asc) {
    _id,
    name,
    slug,
    type,
    year,
    pricePerDay,
    securityDeposit,
    sale,
    "image": images[0].asset->url,
    "gallery": images[].asset->url,
    specs,
    features,
    availability,
    documents,
    featured,
    order
  }
`

/**
 * Requête pour récupérer un véhicule par slug
 */
export const VEHICLE_BY_SLUG_QUERY = groq`
  *[_type == "vehicle" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    type,
    year,
    pricePerDay,
    securityDeposit,
    sale,
    "image": images[0].asset->url,
    "gallery": images[].asset->url,
    specs,
    features,
    availability,
    documents,
    featured,
    order
  }
`

/**
 * Requête pour récupérer les véhicules vedettes
 */
export const FEATURED_VEHICLES_QUERY = groq`
  *[_type == "vehicle" && featured == true] | order(order asc) {
    _id,
    name,
    slug,
    type,
    year,
    pricePerDay,
    "image": images[0].asset->url,
    specs,
    availability,
    featured,
    order
  }
`

/**
 * Requête pour récupérer les véhicules disponibles
 */
export const AVAILABLE_VEHICLES_QUERY = groq`
  *[_type == "vehicle" && availability.available == true] | order(order asc) {
    _id,
    name,
    slug,
    type,
    year,
    pricePerDay,
    "image": images[0].asset->url,
    specs,
    availability
  }
`

/**
 * Requête pour récupérer les types de véhicules (uniques)
 */
export const VEHICLE_TYPES_QUERY = groq`
  array::unique(*[_type == "vehicle"].type)
`