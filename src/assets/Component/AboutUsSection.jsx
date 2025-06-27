// AboutUsSection.jsx

import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-[#1f3522] mb-4">🌱 About Us</h2>
          <p className="text-gray-700 text-md mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-green-700">Plant-World</span> — your trusted destination for 
            indoor and outdoor plant care. We are passionate about helping you build a greener, calmer, and healthier 
            living space.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            Our journey started with a love for nature and a mission to make plant care easier and enjoyable for 
            everyone. Whether you’re a beginner or a seasoned gardener, you’ll find something special here — from 
            curated plant collections to expert care tips.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/036/290/329/small_2x/about-us-metaphor-company-information-flat-illustration-template-business-profile-office-information-customer-support-our-team-about-company-vector.jpg"
            alt="About us"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
