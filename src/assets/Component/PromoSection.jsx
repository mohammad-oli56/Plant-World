// PromoSection.jsx

import React from "react";
import { Link } from "react-router";

const PromoSection = () => {
  return (
    <section className="bg-green-100 py-12 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3522] mb-4">
            🌱 Big Green Sale is Here!
          </h2>
          <p className="text-gray-700 text-md md:text-lg mb-6">
            Get up to <span className="text-green-700 font-semibold">30% OFF</span> on selected indoor and outdoor plants. 
            Make your home greener this season!
          </p>
          <Link to='/allplant'>
          <button className="bg-[#1f3522] text-white px-6 py-3 rounded-xl hover:bg-green-900 transition duration-300">
            Shop Now
          </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://img.freepik.com/premium-vector/social-media-post-design-plant-shop-product-promotion-green-square-banner-design_356545-59.jpg"
            alt="Promotional Plants"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
