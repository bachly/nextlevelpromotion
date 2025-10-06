import { cn } from "@/lib/utils";
import React from "react";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={cn(
        "w-fit px-3 md:text-xl text-lg gap-2 font-bold text-brand"
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
