"use client";

import React from "react";
import Eyebrow from "./ui/eyebrow";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Header = ({
  className,
  title = "Features that will make your life easier",
  titleSecondary,
  subtitle = "Streamline your hiring process with powerful tools for sourcing, evaluating, and onboarding top talent - all in one platform.",
  eyebrow = "Products",
  eyebrowSize = "md",
}: {
  className?: string;
  title?: string;
  titleSecondary?: string;
  subtitle?: string;
  eyebrow?: string;
  eyebrowSize?: "sm" | "md" | "lg";
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className={cn(
        "flex flex-col items-center justify-center space-y-3 my-16 md:my-24",
        className
      )}
    >
      <Eyebrow size={eyebrowSize}>{eyebrow}</Eyebrow>
      <div className="flex flex-col items-center gap-2 my-6">
        <h1 className="font-black lg:text-5xl text-4xl max-w-md md:max-w-6xl text-center">
          {title}
        </h1>
        {titleSecondary && (
          <h2 className="font-black lg:text-5xl text-4xl max-w-md md:max-w-6xl text-center">
            {titleSecondary}
          </h2>
        )}
      </div>
      <div className="py-1"></div>
      <p className="text-center w-full max-w-md md:max-w-2xl md:text-xl lg:text-2xl text-xl px-1 font-medium text-neutral-900">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Header;
