"use client";

import React from "react";
import { CloudIcon, ProfileSearch, SymbolsSpeed } from "../icons";
import { motion } from "motion/react";

const FeaturesCards = (): JSX.Element => {
  const features = [
    {
      title:
        <>
          <strong>Look Professional Fast.</strong>
          <br />
          Premium prints give your brand instant credibility.
        </>,
      icon: <ProfileSearch />,
    },
    {
      title:
        <>
          <strong>On Time, Every Time.</strong>
          <br />
          Quick turnaround without the stress.
        </>,
      icon: <SymbolsSpeed />,
    },
    {
      title:
        <>
          <strong>Support You Can Count On.</strong>
          <br />
          We guide you to results you’ll love.
        </>,
      icon: <CloudIcon />,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl mx-auto grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-8 align-center">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.1 }}
            className="space-y-4  flex items-center justify-start flex-col"
          >
            <div className="size-14 flex items-center justify-center">
              {feature.icon}
            </div>
            <p className="text-center max-w-xs mx-auto text-lg md:text-xl font-semibold">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCards;
