export const siteConfig = {
  name: "Next Level Promotions",
  title: "Next Level Promotions - Sydney Custom Printing & Promotional Solutions",
  description: "Transform your brand with professional custom printing services. From banners and signage to uniforms and promotional materials - we bring your vision to life.",
  url: "https://nextlevelpromotion.com.au",
  keywords: [
    "custom printing",
    "promotional products",
    "business signage",
    "banners",
    "custom uniforms",
    "marketing materials",
    "advertising solutions",
    "branded merchandise",
    "event signage",
    "corporate printing"
  ],
  themeColor: "#0d72ff",
  author: "Next Level Promotions",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  },
  contact: {
    email: "info@nextlevelpromotion.com.au",
    phone: "0420 567 794",
    phoneFormatted: "+61420567794", // For links (tel: and WhatsApp)
  }
};
