import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './Product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
