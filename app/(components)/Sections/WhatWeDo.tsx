"use client";

import SliderComponent from "@/components/Carousel";
import Image from "next/image";
import React from "react";

const WhatWeDo: React.FC = () => {
  return (
    <div id="what-we-do" className="max-w-screen-xl mx-auto px-4 mb-48">
      <div className="grid grid-cols-3 gap-7 md:gap-4 mb-7">
        <div className="col-span-3 lg:col-span-2">
          <div className="text-6xl md:text-9xl font-bold text-primary tracking-[33px] md:tracking-[69.12px]">
            WHAT
          </div>
          <div className="flex md:gap-12 gap-4">
            <h1 className="text-5xl md:text-8xl font-bold text-primary">
              WE<div className="mt-6">DO</div>{" "}
            </h1>
            <p className="text-lg md:text-2xl leading-tight md:leading-normal font-semibold">
              The organization aims to bridge gaps in knowledge and opportunity,
              fostering an environment where individuals can grow, engage in
              meaningful dialogue, and contribute to societal progress. <span className="hidden md:inline">It
              reflects a commitment to overcoming obstacles and creating a space
              where everyone, regardless of their background, has the resources
              and support to make a positive impact.</span>
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 border border-black rounded-lg p-6 grid grid-cols-2 gap-6">
          <Image
            src="/assets/1.svg"
            alt="Podcast & Dialogues"
            width={721}
            height={481}
          />
          <Image
            src="/assets/2.svg"
            alt="Donation Drives"
            width={721}
            height={481}
          />
          <div className="relative h-fit">
            <Image
              src="/assets/3.svg"
              alt="Skill building Workshops"
              width={721}
              height={481}
            />
            <Image
              src="/assets/3.1.svg"
              alt="Skill building Workshops"
              className="absolute bottom-0 w-full"
              width={225}
              height={71}
            />
          </div>
          <Image
            src="/assets/4.svg"
            alt="Critical Thinking Education"
            width={721}
            height={481}
          />
        </div>
      </div>
      <div>
        <h1 className="text-6xl font-bold pb-5 mt-14 md:mt-0">
          Explore our gallery!
        </h1>
        <SliderComponent />
      </div>
    </div>
  );
};

export default WhatWeDo;
