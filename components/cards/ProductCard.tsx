"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

interface ProductCardProps {
  imagePath: string;
  productName: string;
  onGetQuote: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imagePath,
  productName,
  onGetQuote,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white h-[360px] w-full flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-500 transition-all duration-300 group"
    >
      {/* Image Container */}
      <div
        onClick={onGetQuote}
        className="relative w-full h-[280px] overflow-hidden bg-gray-100 cursor-pointer"
      >
        <Image
          src={imagePath}
          alt={productName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex items-center justify-between gap-3 px-3 py-3">
        <h3 className="text-lg font-bold text-neutral-700 line-clamp-2 flex-1">
          {productName}
        </h3>

        <button
          onClick={onGetQuote}
          className="w-7 h-7 rounded-full border border-neutral-400 text-neutral-400 hover:bg-neutral-500 hover:text-white transition-all duration-200 flex-shrink-0 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
