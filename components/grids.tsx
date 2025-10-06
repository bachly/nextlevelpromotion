"use client";

import React, { useState } from "react";
import { ProductCard } from "./cards/ProductCard";
import { QuoteModal } from "./QuoteModal";
import { products } from "@/lib/products";

const Grids = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetQuote = (productName: string, productImage: string) => {
    setSelectedProduct({
      name: productName,
      image: productImage,
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
            {products.map((product) => (
              <ProductCard
                key={product.name}
                imagePath={product.media[0]}
                productName={product.name}
                onGetQuote={() => handleGetQuote(product.name, product.media[0])}
              />
            ))}
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
