import { Container } from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
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
      <Container className="md:px-11 px-2">
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
