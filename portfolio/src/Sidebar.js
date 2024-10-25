import React, { useState } from 'react';
import './Sidebar.css'; // Create and import a CSS file for styling

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
      <img src="./images/bronco.jpg" width="50px" alt="logo" />
      {/* Sidebar content */}
      {/* Sidebar content - displayed only when the sidebar is open */}
      {isOpen && (
        <>
          {/* <img src="./images/bronco.jpg" width="50px" alt="logo" /> */}
          <div className="sidebar-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#more">More</a>
            
            {/* Dynamic Contact Button Text */}
            <a href="mailto:kevinwong973@gmail.com" className="btn btn-primary">
              {isOpen ? 'Contact Me' : 'Contact'}
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
