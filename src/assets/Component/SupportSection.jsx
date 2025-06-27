// SupportSection.jsx

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const SupportSection = () => {
  return (
    <section className="bg-[#f9fdfb] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1f3522] mb-4">🛠️ Need Help? We're Here for You</h2>
        <p className="text-gray-600 mb-10">Contact our support team or explore our FAQ to get answers fast.</p>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Phone Support */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-green-600 text-2xl mb-4"><FaPhoneAlt /></div>
            <h3 className="text-lg font-semibold text-[#1f3522] mb-2">Call Support</h3>
            <p className="text-gray-600 text-sm mb-2">Speak directly to our plant care experts.</p>
            <p className="text-green-800 font-medium text-sm">+880-1234-*****</p>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-green-600 text-2xl mb-4"><FaEnvelope /></div>
            <h3 className="text-lg font-semibold text-[#1f3522] mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-2">Send us your queries or issues any time.</p>
            <p className="text-green-800 font-medium text-sm">support@plantnest.com</p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-green-600 text-2xl mb-4"><FaQuestionCircle /></div>
            <h3 className="text-lg font-semibold text-[#1f3522] mb-2">Browse FAQ</h3>
            <p className="text-gray-600 text-sm mb-2">Find answers to common questions instantly.</p>
            <a href="/faq" className="text-green-700 hover:underline text-sm font-medium">Go to FAQ →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
