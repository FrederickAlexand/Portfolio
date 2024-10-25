"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { SiNextdotjs } from 'react-icons/si'; // Import Next.js icon
import { FaReact, FaNode, FaDatabase, FaVuejs, FaFire, FaStripe } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Decorative Fish E-commerce Marketplace",
    description:
      "An e-commerce platform for decorative fish enthusiasts, offering a wide range of exotic fish species, complete with educational content for beginners and experts.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-1",
    previewUrl: "https://your-preview-url-1.com",
    problemStatement: "Lack of access to exotic fish and educational resources.",
    solution: "An online marketplace that connects sellers and buyers with informative content.",
    addedValue: "A community for fish enthusiasts with resources for care and maintenance.",
    contribution: "Developed the front-end and integrated the payment system.",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="text-black" />, percentage: 60 },
      { name: "Node.js", icon: <FaNode className="text-green-600" />, percentage: 30 },
      { name: "MongoDB", icon: <FaDatabase className="text-green-800" />, percentage: 10 },
    ],
  },
  {
    id: 2,
    title: "Halal Tourism and Food E-commerce Recommendation Website",
    description:
      "A website offering curated halal travel destinations and halal food recommendations for Muslim travelers worldwide.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-2",
    previewUrl: "https://your-preview-url-2.com",
    problemStatement: "Difficulty finding halal options for food and accommodation while traveling.",
    solution: "A dedicated platform to find halal restaurants and travel spots.",
    addedValue: "Helps Muslim travelers plan their trips easily and with confidence.",
    contribution: "Designed the user interface and implemented the backend API.",
    technologies: [
      { name: "Vue.js", icon: <FaVuejs className="inline-block text-green-500" />, percentage: 50 },
      { name: "Express", icon: <FaNode className="inline-block text-green-600" />, percentage: 30 },
      { name: "MySQL", icon: <FaDatabase className="inline-block text-blue-600" />, percentage: 20 },
    ],
  },
  {
    id: 3,
    title: "Roof Showcase Website",
    description:
      "A web-based platform showcasing various roof materials and designs, helping homeowners and architects choose the best materials for their projects.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-3",
    previewUrl: "https://atapaspalpalembang.site/",
    problemStatement: "Homeowners and architects need a comprehensive view of roof options.",
    solution: "A showcase platform with materials and design inspirations.",
    addedValue: "Empowers users to make informed decisions for their roofing projects.",
    contribution: "Built the backend service and managed the database.",
    technologies: [
      { name: "Angular", icon: <FaReact className="inline-block text-red-600" />, percentage: 50 }, // Replace with the appropriate icon if you have one
      { name: "Node.js", icon: <FaNode className="inline-block text-green-600" />, percentage: 30 },
      { name: "PostgreSQL", icon: <FaDatabase className="inline-block text-blue-800" />, percentage: 20 },
    ],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description:
      "A mobile application for ordering food from a variety of restaurants with real-time tracking and seamless payment integration.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/your-github-repo-4",
    previewUrl: "https://your-preview-url-4.com",
    problemStatement: "Challenges in ordering food quickly and conveniently.",
    solution: "A mobile app that simplifies food ordering and payment.",
    addedValue: "Real-time tracking enhances user experience and satisfaction.",
    contribution: "Led the mobile development and user experience design.",
    technologies: [
      { name: "React Native", icon: <FaReact className="inline-block text-blue-600" />, percentage: 70 },
      { name: "Firebase", icon: <FaFire className="inline-block text-orange-600" />, percentage: 20 },
      { name: "Stripe", icon: <FaStripe className="inline-block text-purple-600" />, percentage: 10 },
    ],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description:
      "A starter template for building scalable applications with React and Firebase, including authentication and database integration.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-5",
    previewUrl: "https://your-preview-url-5.com",
    problemStatement: "Developers need a boilerplate to kickstart their React apps with Firebase.",
    solution: "A ready-to-use template that simplifies setup and integration.",
    addedValue: "Saves time and reduces boilerplate code for developers.",
    contribution: "Created the initial project structure and documentation.",
    technologies: [
      { name: "React", icon: <FaReact className="inline-block text-blue-600" />, percentage: 60 },
      { name: "Firebase", icon: <FaFire className="inline-block text-orange-600" />, percentage: 40 },
    ],
  },
  {
    id: 6,
    title: "Full-Stack Roadmap",
    description:
      "A comprehensive roadmap project, guiding developers through full-stack development using modern technologies like Node.js, React, and MongoDB.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-6",
    previewUrl: "https://your-preview-url-6.com",
    problemStatement: "New developers often struggle to find a clear learning path.",
    solution: "A visual guide that outlines the full-stack development process.",
    addedValue: "Helps beginners understand the technologies and tools needed.",
    contribution: "Designed the roadmap and created educational content.",
    technologies: [
      { name: "Node.js", icon: <FaNode className="inline-block text-green-600" />, percentage: 40 },
      { name: "React", icon: <FaReact className="inline-block text-blue-600" />, percentage: 40 },
      { name: "MongoDB", icon: <FaDatabase className="inline-block text-green-800" />, percentage: 20 },
    ],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [loading, setLoading] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleTagChange = (newTag) => {
    setLoading(true);
    setTag(newTag);
    setLoading(false);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const toggleDetails = (projectId) => {
    setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section id="project" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {["All", "Web", "Mobile"].map((category) => (
          <ProjectTag
            key={category}
            onClick={() => handleTagChange(category)}
            name={category}
            isSelected={tag === category}
          />
        ))}
      </div>
      {loading ? (
        <div className="text-center text-white">Loading projects...</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                >
                  <button
                    onClick={() => toggleDetails(project.id)}
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white transition-colors duration-300"
                  >
                    View Details
                  </button>
                </ProjectCard>
                {expandedProjectId === project.id && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg text-white">
                    <h4 className="text-lg font-semibold">Project Details</h4>
                    <p><strong>Problem Statement:</strong> {project.problemStatement}</p>
                    <p><strong>Solution:</strong> {project.solution}</p>
                    <p><strong>Added Value:</strong> {project.addedValue}</p>
                    <p><strong>My Contribution:</strong> {project.contribution}</p>
                    <div className="mt-2">
                      <h5 className="font-semibold">Technologies Used:</h5>
                      <div className="flex flex-wrap">
                        {project.technologies.map((tech) => (
                          <div key={tech.name} className="flex items-center mr-4 mb-2">
                            {tech.icon}
                            <span className="ml-2">{tech.name} ({tech.percentage}%)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-white text-center">No projects found.</div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
