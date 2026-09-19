"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="hero" className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I&apos;m{" "}
              </div>
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Frederick Alexander",
                1000,
                "Technical Operations & Solutions Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block text-2xl sm:text-3xl lg:text-5xl leading-tight"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I&apos;m Fred. I bridge the gap between technical systems and
            business operations—leveraging my background in software
            implementation and business management to streamline workflows,
            optimize inventory, and drive measurable project success.
          </p>
          <div>
            <a
              href="https://wa.me/081369112198?text=Hi%20Fred,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white transition-colors duration-300"
                aria-label="Contact Frederick via WhatsApp"
              >
                Hire Me
              </button>
            </a>
            <a
              href="/FrederickAlexCV.pdf"
              download="frederick_alexander_cv.pdf"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex items-center justify-center">
            <Image
              src="/images/fred.jpg"
              alt="Fred"
              className="rounded-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
