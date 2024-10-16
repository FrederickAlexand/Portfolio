import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, children }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl relative group">
      <div
        className="h-52 md:h-72 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imgUrl})` }}
        aria-label={`Preview of ${title}`}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300" />
        
        {/* Icons container */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link href={gitUrl} className="h-12 w-12 mr-2 border-2 border-[#ADB7BE] rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:border-white animate-blink">
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          <Link href={previewUrl} className="h-12 w-12 border-2 border-[#ADB7BE] rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:border-white animate-blink">
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-white mb-1">{title}</h5>
        <p className="text-[#ADB7BE] mb-3">{description}</p>
        <div className="flex justify-between items-center">
          {children} {/* Render the button for additional functionality */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
