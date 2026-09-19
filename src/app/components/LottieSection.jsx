"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

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
        <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
                    🚀 Launch Your Ideas!
                </h2>
                <p className="mb-8 text-lg text-gray-300 max-w-xl mx-auto">
                    Bridging technical systems and business operations to streamline
                    workflows and deliver measurable results.
                </p>

                <div className="flex justify-center items-center mb-8">
                    <Player
                        autoplay
                        loop
                        src="/anim/rocketanim.json"
                        style={{ height: '400px', width: '400px' }}
                    />
                </div>

                <h3 className="text-3xl font-semibold text-white mb-8">
                    What I Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto text-left">
                    {offerings.map((offering) => (
                        <div
                            key={offering.title}
                            className="bg-[#1E1E1E] rounded-lg shadow-lg p-6"
                        >
                            <h4 className="text-xl font-semibold text-white mb-3">
                                {offering.title}
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                                {offering.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-6 mb-4 text-lg text-gray-300">
                    Let&apos;s align systems, processes, and people so operations run with
                    greater accuracy and impact.
                </p>

                <a
                    href="#contact"
                    className="inline-block bg-gradient-to-br from-blue-500 to-pink-500 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-transform transform hover:scale-105"
                    aria-label="Contact for Projects"
                >
                    Let&apos;s Collaborate!
                </a>
            </div>
        </section>
    );
};

export default LottieSection;
