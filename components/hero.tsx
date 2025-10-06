"use client";

import React from "react";
import { motion } from "motion/react";
import { transition, variants } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Eyebrow from "./ui/eyebrow";
import Image from "next/image";

// Hero section text content
const eyebrow = "Take your business to the next level with";
const title = <>Personalised <div className="text-brand-500">Printing</div> Solutions</>;
const subtitle = <>
  Let your Signage, Uniforms, or Promotional Flyers Speak Volumes About <strong>Who You Are</strong>
</>;
const cta = <>Win Attention Today</>;

export const Hero = () => {
  const products = [
    { src: "/products/Premium Pull-Up Banner.jpg", name: "Premium Pull-Up Banner", size: "w-96 h-[480px]" },
    { src: "/products/Vinyl Banner.jpg", name: "Vinyl Banner", size: "w-96 h-[480px]" },
    { src: "/products/Teardrop Banner.jpg", name: "Teardrop Banner", size: "w-96 h-[480px]" },
    { src: "/products/Selfie Frame.jpg", name: "Selfie Frame", size: "w-96 h-[480px]" },
    { src: "/products/Media Wall.jpg", name: "Media Wall", size: "w-96 h-[480px]" },
    { src: "/products/Market Umbrella.jpg", name: "Market Umbrella", size: "w-96 h-[480px]" },
    { src: "/products/Table Throws.jpg", name: "Table Throws", size: "w-96 h-[480px]" },
    { src: "/products/Luxury Pull-Up Banner.jpg", name: "Luxury Pull-Up Banner", size: "w-96 h-[480px]" },
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
          <Eyebrow size="md">
            {eyebrow}
          </Eyebrow>
        </motion.div>

        {/* Title */}
        <h1 className="md:text-7xl text-6xl font-black uppercase text-center w-full mt-2 text-neutral-700">
          {title}
        </h1>

        {/* Subtitle */}
        <motion.p
          transition={transition}
          variants={variants}
          className="md:text-3xl text-2xl leading-[28px] text-center tracking-tight max-w-2xl mx-auto mt-4 text-neutral-700 font-semibold"
        >
          {subtitle}
        </motion.p>

        {/* Call to Action */}
        <a href="#products">
          <motion.button
            transition={transition}
            variants={variants}
            className="flex items-center justify-center w-72 py-4 mt-9 rounded-full bg-brand-500 text-xl font-bold text-white hover:from-brand-600 hover:to-brand-700 transition-colors"
          >
            {cta}
            <ArrowDown className="h-4 w-4 ml-2" />
          </motion.button>
        </a>

        {/* Testimonial */}
        <motion.div
          transition={transition}
          variants={variants}
          className="mt-2 flex items-center justify-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto"
        >
          <div className="flex-1 text-center">
            <div className="flex gap-1 mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-7 h-7 fill-yellow-400"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="max-w-md mx-auto text-2xl text-neutral-900 font-semibold italic">
              &ldquo;The quality and turnaround time exceeded our expectations!&rdquo;
            </p>
            <p className="text-base text-neutral-500 mt-2 font-semibold">— Bach L., Business Owner</p>
          </div>
        </motion.div>

        {/* Product Images Marquee */}
        <div className="w-full overflow-hidden relative">
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
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 ${product.size} bg-white rounded-t-xl relative overflow-hidden`}
                >
                  <Image src={product.src} alt={product.name} fill className="object-cover" />
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