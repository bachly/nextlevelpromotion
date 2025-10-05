"use client";

import React from "react";
import Badge from "./ui/badge";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Header = ({
  className,
  title = "Features that will make your life easier",
  subtitle = "Streamline your hiring process with powerful tools for sourcing, evaluating, and onboarding top talent - all in one platform.",
  badge = "Products",
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}) => {
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
      <Badge>{badge}</Badge>
      <div className="py-1"></div>
      <h1 className="md:text-3xl font-black my-12 lg:text-5xl text-2xl md:max-w-[670px] text-center leading-loose">
        {title}
      </h1>
      <div className="py-1"></div>
      <p className="text-center w-72 md:w-[670px] md:text-xl lg:text-2xl text-xl px-1 font-bold">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Header;
