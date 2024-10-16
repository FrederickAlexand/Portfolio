import React from 'react';
import { Link } from 'react-scroll';
import { XMarkIcon } from "@heroicons/react/24/solid"; // Import the close icon

const MenuOverlay = ({ links, onClose }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-20">
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white"
                aria-label="Close Menu"
            >
                <XMarkIcon className="h-6 w-6" />
            </button>
            <ul className="space-y-6 text-white text-lg">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link 
                            to={link.path} 
                            smooth={true} 
                            duration={500} 
                            onClick={onClose} // Close the menu when a link is clicked
                            className="cursor-pointer"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuOverlay;
