"use client";
import Image from "next/image";
import React from "react";
import person1 from "@/public/assets/pic1.svg";
import person2 from "@/public/assets/pic2.svg";
import quotation from "@/public/assets/‘’.svg";
const AboutUs: React.FC = () => {
  return (
    <>
      <div id="team" className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="text-center flex items-center flex-col justify-between">
            <Image src={person1} alt="Sabeen Hamood" width={325} height={440} className="rounded-xl my-5 shadow-lg"/>
            <h1 className="font-bold text-4xl md:text-5xl text-NavyBlue">
              Sabeen Hamood{" "}
            </h1>
            <p className="text-2xl md:text-3xl text-black">
              Founder & President{" "}
            </p>
          </div>
          <div className="text-center flex items-center flex-col justify-between">
            <Image src={person2} alt="Sabeen Hamood" width={325} height={440} className="rounded-xl my-5 shadow-lg"/>
            <h1 className="font-bold text-4xl md:text-5xl text-NavyBlue">
              Qandeel Khan
            </h1>
            <p className="text-2xl md:text-3xl text-black">
              Founder & President{" "}
            </p>
          </div>
        </div>

        <div className="md:my-10 my-20">
          <h1 className="font-bold text-5xl text-primary">ABOUT US</h1>
          <p className="text-2xl md:text-3xl font-semibold text-black font-urbanist">
            Shanakht was established with the goal of providing a platform for
            discourse on critical social issues. Over the years, it has expanded
            to include a variety of programs aimed at skill-building and
            community development.
          </p>
        </div>

        <div className="text-center flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 flex justify-center my-14 max-w-screen-lg mx-auto">
          <Image src={quotation} alt="Quotation" className="pt-2" />
          <h2 className="text-4xl font-bold text-primary font-serif">
            We believe in the power of conversation, education, and collective
            action to create lasting change.
          </h2>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
