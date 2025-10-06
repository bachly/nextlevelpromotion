"use client";

import React, { useState } from "react";
import { ProductCard } from "./cards/ProductCard";
import { QuoteModal } from "./QuoteModal";

// List of all products in /public/products
const products = [
  "A Frame - Insertable.jpg",
  "A Frame Large & Small.jpg",
  "A Frame with Chalkboard.jpg",
  "A4 Folded DL Brochure.jpeg",
  "Adjustable Media Wall.jpg",
  "Bollard.jpg",
  "Box Signage.jpg",
  "Car Magnet.jpg",
  "Cardboard Signage.jpg",
  "Construction Sign.jpg",
  "Corflute Sign.jpg",
  "Crowd Control Barriers.jpg",
  "Custom Stickers.jpg",
  "Double-Sided Pull-Up Banner.jpg",
  "Dump Bins.jpg",
  "Election Signage.jpg",
  "Fabric Banner.jpg",
  "Fabric Mesh Banner.jpg",
  "Flat Mailing Boxes.jpg",
  "Floor Sticker Cutout.jpg",
  "Floor Sticker.jpg",
  "Flyer.jpg",
  "Foam PVC Sign.jpg",
  "Gazebo Big.jpg",
  "Gazebo Small.jpg",
  "Ground Spikes Banner.jpg",
  "Label Roll.jpg",
  "Large Format Sticker.jpg",
  "Luxury Pull-Up Banner.jpg",
  "Market Umbrella.jpg",
  "Media Wall.jpg",
  "Mesh Banner.jpg",
  "Modular SEG Lightbox.jpg",
  "Monsoon A Frame.jpg",
  "One Way Window Sign.jpg",
  "Outdoor Custom Sticker.jpg",
  "Parking Sign.jpg",
  "Point of Sale Standee.jpg",
  "Portable Real Estate A frame.jpg",
  "Postcard.jpg",
  "Poster.jpg",
  "Premium Pull-Up Banner.jpg",
  "Real Estate A-Framejpg.jpg",
  "Reception Signange.jpg",
  "Rectangle Flags.jpg",
  "Replacement Flags.jpg",
  "SEG Signage.jpg",
  "Screenboard.jpg",
  "Selfie Frame.jpg",
  "Shipping Box.jpg",
  "Shop Signage 1.jpg",
  "Signage.jpg",
  "Signflute Frame.jpg",
  "Signflute Signage.jpg",
  "Signflute Triangle.jpg",
  "Snap A-Frame.jpg",
  "Stretch Fabric Stands.jpg",
  "Strickersheet.jpg",
  "Table Runner.jpg",
  "Table Throws.jpg",
  "Teardrop Banner.jpg",
  "Vinyl Banner.jpg",
  "Wall Mural Art.jpg",
  "Wall Mural.jpg",
  "Window Graphic.jpg",
  "X Banner.jpg",
];

const Grids = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetQuote = (productFilename: string) => {
    // Remove file extension and format the product name
    const productName = productFilename.replace(/\.(jpg|jpeg|png|gif)$/i, "");
    setSelectedProduct({
      name: productName,
      image: `/products/${productFilename}`,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the selected product to allow exit animation
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full max-w-7xl mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {products.map((product) => {
              const productName = product.replace(/\.(jpg|jpeg|png|gif)$/i, "");
              return (
                <ProductCard
                  key={product}
                  imagePath={`/products/${product}`}
                  productName={productName}
                  onGetQuote={() => handleGetQuote(product)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <QuoteModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          productName={selectedProduct.name}
          productImage={selectedProduct.image}
        />
      )}
    </>
  );
};

export default Grids;
