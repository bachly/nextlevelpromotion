"use client";

import React from "react";
import { Playball } from "next/font/google";
import { cn } from "@/lib/utils";

const handwritingFont = Playball({ weight: "400", subsets: ["latin"] });

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
    <div className={cn(
      "text-brand-500",
      sizeClasses[size],
      handwritingFont.className,
      className
    )}>
      {children}
    </div>
  );
};

export default Eyebrow;
