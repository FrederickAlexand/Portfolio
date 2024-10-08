// MenuOverlay.js
import React from 'react';
import { Link } from 'react-scroll';

const MenuOverlay = ({ links }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-20 flex items-center justify-center">
            <ul className="flex flex-col space-y-4">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link 
                            to={link.path} 
                            smooth={true} 
                            duration={500} 
                            className="text-white text-lg cursor-pointer hover:underline"
                            onClick={() => setNavbarOpen(false)} // Close menu on link click
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
