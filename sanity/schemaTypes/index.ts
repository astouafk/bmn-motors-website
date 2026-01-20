// import { type SchemaTypeDefinition } from 'sanity'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// }


// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { vehicleType } from './vehicle'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vehicleType],
}