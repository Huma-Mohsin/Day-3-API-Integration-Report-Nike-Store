// lib/fetchProducts.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-31',
  useCdn: true,
});

export const fetchProducts = async () => {
  try {
    const query = `*[_type == "product"] {
      _id,
      productName,
      category,
      price,
      inventory,
      colors,
      status,
      description,
      "imageUrl": image.asset->url
    }`;

    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
