"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const fetchProducts = async () => {
  const response = await fetch("https://template-03-api.vercel.app/api/products");
  const data = await response.json();
  return data.data; // Returning products from the response
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from the API
        setProducts(data); // Update state with fetched products
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    getProducts();
  }, []);

  // Show loading message if still fetching data
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Show error message if fetching failed
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold text-3xl ">Nike Products</h1>
      <h1 className="text-center text-blue-600 text-2xl mt-4 mb-8 ">By Provided API</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b-2">
        {products.map((product: any) => (
          <div
            key={product.productName}
            className="transform hover:scale-105 transition duration-300 ease-in-out p-4 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:bg-gray-50"
          >
            <Link href={`http://localhost:3000/overallproducts/${product.productName}`} passHref>
              <div>
                <Image src={product.image} alt={product.productName} width={500} height={500} className="w-full h-48 object-contain mb-4 rounded-md" />
                <h2 className="text-xl font-semibold">{product.productName}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-semibold mt-2">${product.price}</p>
                <p className="text-gray-700 mt-4">{product.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Available colors: {product.colors.join(", ")}</p>
                  <p className="text-sm text-gray-600">Inventory: {product.inventory}</p>
                </div>
              </div>
            </Link>
            <div className="mt-6 flex justify-center">
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
