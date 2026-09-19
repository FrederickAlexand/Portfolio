"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const TimelineEvent = ({ event, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative pl-14 md:pl-16"
    >
      <div className="absolute left-[11px] md:left-[13px] top-6 z-10" aria-hidden="true">
        <span className="relative flex h-4 w-4 md:h-5 md:w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
          <span className="relative inline-flex h-4 w-4 md:h-5 md:w-5 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] ring-2 ring-slate-950" />
        </span>
      </div>

      <div className="glass-card glass-card-hover p-4 md:p-6 text-left">
        <span className="date-badge mb-3">{event.date}</span>
        <h3 className="mt-3 text-lg md:text-xl font-bold tracking-tight text-white leading-snug">
          {event.role}
        </h3>
        <p className="text-sm md:text-base font-semibold text-teal-300 mt-1 mb-3">
          {event.company}
        </p>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.article>
  );
};

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "Jul 2025 - Dec 2025",
      role: "Project Manager",
      company: "PT. KANALIA KUNCI KOMUNIKASI KREATIF (FourKleis 360)",
      description:
        "Managed end-to-end project delivery for brand activation campaigns, including FMCG clients under the Wong Coco Group. Coordinated event logistics, managed vendor relations, and drove cross-functional alignment between creative teams and stakeholders to ensure on-time execution and strategic alignment.",
    },
    {
      date: "Nov 2024 - Jul 2025",
      role: "Software Engineer & Implementer",
      company: "PT Timur Usaha Mandiri / Makmur Supra Nusantara",
      description:
        "Spearheaded full-stack web development and system optimization for corporate and educational sectors. Focused on process automation, improving digital workflows, and deploying scalable web solutions using PHP, Laravel, and Vue.js.",
    },
    {
      date: "Oct 2019 - May 2024",
      role: "Assistant Head of Branch Operations",
      company: "PT. Sriwijaya Artha Boga",
      description:
        "Directed comprehensive branch operations, driving business strategy, market expansion, and revenue growth. Managed supply chain logistics, cross-functional team leadership, and financial forecasting driven by evidence-based data analysis over a 4.5-year tenure.",
    },
    {
      date: "Jan 2024 - Jun 2024",
      role: "Technical Teaching Assistant",
      company: "Universitas Multimedia Nusantara",
      description:
        "Mentored students in internet technologies and web architecture. Guided the development of front-end applications, focusing on clean code practices and technical project coordination.",
    },
    {
      date: "Aug 2023 - Dec 2023",
      role: "Technical Operations Intern",
      company: "Universitas Multimedia Nusantara",
      description:
        "Collaborated on the infrastructure and deployment of an e-commerce platform. Designed relational databases and integrated algorithmic recommendation systems to support core business logic.",
    },
  ];

  return (
    <section className="py-12 md:py-20" id="journey">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="section-heading text-center mb-3">My Journey</h2>
        <p className="section-sub text-center mb-8 md:mb-14 max-w-2xl mx-auto">
          A roadmap across project management, operations, and technical implementation.
        </p>
        <div className="relative">
          <div
            className="absolute left-[18px] md:left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-400 via-teal-400/70 to-transparent"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-4 md:gap-6">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={`${event.role}-${event.date}`}
                event={event}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
