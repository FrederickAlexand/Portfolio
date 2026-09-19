"use client"; // Ensure client-side rendering

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaUserTie, FaCode, FaLaptopCode } from 'react-icons/fa';

// Motion variants for animations
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const iconVariants = {
    hover: { scale: 1.2, rotate: 5 },
};

const dotVariants = {
    hover: { scale: 1.5, backgroundColor: '#4A90E2', transition: { duration: 0.3 } },
};

const TimelineEvent = ({ event, index, isExpanded, toggleExpand }) => {
    const isLeft = index % 2 === 0; // Determine if the event should be on the left or right

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className={`relative flex mb-16 md:mb-24 transition-all duration-300`}
            style={{
                width: '50%',
                marginLeft: isLeft ? '0' : '50%',
                marginRight: isLeft ? '50%' : '0',
                paddingLeft: isLeft ? '40px' : '0',
                paddingRight: isLeft ? '0' : '40px',
                textAlign: isLeft ? 'left' : 'right',
            }}
        >
            {/* Vertical Line */}
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 h-full w-2 z-0`}>
                {/* Interactive Dot */}
                <motion.div
                    className="absolute w-4 h-4 rounded-full bg-gray-700 cursor-pointer"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    whileHover="hover"
                    whileTap={{ scale: 1.7 }}
                    variants={dotVariants}
                    onClick={() => toggleExpand(index)} // Toggling event details on dot click
                ></motion.div>
            </div>

            {/* Event Circle with Tooltip */}
            <motion.div
                className={`bg-gradient-to-br ${isLeft ? "from-blue-500 to-purple-500" : "from-green-500 to-blue-500"} text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-10 relative group`}
                whileHover="hover"
                variants={iconVariants}
                transition={{ duration: 0.3 }}
            >
                {event.icon}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {event.tooltip}
                </div>
            </motion.div>

            {/* Event Details */}
            <motion.div
                className={`bg-white rounded-lg shadow-lg p-6 ${isLeft ? 'ml-6' : 'mr-6'} z-10`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <p className="text-sm text-gray-500 font-medium">{event.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                
                {/* Show/Hide Description with Animation */}
                <motion.div
                    className={`text-gray-600 mb-4 leading-relaxed ${isExpanded ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {event.description}
                </motion.div>

                {isExpanded && event.focus && (
                    <p className="text-gray-500">Focus: {event.focus}</p>
                )}

                {/* Read More / Show Less Button */}
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-200 mt-4"
                    aria-label={`Toggle details for ${event.title}`}
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            </motion.div>
        </motion.div>
    );
};

const TimelineSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const timelineEvents = [
        {
            date: "Nov 2024 - Present",
            title: "Software Engineer & Technical Implementer | PT Timur Usaha Mandiri / PT Makmur Supra Nusantara",
            description: "Focused on business-driven technical solutions. Implemented and configured CRM systems, streamlined client data management workflows, and integrated APIs to improve internal business operations.",
            focus: "CRM configuration, client data workflows, API integration",
            icon: <FaLaptopCode className="text-white w-7 h-7" />,
            tooltip: "PT Timur Usaha Mandiri / PT Makmur Supra Nusantara"
        },
        {
            date: "Recent",
            title: "Financial & Client Advisory | Independent",
            description: "Conducted comprehensive portfolio audits and managed complex client relationships. Developed strategic risk management plans, ensuring long-term financial stability for high-net-worth clients.",
            focus: "Portfolio audits, risk management, client advisory",
            icon: <FaUserTie className="text-white w-7 h-7" />,
            tooltip: "Independent Advisory"
        },
        {
            date: "Oct 2019 – Mar 2024",
            title: "Assistant Head of Branch | PT Sriwijaya Artha Boga",
            description: "Led core business operations and strategic planning. Successfully boosted branch revenue by 10% and managed daily logistics, maintaining a 98% inventory accuracy rate over a 4+ year tenure.",
            focus: "Operations, logistics, inventory accuracy, revenue growth",
            icon: <FaBriefcase className="text-white w-7 h-7" />,
            tooltip: "Business Operations"
        },
        {
            date: "Jan 2024 – Jun 2024",
            title: "Technical Project Lead & Teaching Assistant | Universitas Multimedia Nusantara",
            description: "Mentored and led 30+ students through complex technical projects. Acted as a project coordinator, guiding teams in developing 15+ functional applications and improving overall delivery metrics by 20%.",
            focus: "Mentorship, project coordination, delivery metrics",
            icon: <FaGraduationCap className="text-white w-7 h-7" />,
            tooltip: "Project Leadership"
        },
        {
            date: "Aug 2023 – Jan 2024",
            title: "Technical Operations Intern | Universitas Multimedia Nusantara",
            description: "Assisted in the deployment of digital commerce platforms, integrating recommendation systems and managing database frameworks to support business logic.",
            focus: "Digital commerce deployment, databases, recommendation systems",
            icon: <FaCode className="text-white w-7 h-7" />,
            tooltip: "Technical Operations"
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100  rounded-lg" id="journey">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-16 text-gray-800">My Journey</h2>
                <div className="relative">
                    <div className="relative">
                        {timelineEvents.map((event, index) => (
                            <TimelineEvent
                                key={index}
                                event={event}
                                index={index}
                                isExpanded={expandedIndex === index}
                                toggleExpand={() => toggleExpand(index)} // Pass function to toggle expand
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
