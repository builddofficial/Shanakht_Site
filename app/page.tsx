"use client";
import AboutUs from "./(components)/Sections/AboutUs";
import Hero from "./(components)/Sections/Hero";
import JoinUs from "./(components)/Sections/JoinUs";
import WhatWeDo from "./(components)/Sections/WhatWeDo";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <JoinUs />
        <WhatWeDo />
        <AboutUs />
      </div>
    </>
  );
}
