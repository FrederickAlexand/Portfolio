"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCode, FaUserGraduate, FaCertificate } from "react-icons/fa";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion"; // Animation
// import certificatePreviewImage from "../path/to/certificate-preview.jpg"; // Example preview image

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>Process Optimization & Inventory Management</li>
        <li>CRM & ERP Configuration</li>
        <li>Database Management (PostgreSQL/MySQL)</li>
        <li>API Integration & Laravel/PHP</li>
        <li>Technical Project Coordination</li>
        <li>Client Solutions & Financial Advisory</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-4">
         <li className="flex items-center space-x-3">
          {/* Add university logo or icon */}
          <img
            src="/images/umn.png"
            alt="Universitas Multimedia Nusantara Logo"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h4 className="font-bold">Universitas Multimedia Nusantara</h4>
            <p>Bachelor of Informatics Engineering</p>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          {/* Add university logo or icon */}
          <img
            src="/images/revou.png"
            alt="RevoU Logo"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h4 className="font-bold">RevoU Fullstack Software Engineer Bootcamp</h4>
            <p>Intensive full-stack development course</p>
          </div>
        </li>
       
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <FaCertificate className="text-purple-600" />
          <div>
            <h4 className="font-semibold">TOEIC Certification - Score: 945</h4>
            <p>Test of English for International Communication</p>
            <a
              href="https://drive.google.com/file/d/14NFfQ4aKTuJS54PbY9AVp44ROPCS-f0C/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Certificate
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaCertificate className="text-purple-600" />
          <div>
            <h4 className="font-semibold">HTML & CSS Specialist</h4>
            <p>Pearson Information Technology Specialist</p>
            <a
              href="https://drive.google.com/file/d/1MLrr1pTpfc95h3je6LAdohZinA1HLFhJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Certificate
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaCertificate className="text-purple-600" />
          <div>
            <h4 className="font-semibold">Python Developer Certification</h4>
            <p>Issued by Solo Learn</p>
            <a
              href="https://www.sololearn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Certificate
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaCertificate className="text-purple-600" />
          <div>
            <h4 className="font-semibold">RevoU Full Stack Software Engineering</h4>
            <a
              href="https://drive.google.com/file/d/1zwSS-5SZD8RHaWiIKq6EGN3JJAWmrTZb/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Certificate
            </a>
          </div>
          {/* Preview image for certificate */}
          <a
            href="https://www.revou.com/certificates/full-stack-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
              src={certificatePreviewImage}
              alt="Certificate Preview"
              className="w-16 h-16 object-cover rounded-lg shadow-lg"
            /> */}
          </a>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section id="about" className="text-white  bg-[#1E1E1E] rounded-lg">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/about.jpg"
          width={500}
          height={500}
          alt="about"
          className="rounded-lg shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed mb-6">
            I&apos;m a{" "}
            <span className="text-purple-400 font-bold">
              Technical Operations & Solutions Specialist
            </span>{" "}
            who connects software implementation with{" "}
            <span className="font-semibold text-purple-400">
              business operations
            </span>
            . I focus on streamlining workflows, configuring systems, and
            driving measurable project outcomes. I graduated from{" "}
            <span className="font-bold text-purple-300">
              Multimedia Nusantara University
            </span>{" "}
            with a degree in <strong>Informatics Engineering</strong>, combining
            technical delivery with operational leadership.
          </p>

          {/* Tabs */}
          <div className="flex space-x-4 mt-6">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              aria-label="Skills Tab"
              role="tab"
            >
              <FaCode className="mr-2" /> Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              aria-label="Education Tab"
              role="tab"
            >
              <FaUserGraduate className="mr-2" /> Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              aria-label="Certifications Tab"
              role="tab"
            >
              <FaCertificate className="mr-2" /> Certifications
            </TabButton>
          </div>

          {/* Animated content switching */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab} // key ensures a new animation is triggered for each tab
              className="mt-8"
              role="tabpanel"
              aria-labelledby={tab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
