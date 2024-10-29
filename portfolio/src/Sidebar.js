import React, { useState } from 'react';
import './Sidebar.css'; // Create and import a CSS file for styling
import bronco from "./assets/images/bronco.jpg";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Button to toggle sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '-' : '+'}
      </button>
      <div className={`sidebar-content ${isOpen ? 'visible' : 'hidden'}`}>
        <img src={bronco} width="50px" alt="logo" />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#more">More</a>
        {/* Dynamic Contact Button Text */}
        <a href="mailto:kevinwong973@gmail.com" className="btn btn-primary">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
