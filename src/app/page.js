import React, { Suspense, lazy } from "react";
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
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>
      <Navbar />
      <div className="relative z-10 container mx-auto mt-24 px-4 md:px-8 lg:px-16 py-4">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <Suspense fallback={<div className="py-16 text-center text-slate-400">Loading...</div>}>
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
