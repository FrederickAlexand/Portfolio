import React from "react";
import Image from "next/image"; // Import Image from Next.js
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons for social media

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-4">
            <Image
              src="/images/logo1.png" // Update with your logo path
              alt="Logo"
              width={100} // Set the width as needed
              height={50} // Set the height as needed
              className="object-contain" // Ensures the logo maintains aspect ratio
            />
          </div>
          <p className="text-slate-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-400 text-2xl transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-500 text-2xl transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
