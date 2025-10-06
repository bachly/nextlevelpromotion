"use client";

import React from "react";
import Badge from "./ui/badge";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Features = ({ className }: { className?: string }) => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.9, delay: 0.2 }}
      className={cn(
        "flex flex-col items-center justify-center space-y-3 my-16 md:my-24",
        className
      )}
    >
      <Badge>Printing That Helps Small Businesses Shine</Badge>
      <div className="py-1"></div>
      <h1 className="md:text-3xl font-black my-6 lg:text-5xl text-2xl md:max-w-[670px] text-center leading-loose">
        We&apos;re Here to Make Your Brand Look Its Best
      </h1>
      <div className="py-1"></div>
      <p className="text-center w-72 md:w-[670px] md:text-xl lg:text-2xl text-xl px-1 font-bold">
        At Next Level Promotions, we started with one simple idea: help local businesses grow by making them look professional. Whether it&apos;s a flyer for your first event or signage for your new storefront, we&apos;re here to make every print count.
      </p>
    </motion.div>
  );
};

export default Features;
