import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Bag Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bag Items */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Bag</h2>
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
              <Image
                src="/image1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={100}
                height={100}
                className="w-24 h-24 rounded-md border mb-4 md:mb-0 object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800 text-lg">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="font-semibold text-gray-800">₹ 3,895.00</p>
                <button className="text-sm text-red-500 hover:text-red-700 mt-2">Remove</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
              <Image
                src="/image2.png"
                alt="Nike Air Max 97 SE"
                width={100}
                height={100}
                className="w-24 h-24 rounded-md border mb-4 md:mb-0 object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800 text-lg">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men's Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-500">Size: 8</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="font-semibold text-gray-800">₹ 16,995.00</p>
                <button className="text-sm text-red-500 hover:text-red-700 mt-2">Remove</button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Summary</h2>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold text-gray-800">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-semibold text-gray-800">Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4 mt-4">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <button className="w-full bg-black text-white font-semibold py-3 rounded-lg mt-6 transition duration-300 hover:bg-gray-900">
              Member Checkout
            </button>
          </div>
        </div>

        {/* Free Delivery Section */}
        <div className="mt-8 text-sm text-gray-600 text-center">
          Free Delivery applies to orders of ₹ 14,000.00 or more.{' '}
          <a href="#" className="text-blue-500 hover:underline">
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
