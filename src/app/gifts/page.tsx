'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GiftCard {
  id: number;
  name: string;
  value: number;
}

const GiftCardVoucher = () => {
  const [selectedGiftCard, setSelectedGiftCard] = useState<GiftCard | null>(null);
  const [redeemCode, setRedeemCode] = useState("");
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(0);

  const giftCards: GiftCard[] = [
    { id: 1, name: "Gift Card - $50", value: 50 },
    { id: 2, name: "Gift Card - $100", value: 100 },
    { id: 3, name: "Gift Card - $200", value: 200 },
  ];

  const handlePurchase = () => {
    if (selectedGiftCard) {
      setBalance(balance + selectedGiftCard.value);
      setMessage(`Successfully purchased ${selectedGiftCard.name}!`);
    } else {
      setMessage("Please select a gift card to purchase.");
    }
  };

  const handleRedeem = () => {
    if (redeemCode.trim() === "") {
      setMessage("Please enter a valid redeem code.");
      return;
    }

    const voucherValue = redeemCode === "REDEEM50" ? 50 : 0;

    if (voucherValue > 0) {
      setBalance(balance + voucherValue);
      setMessage(`Successfully redeemed voucher! Your balance is now $${balance + voucherValue}`);
    } else {
      setMessage("Invalid redeem code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 px-4 md:px-8 py-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <Image src="/Navbar/nike-4-logo.svg" alt="Nike Logo" width={60} height={22} className="mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">Gift Cards & Vouchers</h2>
        </div>

        <div className="space-y-6">
          {/* Gift Card Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-center">Choose a Gift Card to Purchase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {giftCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedGiftCard(card)}
                  className={`w-full p-3 border rounded-lg shadow-md ${selectedGiftCard?.id === card.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                  {card.name} - ${card.value}
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Button */}
          <div className="text-center">
            <button
              onClick={handlePurchase}
              className="w-full py-3 bg-gray-500 text-white rounded hover:bg-gray-800 transition-colors"
            >
              Purchase Gift Card
            </button>
          </div>

          {/* Voucher Redemption */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-center">Enter Your Voucher Code</h3>
            <input
              type="text"
              value={redeemCode}
              onChange={(e) => setRedeemCode(e.target.value)}
              placeholder="Enter redeem code"
              className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleRedeem}
              className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Redeem Voucher
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div className="mt-4 text-center text-lg font-semibold">
              <p>{message}</p>
            </div>
          )}

          {/* Current Balance */}
          <div className="mt-4 text-center">
            <p className="text-xl">Current Balance: ${balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardVoucher;
