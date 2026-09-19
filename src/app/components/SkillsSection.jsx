"use client";

import React from "react";
import {
  FaChartLine,
  FaClipboardCheck,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaCogs,
  FaDatabase,
  FaPlug,
  FaCode,
  FaTools,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaCheckCircle,
  FaSyncAlt,
  FaComments,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Operations & Business Management",
    skills: [
      { name: "Process Optimization", icon: <FaChartLine /> },
      { name: "Inventory Management (98% accuracy)", icon: <FaClipboardCheck /> },
      { name: "Cross-Functional Leadership", icon: <FaUsers /> },
      { name: "Financial Advisory", icon: <FaHandshake /> },
      { name: "Client Solutions", icon: <FaLightbulb /> },
    ],
  },
  {
    title: "Technical Implementation",
    skills: [
      { name: "CRM & ERP Configuration", icon: <FaCogs /> },
      { name: "Database Management (PostgreSQL/MySQL)", icon: <FaDatabase /> },
      { name: "API Integration", icon: <FaPlug /> },
      { name: "Laravel/PHP", icon: <FaCode /> },
      { name: "System Troubleshooting", icon: <FaTools /> },
    ],
  },
  {
    title: "Project Delivery & Leadership",
    skills: [
      { name: "Technical Mentorship", icon: <FaChalkboardTeacher /> },
      { name: "Agile Workflows (Jira)", icon: <FaProjectDiagram /> },
      { name: "Technical QA", icon: <FaCheckCircle /> },
      { name: "Workflow Automation", icon: <FaSyncAlt /> },
      { name: "Cross-Team Communication", icon: <FaComments /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <p className="text-center text-gray-400 mb-12">
          Capabilities I use to connect technical systems with business operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="flex flex-col p-6 bg-[#1E1E1E] rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start text-left"
                  >
                    <span className="text-purple-500 text-lg mt-0.5 mr-3 shrink-0">
                      {skill.icon}
                    </span>
                    <span className="text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
