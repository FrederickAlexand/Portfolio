"use client"; // Ensure client-side rendering

import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const LottieSection = () => {
    return (
        <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
                    🚀 Launch Your Ideas!
                </h2>
                <p className="mb-8 text-lg text-gray-300 max-w-xl mx-auto">
                    Transforming your vision into reality with innovative web solutions. Let’s take your projects to new heights together!
                </p>

                <div className="flex justify-center items-center mb-8">
                    <Player
                        autoplay
                        loop
                        src="/anim/rocketanim.json" // Replace with your animation file name
                        style={{ height: '400px', width: '400px' }}
                    />
                </div>

                <h3 className="text-3xl font-semibold text-white mb-4">
                    What I Offer
                </h3>
                <ul className="text-lg text-gray-300 mb-8">
                    <li>✨ <strong>Custom Web Development</strong>: Tailored solutions to meet your unique needs.</li>
                    <li>💡 <strong>UI/UX Design</strong>: Beautiful and functional designs that engage users.</li>
                    <li>📈 <strong>Performance Optimization</strong>: Enhancing speed and efficiency for better user experiences.</li>
                    <li>🔧 <strong>Ongoing Support</strong>: Continuous maintenance and updates for peace of mind.</li>
                </ul>

                <p className="mt-6 mb-4 text-lg text-gray-300">
                    Join me on this journey of innovation and creativity. Together, we can turn your vision into reality!
                </p>

                <a
                    href="#contact" // Adjust the link as necessary
                    className="inline-block bg-gradient-to-br from-blue-500 to-pink-500 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-transform transform hover:scale-105"
                    aria-label="Contact for Projects"
                >
                    Let's Collaborate!
                </a>
            </div>
        </section>
    );
};

export default LottieSection;
