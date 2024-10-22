"use client";

import React from "react";
import ShanakhtLogo from "@/public/assets/ShanakhtLogo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl flex justify-between items-center py-7 mx-auto px-4">
        <Image src={ShanakhtLogo} alt={"Shanakht Logo"} className="w-auto" />
        <ul className="md:flex gap-14 font-semibold font-urbanist text-NavyBlue text-xl hidden">
          <li>
            <Link href="#home" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
              Home
            </Link>
          </li>
          <li>
            <Link href="#what-we-do"  className="hover:text-primary hover:cursor-pointer transition-all duration-150">
              What We Do
            </Link>
          </li>
          <li>
            <Link href="#get-involved" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
              Get Involved
            </Link>
          </li>
          <li>
            <Link href="#team" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
              Team
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
              Contact
            </Link>
          </li>
        </ul>
        <div className="gap-7 items-center hidden">
          <div className="text-NavyBlue font-semibold font-urbanist underline">
            Log in
          </div>
          <div className="px-5 py-2 text-white font-urbanist font-semibold bg-primary2 hover:cursor-pointer hover:text-white/85 transition-all duration-150">
            Join Us
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
