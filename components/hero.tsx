"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { transition, variants } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Badge from "./ui/badge";

// Hero section text content
const eyebrow = "Every Great Brand Starts With a Great Promo";
const title = <>Your Print is Your <span className="text-brand-500">Brand's</span> Voice</>;
const subtitle = <>
  Every signage, uniform, or advertising handouts should speak volumes about <strong>who you are</strong>
</>;
const cta = <>Win Attention Today</>;

export const Hero = () => {
  const products = [
    { src: "https://picsum.photos/seed/product1/400/500", size: "w-96 h-[480px]" },
    { src: "https://picsum.photos/seed/product2/400/500", size: "w-96 h-[480px]" },
    { src: "https://picsum.photos/seed/product3/400/500", size: "w-96 h-[480px]" },
    { src: "https://picsum.photos/seed/product4/400/500", size: "w-96 h-[480px]" },
    { src: "https://picsum.photos/seed/product5/400/500", size: "w-96 h-[480px]" },
    { src: "https://picsum.photos/seed/product6/400/500", size: "w-96 h-[480px]" },
  ];

  return (
    <motion.div className="pt-24 pb-28 relative bg-white w-full">

      <motion.div className="w-full h-full flex flex-col items-center justify-center relative z-10">

        {/* Eyebrow */}
        <motion.div
          className="text-center"
          transition={transition}
          variants={variants}
        >
          <div className="text-2xl text-brand-500 px-3 py-1 rounded-full font-semibold">
            {eyebrow}
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="md:text-7xl text-6xl font-black uppercase text-center md:w-3/6 w-full mt-4 text-neutral-700">
          {title}
        </h1>

        {/* Subtitle */}
        <motion.p
          transition={transition}
          variants={variants}
          className="md:text-2xl text-xl leading-[28px] text-center tracking-tight w-5/6 max-w-xl mx-auto mt-4 text-neutral-700 font-semibold"
        >
          {subtitle}
        </motion.p>

        {/* Call to Action */}
        <Link href="/sign-up">
          <motion.button
            transition={transition}
            variants={variants}
            className="flex items-center justify-center w-72 py-4 mt-9 rounded-full bg-brand-500 text-xl font-bold text-white hover:from-brand-600 hover:to-brand-700 transition-colors"
          >
            {cta}
            <ArrowDown className="h-4 w-4 ml-2" />
          </motion.button>
        </Link>

        {/* Product Images Marquee */}
        <div className="w-full mt-8 overflow-hidden relative">
          {/* Top Curve - Facing Down */}
          <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24">
              <path d="M0,0 Q600,100 1200,0 L1200,0 L0,0 Z" fill="white"/>
            </svg>
          </div>

          <motion.div
            className="flex gap-16 items-end"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...products, ...products].map((product, index) => {
              const productNumber = (index % products.length) + 1;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 ${product.size} bg-white rounded-t-xl relative`}
                >
                  <img src={product.src} alt={`Product ${productNumber}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </motion.div>

          {/* Bottom Curve - Facing Up */}
          <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24">
              <path d="M0,100 Q600,0 1200,100 L1200,100 L0,100 Z" fill="white"/>
            </svg>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};