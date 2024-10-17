"use client"; // Ensure client-side rendering

import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const LottieSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 text-slate-800">Interactive Animations</h2>
                <p className="mb-6 text-lg text-slate-600">
                    Make your projects stand out with stunning animations.
                </p>

                <div className="flex justify-center items-center">
                    <Player
                        autoplay
                        loop
                        src="/animations/your-animation.json" // Path to your Lottie JSON file
                        style={{ height: '400px', width: '400px' }}
                    />
                </div>

                <p className="mt-6 text-lg text-slate-600">
                    Animations like these can be an exciting and engaging addition to any project.
                </p>
            </div>
        </section>
    );
};

export default LottieSection;
