// OfferSection.jsx

import React from "react";

const offers = [
  {
    id: 1,
    title: "🌿 Buy 2 Get 1 Free",
    description: "Pick any two indoor plants and get one absolutely free! Perfect to build your green corner.",
    bg: "bg-green-200",
  },
  {
    id: 2,
    title: "🚚 Free Delivery Over ৳1000",
    description: "Get your favorite plants delivered to your door without any shipping cost!",
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    title: "🪴 25% OFF on Outdoor Plants",
    description: "Limited time offer on all outdoor plants. Make your balcony vibrant!",
    bg: "bg-pink-100",
  },
];

const OfferSection = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-[#f5fdf6]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1f3522]">🔥 Special Offers</h2>
        <p className="text-gray-600 mt-2">Don't miss out on these limited-time deals!</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`rounded-2xl p-6 shadow-md ${offer.bg} hover:shadow-xl transition duration-300`}
          >
            <h3 className="text-xl font-semibold text-[#1f3522] mb-2">{offer.title}</h3>
            <p className="text-gray-700 text-sm">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
