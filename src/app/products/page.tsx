"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { AllProduct } from "@/sanity/lib/query";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const DataFetchByAPI = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedData: Product[] = await client.fetch(AllProduct);
        setProducts(fetchedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Second Time Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg p-4">
            <Link href={`/products/${product.slug.current}`}>
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="w-full h-64 object-contain"
            />
            <h2 className="text-xl font-bold">{product.productName}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <p className="text-sm text-gray-500">In Stock: {product.inventory}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetchByAPI;
