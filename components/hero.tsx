"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { transition, variants } from "@/lib/data";
import { ArrowDown, ArrowRight } from "lucide-react";

// Hero section text content
const eyebrow = "- Every Great Brand Starts With a Great Promo -";
const title = "From first glance to final handshake, your print is your brand's voice.";
const subtitle = <>
  At Next Level Promotion, we believe <strong>every signage, uniform, or advertising handouts</strong> should speak volumes about <strong>who you are</strong>.
  That's why we combine quality <strong>Fast and Personalised</strong> service with <strong>Selected Materials</strong> to help you leave a lasting mark.</>;
const cta = <>Win Attention Today</>;

export const Hero = () => {
  const words = title.split(" ");
  return (
    <motion.div className="md:h-[912px] py-24 p-4 relative border border-[#E6E6E6] mt-4 overflow-hidden">

      <motion.div className="w-full h-5/6 flex flex-col items-center justify-center">

        {/* Eyebrow */}
        <motion.div
          className="text-center"
          transition={transition}
          variants={variants}
        >
          <p className="md:text-2xl text-xl font-semibold text-brand-500">
            {eyebrow}
          </p>
        </motion.div>

        {/* Title */}
        <h1 className="md:text-5xl text-4xl font-black uppercase text-center md:w-5/6 w-full mt-4">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          transition={transition}
          variants={variants}
          className="md:text-2xl text-xl leading-[28px] text-center tracking-tight w-5/6 max-w-xl mx-auto mt-4 text-neutral-900 font-semibold"
        >
          {subtitle}
        </motion.p>

        {/* Call to Action */}
        <Link href="/sign-up">
          <motion.button
            transition={transition}
            variants={variants}
            className="flex items-center justify-center w-72 h-12 mt-9 rounded-xl border border-brand-700 bg-gradient-to-b from-brand-500 to-brand-600 text-lg font-bold text-white"
          >
            {cta}
            <ArrowDown className="h-4 w-4 ml-2" />
          </motion.button>
        </Link>

      </motion.div>
    </motion.div>
  );
};