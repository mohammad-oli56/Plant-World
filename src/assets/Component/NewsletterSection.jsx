// NewsletterSection.jsx

import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send email to backend or service (e.g., Mailchimp)
    console.log("Subscribed Email:", email);

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-[#e6f4ea] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1f3522] mb-4">📬 Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">
          Stay updated with plant care tips, new arrivals, and exclusive offers straight to your inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="px-4 py-3 w-full sm:w-2/3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-[#1f3522] text-white px-6 py-3 rounded-xl hover:bg-green-800 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-700 text-md font-semibold">✅ Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
