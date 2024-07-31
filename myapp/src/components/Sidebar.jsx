import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>
        &times;
      </a>
      <a href="#">Home</a>
      <a href="#">Skills</a>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
          </div>
  );
}

export default Sidebar;
