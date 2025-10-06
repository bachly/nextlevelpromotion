"use client";

import React from "react";
import { BadgeIcon, ClockIcon, SupportIcon } from "../icons";
import { motion } from "motion/react";

const FeatureGrid = (): JSX.Element => {
  const features = [
    {
      id: "showcase",
      title: <>Showcase Your<br/>Brand Beautifully</>,
      subtitle: "Turn your logo & message into standout print",
      icon: <BadgeIcon />,
    },
    {
      id: "save-time",
      title: <>Save Time &<br/>Eliminate Hassle</>,
      subtitle: "We handle everything from design to delivery",
      icon: <ClockIcon />,
    },
    {
      id: "handout",
      title: <>Make Every<br/>Handout Count</>,
      subtitle: "Look professional and connect with customers",
      icon: <SupportIcon />,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl mx-auto grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-16 align-center">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.1 }}
            className="flex items-center justify-start flex-col"
          >
            <div className="size-24 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="mt-2 max-w-xs mx-auto text-center text-lg md:text-xl uppercase font-bold">{feature.title}</h3>
            <p className="mt-2 max-w-xs mx-auto text-center text-lg md:text-xl font-semibold text-neutral-700">{feature.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
