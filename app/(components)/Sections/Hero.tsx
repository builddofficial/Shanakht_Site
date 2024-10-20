"use client";

import React from "react";
import confident from "@/public/assets/confident.svg";
import connected from "@/public/assets/connected.svg";
import development from "@/public/assets/development.svg";
import empowered from "@/public/assets/empowered.svg";
import inspired from "@/public/assets/inspired.svg";
import mid from "@/public/assets/mid.svg";
import opportunities from "@/public/assets/opportunities.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h1 className="text-primary font-bold text-4xl md:text-8xl md:mb-8 mt-16">
            SHANAKHT
          </h1>
          <p className="text-xl md:text-2xl md:w-4/5 mx-auto">
            Shanakht is a social service organization dedicated to creating
            impactful dialogues and building skills through educational content,
            donation drives, and internship programs. We strive to empower
            communities and individuals to contribute positively to society.
          </p>
          <p className="text-primary font-bold text-2xl md:text-3xl">
            Shanakht aims to foster meaningful discourse and social development
            through various platforms, including podcasts, interviews, and
            workshops.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-3 md:grid-cols-5 my-7">
          <div className="space-y-4">
            <Image src={inspired} alt="FEEL INSPIRED"/>
            <Image src={development} alt="Holistic Development"/>
          </div>
          <div className="mt-auto hidden md:block">
            <Image src={connected} alt="Feel Connected" />
          </div>
          <div className="mt-auto relative">

            <div className="text-primary font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-center w-fit tracking-tighter leading-tight xl:leading-[2.9rem]">
              Feel INCLUDED WITH US{" "}
            </div>
            <Image src={mid} alt="Join Us" />
            <div className="w-full bg-primary2 text-white text-2xl font-semibold font-urbanist text-center py-[6px] absolute bottom-0 hover:cursor-pointer hover:text-white/85 transition-all duration-150">Join Us</div>
          </div>
          <div className="mt-auto hidden md:block">
            <Image src={confident} alt="Feel Confident" />
          </div>
          <div className="space-y-4">
            <Image src={empowered} alt="FEEL Empowered"/>
            <Image
              src={opportunities}
              alt="Learning opportunities"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
