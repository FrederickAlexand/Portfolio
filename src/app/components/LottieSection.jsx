"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "Technical Implementation & QA",
    description:
      "Configuring, deploying, and testing software platforms and CRMs to ensure they meet exact business requirements.",
  },
  {
    title: "Process & Workflow Optimization",
    description:
      "Designing digital workflows that reduce manual overhead, eliminate bottlenecks, and improve operational and inventory accuracy.",
  },
  {
    title: "Technical Project Coordination",
    description:
      "Translating business needs into actionable technical requirements and managing cross-functional projects from concept to delivery.",
  },
  {
    title: "Client Solutions & Strategy",
    description:
      "Leveraging analytical frameworks to audit processes, manage risk, and deliver high-integrity strategic planning for business growth.",
  },
];

const LottieSection = () => {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="text-center">
        <h2 className="section-heading mb-4">Launch Your Ideas</h2>
        <p className="section-sub mb-8 max-w-xl mx-auto">
          Bridging technical systems and business operations to streamline
          workflows and deliver measurable results.
        </p>

        <div className="flex justify-center items-center mb-10 overflow-hidden">
          <Player
            autoplay
            loop
            src="/anim/rocketanim.json"
            className="h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] max-w-full"
          />
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
          What I Offer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 max-w-5xl mx-auto text-left">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              className="glass-card glass-card-hover p-4 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-3">
                {offering.title}
              </h4>
              <p className="text-slate-400 leading-relaxed">{offering.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mb-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Let&apos;s align systems, processes, and people so operations run with
          greater accuracy and impact.
        </p>

        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full px-8 py-3 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:brightness-110"
          aria-label="Contact for Projects"
        >
          Let&apos;s Collaborate!
        </a>
      </div>
    </section>
  );
};

export default LottieSection;
