"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

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
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [loading, setLoading] = useState(false);

  const handleTagChange = (newTag) => {
    setLoading(true);
    setTag(newTag);
    setLoading(false);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              >
                {/* Details button included here */}
                <button
                  onClick={() => window.open(project.previewUrl, "_blank")}
                   className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white transition-colors duration-300"
                >
                  View Details
                </button>
              </ProjectCard>
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
