"use client";

import React, { useState } from "react";
import ShanakhtLogo from "@/public/assets/SH-cropped.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-screen-xl flex justify-between items-center py-7 mx-auto px-4 relative">
      {/* Logo */}
      <Image src={ShanakhtLogo} alt={"Shanakht Logo"} className={`${open ? "hidden" : "block"} w-20 md:w-28`} />

      {/* Desktop Menu */}
      <ul className="md:flex gap-14 font-semibold font-urbanist text-NavyBlue text-xl hidden">
        <li>
          <Link href="#home" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
            Home
          </Link>
        </li>
        <li>
          <Link href="#what-we-do" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
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

      {/* Desktop Buttons */}
      <div className="gap-7 items-center hidden">
        <div className="text-NavyBlue font-semibold font-urbanist underline">Log in</div>
        <div className="px-5 py-2 text-white font-urbanist font-semibold bg-primary2 hover:cursor-pointer hover:text-white/85 transition-all duration-150">
          Join Us
        </div>
      </div>

      

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center gap-4 font-semibold font-urbanist text-NavyBlue text-xl mt-4 md:hidden mx-auto">
          <li>
            <Link href="#home" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
              Home
            </Link>
          </li>
          <li>
            <Link href="#what-we-do" className="hover:text-primary hover:cursor-pointer transition-all duration-150">
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
          <div className="flex-col gap-2 items-center hidden">
            <div className="text-NavyBlue font-semibold font-urbanist underline">Log in</div>
            <div className="px-5 py-2 text-white font-urbanist font-semibold bg-primary2 hover:cursor-pointer hover:text-white/85 transition-all duration-150">
              Join Us
            </div>
          </div>
        </ul>
      )}

      {/* Mobile Menu Button */}
      <button
        className={`text-primary w-10 h-10  focus:outline-none md:hidden ${open ? "absolute top-4 right-4 " : "relative"}`}
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 bg-black top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
