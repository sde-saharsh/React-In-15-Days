import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-menu">
        <li>Home</li>
        <li>Resume</li>
        <li>Skills</li>
        <li>Profiles</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Summary</li>
      </ul>
    </div>
  );
};

export default SideBar;
