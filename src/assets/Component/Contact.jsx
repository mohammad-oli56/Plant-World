// ContactSection.jsx

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send formData to backend or email service
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#f4fff8] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1f3522] text-center mb-6">📞 Contact Us</h2>
        <p className="text-gray-600 text-center mb-8">
          Have a question, suggestion, or need help with your plant? We're here for you!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#1f3522] text-white py-3 rounded-xl hover:bg-green-900 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-700 text-center text-lg font-medium">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
