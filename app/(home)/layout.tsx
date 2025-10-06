import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Hidden form for Netlify to detect during build */}
      <form name="product-quote-form" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="product-quote-form" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message" />
        <input type="text" name="product" />
        <input type="text" name="subject" />
        <input name="bot-field" />
      </form>

      {/* Announcement Bar */}
      <div className="w-full bg-brand-600 text-white py-2 px-11 text-center">
        <p className="text-sm font-medium">
          🎉 Special Offer: Get 20% off on all custom printing orders this month!
        </p>
      </div>

      <div className="w-full">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
