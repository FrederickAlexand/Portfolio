"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Decorative Fish E-commerce Marketplace",
    description: "A one-stop shop for enthusiasts to explore, buy, and learn about a diverse range of exotic and decorative fish.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-1", // Replace with actual Git URL
    previewUrl: "https://your-preview-url-1.com", // Replace with actual preview URL
  },
  {
    id: 2,
    title: "Halal Tourism and Food E-commerce Recommendation Website",
    description: "A comprehensive platform for Muslim travelers and food enthusiasts seeking halal-certified options.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-2",
    previewUrl: "https://your-preview-url-2.com",
  },
  {
    id: 3,
    title: "Roof Showcase Website",
    description: "A platform for people to see different types of roof materials.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-3",
    previewUrl: "https://atapaspalpalembang.site/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/your-github-repo-4",
    previewUrl: "https://your-preview-url-4.com",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/your-github-repo-5",
    previewUrl: "https://your-preview-url-5.com",
  },
  {
    id: 6,
    title: "Full-Stack Roadmap",
    description: "Project 6 description",
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
    setLoading(true); // Start loading state
    setTag(newTag);
    setLoading(false); // End loading state
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="project" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      {loading ? (
        <div className="text-center text-white">Loading projects...</div> // Loading placeholder
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
              />
            ))
          ) : (
            <div className="text-white text-center">No projects found.</div> // Message for no projects
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
