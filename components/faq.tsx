"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQData } from "@/lib/data";

const FAQSection = () => {
  return (
    <div>
      <div className="w-full max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full">
          {FAQData.map((item, index) => (
            <div key={index}>
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
