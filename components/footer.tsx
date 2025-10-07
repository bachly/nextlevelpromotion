"use client";

import React from "react";
import Link from "next/link";
import { Instagram, WhatsApp } from "./icons";
import { siteConfig } from "@/lib/site-config";

const Footer = () => {
  return (
    <div className="w-full py-6 px-4 bg-gray-900 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white">{siteConfig.name}</span>
      </div>

      <div className="flex items-center gap-6">
        {siteConfig.social.instagram && (
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity [&_svg]:fill-white [&_svg_path]:fill-white"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
        )}
        <Link
          href={`https://wa.me/${siteConfig.contact.phoneFormatted.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity [&_svg]:fill-white [&_svg_path]:fill-white"
          aria-label="WhatsApp"
        >
          <WhatsApp />
        </Link>
      </div>

      <p className="text-white/80 text-sm">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
