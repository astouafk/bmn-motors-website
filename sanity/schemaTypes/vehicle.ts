// sanity/schemaTypes/vehicle.ts
import { defineField, defineType } from 'sanity'

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Véhicule',
  type: 'document',
  icon: () => '🚗',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du véhicule',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sedan', value: 'Sedan' },
          { title: 'SUV', value: 'SUV' },
          { title: '4x4', value: '4x4' },
          { title: 'City Car', value: 'City Car' },
          { title: 'Minibus / 7-Seater', value: 'Minibus / 7-Seater' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Année',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2030),
    }),
    defineField({
      name: 'pricePerDay',
      title: 'Prix par jour (FCFA)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'securityDeposit',
      title: 'Caution (FCFA)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'sale',
      title: 'Vente',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Disponible à la vente',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'price',
          title: 'Prix de vente (FCFA)',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Galerie photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Permet de recadrer
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'specs',
      title: 'Spécifications',
      type: 'object',
      fields: [
        {
          name: 'transmission',
          title: 'Transmission',
          type: 'string',
          options: {
            list: ['Automatique', 'Manuelle'],
          },
        },
        {
          name: 'fuel',
          title: 'Carburant',
          type: 'string',
          options: {
            list: ['Pétrole', 'Diesel', 'Hybride', 'Électrique'],
          },
        },
        {
            name: 'seats',
            title: 'Nombre de places',
            type: 'number',
            options: {
              list: [
                { title: '5 places', value: 5 },
                { title: '7 places', value: 7 },
                { title: '8+ places', value: 8 },
              ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'fuelConsumption',
          title: 'Consommation (L/100km)',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Équipements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des équipements (ex: Caméra de recul, Bluetooth...)',
    }),
    defineField({
      name: 'availability',
      title: 'Disponibilité',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Disponible',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'withDriver',
          title: 'Avec chauffeur',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'withoutDriver',
          title: 'Sans chauffeur',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: 'documents',
      title: 'Documents requis',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des documents nécessaires pour la location',
    }),
    defineField({
      name: 'featured',
      title: 'Véhicule vedette',
      type: 'boolean',
      initialValue: false,
      description: 'Afficher dans la section "Vedettes du moment"',
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 0,
      description: 'Ordre de tri (plus petit = affiché en premier)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'images.0',
    },
  },
})