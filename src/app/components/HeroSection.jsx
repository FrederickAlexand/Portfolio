"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          className="lg:col-span-7 min-w-0 text-center lg:text-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base font-medium text-slate-400 mb-3 tracking-wide uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-white mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Frederick Alexander
          </h1>
          <h2 className="mb-6 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Technical Operations &amp; Solutions Specialist
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Hi, I&apos;m Fred. I bridge the gap between technical systems and
            business operations—leveraging my background in software
            implementation and business management to streamline workflows,
            optimize inventory, and drive measurable project success.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
            <a
              href="https://wa.me/08118683717?text=Hi%20Fred,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-110 transition-all duration-300"
              aria-label="Contact Frederick via WhatsApp"
            >
              Hire Me
            </a>
            <a
              href="/FredericksCv.pdf"
              download="frederick_alexander_cv.pdf"
              className="inline-flex min-h-12 items-center justify-center px-6 py-3 rounded-full border border-slate-500/70 text-slate-200 font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end min-w-0"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 max-w-full">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/40 to-teal-400/30 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-slate-800/50 shadow-2xl shadow-blue-500/20">
              <Image
                src="/images/fred.jpg"
                alt="Fred"
                fill
                sizes="(max-width: 1024px) 256px, 320px"
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
