"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { getProductDescription } from "@/lib/products";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
}

// Featured products for mosaic display
const featuredProducts = [
  "/products/Premium Pull-Up Banner.jpg",
  "/products/Vinyl Banner.jpg",
  "/products/Teardrop Banner.jpg",
  "/products/Media Wall.jpg",
  "/products/Market Umbrella.jpg",
  "/products/Table Throws.jpg",
  "/products/Custom Stickers.jpg",
  "/products/Flyer.jpg",
  "/products/Corflute Sign.jpg",
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  productName,
  productImage,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/submit-form', {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Form submission result:", result);

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", response.status, result);
        alert(result.message || 'Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please check your connection and try again.");
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-black bg-opacity-50"
          onClick={handleClose}
        >
          {/* Close Button - Fixed to viewport */}
          <button
            onClick={handleClose}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] w-10 h-10 flex items-center justify-center transition-colors bg-black md:bg-white rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white md:text-neutral-800"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              opacity: { duration: 0.2 }
            }}
            className="relative bg-white rounded-none md:rounded-2xl shadow-2xl max-w-6xl w-full h-screen md:h-auto md:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {!isSubmitted ? (
              <div className="flex flex-col md:flex-row min-h-full">
                {/* Left Column - Media (2/3) - Square Ratio */}
                {productImage ? (
                  <div className="relative w-full md:w-2/3 aspect-square bg-neutral-800">
                    <div className="relative w-full h-full">
                      <Image
                        src={productImage}
                        alt={productName}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full md:w-2/3 aspect-square bg-neutral-800 overflow-hidden">
                    {/* Product Mosaic Grid - 3 Columns with Scrolling Animation */}
                    <div className="absolute inset-0 grid grid-cols-3 gap-2">
                      {/* Column 1 - Moves Down */}
                      <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{
                          duration: 50,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex flex-col gap-2"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div key={`col1-${i}`} className="relative w-full aspect-square rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                            <Image
                              src={featuredProducts[i % 3 * 3]}
                              alt="Product"
                              fill
                              sizes="(max-width: 768px) 33vw, 22vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </motion.div>

                      {/* Column 2 - Moves Up */}
                      <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{
                          duration: 50,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex flex-col gap-2"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div key={`col2-${i}`} className="relative w-full aspect-square rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                            <Image
                              src={featuredProducts[1 + (i % 3) * 3]}
                              alt="Product"
                              fill
                              sizes="(max-width: 768px) 33vw, 22vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </motion.div>

                      {/* Column 3 - Moves Down */}
                      <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{
                          duration: 50,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex flex-col gap-2"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div key={`col3-${i}`} className="relative w-full aspect-square rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                            <Image
                              src={featuredProducts[2 + (i % 3) * 3]}
                              alt="Product"
                              fill
                              sizes="(max-width: 768px) 33vw, 22vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Right Column - Content (1/3) */}
                <div className="w-full md:w-1/3 p-8">
                  <h2 className="text-xl font-semibold text-black mb-3">
                    {productName || "Contact Us"}
                  </h2>

                  <p className="text-black mb-6 text-lg leading-relaxed">
                    {productName ? getProductDescription(productName) : "Have a question or ready to start your next project? Fill out the form below and our team will get back to you as soon as possible."}
                  </p>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="product" value={productName || "General Quote"} />

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-base font-semibold text-gray-700 mb-1"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:ring-opacity-20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-base font-semibold text-gray-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:ring-opacity-20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-base font-semibold text-gray-700 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:ring-opacity-20 outline-none transition-all"
                          placeholder="+61 400 000 000"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-base font-semibold text-gray-700 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:ring-opacity-20 outline-none transition-all resize-none"
                          placeholder="Tell us more about your requirements..."
                        />
                      </div>
                    </div>

                    {/* Honeypot for spam protection */}
                    <div className="hidden">
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full py-3 px-6 rounded-full bg-brand-500 text-white font-bold text-lg hover:bg-brand-600 transition-colors duration-200"
                    >
                      Submit Quote Request
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                {/* Success Checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>

                <h3 className="text-3xl font-black text-neutral-700 mb-3">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Your quote request has been received.
                </p>
                <p className="text-gray-600">
                  We will get back to you as soon as possible.
                </p>

                <button
                  onClick={handleClose}
                  className="mt-8 py-3 px-8 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
