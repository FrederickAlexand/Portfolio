"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "about", // Remove '#' from path
    },
    {
        title: "Projects",
        path: "project", // Remove '#' from path
    },
    {
        title: "Contacts",
        path: "contact", // Remove '#' from path
    }
];

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center">
                    <Link to="hero" smooth={true} duration={500}>
                        <Image 
                            src="/images/logo1.png" 
                            width={100} 
                            height={100} 
                            alt="Logo" 
                            className="mr-3 cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)} 
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            aria-label="Open Menu"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button 
                            onClick={() => setNavbarOpen(false)} 
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            aria-label="Close Menu"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    to={link.path} // Use Link component
                                    smooth={true}   // Enable smooth scrolling
                                    duration={500}  // Duration of the scroll
                                    className="cursor-pointer text-slate-200 hover:text-white" // Customize styles as needed
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;
