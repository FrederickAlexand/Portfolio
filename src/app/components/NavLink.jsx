import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ href, title }) => {
  return (
    <Link 
      to={href.replace('#', '')} // Remove the '#' for the scroll target
      smooth={true} 
      duration={500}
      className="text-slate-200 hover:text-white cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
