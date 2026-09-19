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
    <section id="skills" className="py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-4">Skills</h2>
        <p className="section-sub text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          Capabilities I use to connect technical systems with business operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card glass-card-hover flex flex-col p-4 md:p-6"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-start text-left">
                    <span className="text-teal-400 text-lg mt-0.5 mr-3 shrink-0">
                      {skill.icon}
                    </span>
                    <span className="text-slate-200 leading-relaxed">{skill.name}</span>
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
