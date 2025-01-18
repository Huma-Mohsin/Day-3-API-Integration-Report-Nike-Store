"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Fetch product details from the API based on the productName
const fetchProductByproductName = async (productName: string) => {
  try {
    const response = await fetch("https://template-03-api.vercel.app/api/products");
    const data = await response.json();
    const product = data.data.find((product: any) => product.productName === productName);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Error fetching product");
  }
};

const ProductDetailPage = ({ params }: { params: { productName: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductByproductName(params.productName); // Fetch product based on productName
        if (data) {
          setProduct(data);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      } catch (err) {
        setError(`Error fetching product: ${(err as Error).message}`);
        setLoading(false);
      }
    };

    if (params.productName) {
      getProduct();
    }
  }, [params.productName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.productName}</h1>
      
      {/* Ensure image is loaded eagerly */}
      <Image
        src={product.image}
        alt={product.productName}
        width={500}
        height={500}
        className="w-full h-96 object-contain mt-4"
        priority // Forces eager loading
        loading="eager" // Forces eager loading, no lazy load
      />

      <p className="text-xl mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-4">${product.price}</p>
      <p className="mt-4">Category: {product.category}</p>
      <p className="mt-4">Available colors: {product.colors.join(", ")}</p>
      <p className="mt-4">Inventory: {product.inventory}</p>
    </div>
  );
};

export default ProductDetailPage;
