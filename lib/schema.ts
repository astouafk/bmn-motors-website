// lib/schema.ts
import { getConfig, getAllTestimonials } from './data'
import type { Vehicle } from './data'

/**
 * Schema.org pour l'organisation (B-M-N Motors)
 */
export function getOrganizationSchema() {
  const config = getConfig()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': 'https://www.bmn-motors.com/#organization',
    name: config.business.name,
    legalName: config.business.legalName,
    url: 'https://www.bmn-motors.com',
    logo: 'https://www.bmn-motors.com/logo/bmn-logo.png',
    image: 'https://www.bmn-motors.com/logo/bmn-logo.png',
    description: 'Location et vente de voitures de luxe à Dakar, Sénégal. Mercedes, BMW, Range Rover, Toyota. Service premium 24/7.',
    foundingDate: config.business.foundedYear.toString(),
    telephone: config.contact.phone,
    email: config.contact.email,
    priceRange: '35000-120000 FCFA/jour',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dakar',
      addressCountry: 'SN',
      streetAddress: config.contact.addressFull,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.6937,
      longitude: -17.4441,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      config.social.facebook,
      config.social.instagram,
      config.social.linkedin,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Schema.org pour un véhicule individuel
 */
export function getVehicleSchema(vehicle: Vehicle) {
  const config = getConfig()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://www.bmn-motors.com/voitures-location-vente-dakar/${vehicle.slug}#product`,
    name: `${vehicle.name} ${vehicle.year}`,
    description: `${vehicle.type} ${vehicle.specs.transmission}, ${vehicle.specs.fuel}, ${vehicle.specs.seats} places. ${vehicle.features.slice(0, 3).join(', ')}.`,
    image: `https://www.bmn-motors.com${vehicle.image}`,
    brand: {
      '@type': 'Brand',
      name: vehicle.name.split(' ')[0], // Ex: "Mercedes"
    },
    category: vehicle.type,
    offers: {
      '@type': 'Offer',
      price: vehicle.pricePerDay.toString(),
      priceCurrency: 'XOF',
      availability: vehicle.availability.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        .toISOString()
        .split('T')[0],
      seller: {
        '@type': 'AutomotiveBusiness',
        name: config.business.name,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Transmission',
        value: vehicle.specs.transmission,
      },
      {
        '@type': 'PropertyValue',
        name: 'Carburant',
        value: vehicle.specs.fuel,
      },
      {
        '@type': 'PropertyValue',
        name: 'Nombre de places',
        value: vehicle.specs.seats.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Année',
        value: vehicle.year.toString(),
      },
    ],
  }
}

/**
 * Schema.org pour les avis clients
 */
export function getReviewsSchema() {
  const testimonials = getAllTestimonials()
  const config = getConfig()
  
  return testimonials.map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'AutomotiveBusiness',
      name: config.business.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewBody: testimonial.text,
  }))
}

/**
 * Schema.org pour la page d'accueil (WebSite + LocalBusiness)
 */
export function getHomePageSchema() {
  const config = getConfig()
  
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://www.bmn-motors.com/#website',
      url: 'https://www.bmn-motors.com',
      name: config.business.name,
      description: 'Location et vente de voitures de luxe à Dakar',
      publisher: {
        '@id': 'https://www.bmn-motors.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.bmn-motors.com/voitures-location-vente-dakar?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    getOrganizationSchema(),
  ]
}

/**
 * Schema.org pour la liste des véhicules (ItemList)
 */
export function getVehicleListSchema(vehicles: Vehicle[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: vehicles.map((vehicle, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `https://www.bmn-motors.com/voitures-location-vente-dakar/${vehicle.slug}`,
        name: `${vehicle.name} ${vehicle.year}`,
        image: `https://www.bmn-motors.com${vehicle.image}`,
        offers: {
          '@type': 'Offer',
          price: vehicle.pricePerDay.toString(),
          priceCurrency: 'XOF',
        },
      },
    })),
  }
}

/**
 * Schema.org pour le propriétaire (Person)
 */
export function getOwnerSchema() {
  const config = getConfig()
  const owner = config.business.owner
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: owner.name,
    image: `https://www.bmn-motors.com${owner.photo}`,
    jobTitle: 'Fondateur & CEO',
    worksFor: {
      '@type': 'AutomotiveBusiness',
      name: config.business.name,
    },
    description: `Fondateur de ${config.business.name} avec ${owner.experience} ans d'expérience dans l'automobile de luxe.`,
  }
}

/**
 * Schema.org pour un service (RentalCarReservation)
 */
export function getRentalServiceSchema() {
  const config = getConfig()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.bmn-motors.com/location-voiture-luxe-dakar#service',
    serviceType: 'Location de voitures de luxe',
    provider: {
      '@id': 'https://www.bmn-motors.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dakar',
      containedIn: {
        '@type': 'Country',
        name: 'Sénégal',
      },
    },
    offers: {
      '@type': 'Offer',
      priceRange: '35000-120000 FCFA/jour',
      priceCurrency: 'XOF',
    },
  }
}