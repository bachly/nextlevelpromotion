"use client";

import React, { useState } from "react";
import Eyebrow from "./ui/eyebrow";
import { QuoteModal } from "./QuoteModal";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    "Fast turnaround times",
    "Premium quality prints",
    "Competitive pricing",
    "Dedicated support team",
    "Free design consultation",
    "100% satisfaction guarantee"
  ];

  return (
    <>
      <div id="contact" className="w-full py-16 md:py-24 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Eyebrow>Let's work together</Eyebrow>

          <h2 className="md:text-5xl text-4xl font-black mt-2 mb-6 text-neutral-700">
            Get In Touch With Us
          </h2>

          <p className="text-xl md:text-2xl text-neutral-900 mb-8 max-w-2xl mx-auto">
            Ready to bring your brand to life? Contact us today and let's discuss how we can help:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-neutral-700 font-semibold text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="py-4 px-10 rounded-full bg-brand-500 text-white text-lg font-bold hover:bg-brand-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName=""
        productImage=""
      />
    </>
  );
};

export default CTASection;
