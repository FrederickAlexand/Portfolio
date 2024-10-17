"use client"; // This makes the component a Client Component

import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion"; // For animations

const skills = [
  { name: "React", icon: <FaReact />, level: "90%" },
  { name: "Next.js", icon: <SiNextdotjs />, level: "80%" },
  { name: "TypeScript", icon: <SiTypescript />, level: "75%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "85%" },
  { name: "HTML", icon: <FaHtml5 />, level: "95%" },
  { name: "CSS", icon: <FaCss3Alt />, level: "90%" },
  { name: "JavaScript", icon: <FaJs />, level: "88%" },
  { name: "Node.js", icon: <FaNodeJs />, level: "70%" },
  { name: "Git", icon: <FaGitAlt />, level: "85%" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <p className="text-center text-gray-400 mb-12">
          Here's a glimpse of the technologies and languages I'm proficient in.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#1E1E1E] rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4 text-purple-500">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: skill.level }}></div>
              </div>
              <span className="text-gray-400">{skill.level} Proficiency</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
