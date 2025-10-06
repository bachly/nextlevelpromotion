"use client";

import React from "react";
import Link from "next/link";
import { Instagram, WhatsApp } from "./icons";

const Footer = () => {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com";
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/";

  return (
    <div className="w-full py-6 px-4 bg-gray-900 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white">NextLevelPromotion</span>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity [&_svg]:fill-white [&_svg_path]:fill-white"
          aria-label="Instagram"
        >
          <Instagram />
        </Link>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity [&_svg]:fill-white [&_svg_path]:fill-white"
          aria-label="WhatsApp"
        >
          <WhatsApp />
        </Link>
      </div>

      <p className="text-white/80 text-sm">
        © {new Date().getFullYear()} NextLevelPromotion. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
