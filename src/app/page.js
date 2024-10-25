import React, { Suspense, lazy } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import LottieSection from "./components/LottieSection";

const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const TimelineSection = lazy(() => import("./components/TimelineSection"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection />
          <TimelineSection />
        </Suspense>
        <EmailSection />
        <LottieSection />
      </div>
      <Footer />
    </main>
  );
}
