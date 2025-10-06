"use client";

import React from "react";
import { Alkatra } from "next/font/google";
import { cn } from "@/lib/utils";

const handwritingFont = Alkatra({ weight: "500", subsets: ["latin"] });

interface EyebrowProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  size = "md",
  className
}) => {
  const sizeClasses = {
    sm: "text-3xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  return (
    <div
      className={cn(
        "text-brand-500",
        sizeClasses[size],
        handwritingFont.className,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Eyebrow;
