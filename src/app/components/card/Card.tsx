// components/card/Card.tsx
import React from 'react';
import { Product } from '@/app/producttypes'; // Import Product type

interface CardProps extends Product {
  imagesUrls: string[]; // Array of image URLs for the product
}

const Card: React.FC<CardProps> = ({ title, description, price, imagesUrls, color, tags }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Product Image */}
      {imagesUrls.length > 0 && (
        <img
          src={imagesUrls[0]}
          alt={title}
          className="w-full h-56 object-contain rounded-lg mb-4" // Use object-contain or object-cover
        />
      )}
      {/* Product Title */}
      <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-gray-900 font-bold text-lg mb-2">${price}</p>
      {/* Product Colors */}
      <p className="text-gray-500 text-sm">Colors: {color}</p>
      {/* Product Tags */}
      <p className="text-gray-500 text-sm">Category: {tags}</p>
    </div>
  );
};

export default Card;
