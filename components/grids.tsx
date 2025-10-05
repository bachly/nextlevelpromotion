"use client";

import Image from "next/image";
import React from "react";
import { ContentCard } from "./cards/ContentCard";

const Grids = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="lg:w-10/12 w-full space-y-5">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="relative bg-[#FFFFFF] h-[483px] lg:w-1/2 w-full flex flex-col items-center justify-between rounded-[26px] p-5 border">
            <div className="w-full flex-1 flex items-center justify-center">
              <Image
                src="https://picsum.photos/seed/card1/400/300"
                alt="Card visual"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
            <ContentCard
              title="Easy resume upload"
              description="Simple way to track user's resume and relevant scores"
              className=""
            />
          </div>
          <div className="bg-[#FFFFFF] h-[483px] lg:w-1/2 w-full flex flex-col items-center justify-between rounded-[26px] p-5 border">
            <div className="w-full flex-1 flex items-center justify-center">
              <Image
                src="https://picsum.photos/seed/card2/400/300"
                alt="Card visual"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
            <ContentCard
              title="Track interview feedback"
              description="All the features of product feedback tool you need to easily centralize product"
              className=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="relative lg:h-[483px] h-full lg:w-1/2 w-full flex flex-col items-center justify-between rounded-2xl p-5 border border-[#DBDCDF]">
            <div className="w-full flex-1 flex items-center justify-center">
              <Image
                src="https://picsum.photos/seed/card3/400/300"
                alt="Card visual"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
            <ContentCard
              title="Rank interviee, effortlessly"
              description="State of the art bar chart depiction of interviee's performance"
              className=""
            />
          </div>
          <div className="relative bg-[#FFFFFF] h-[483px] lg:w-1/2 overflow-hidden w-full mr-0 flex flex-col items-center justify-between rounded-[26px] p-5 border">
            <div className="w-full flex-1 flex items-center justify-center">
              <Image
                src="https://picsum.photos/seed/card4/400/300"
                alt="Card visual"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
            <ContentCard
              title="Easy social media integration"
              description="Go from nothing to social media success stories."
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grids;
