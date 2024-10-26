import React, { useState } from 'react';

import Home from './Home';
import Projects from './Projects';
import HomeLab from './HomeLab';
import Blog from './Blog';
import Employment from './Employment';

export default function Navbar() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Home');

  // Handler for active tab  on tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return  (
    <div>
      {/* Main Navbar container */}
      <div className="navbar bg-base-100 w-screen flex justify-between">

       {/* Tab list container with lifted tabs */}
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
          <a
            role="tab"
            className={`tab ${activeTab === 'Home' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Home')}
          >
            Home
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 'Employment' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Employment')}
          >
            Employment
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 'Projects' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Projects')}
          >
            Projects
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 'Home Lab' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Home Lab')}
          >
            Home Lab
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 'Blog' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Blog')}
          >
            Blog
          </a>
        </div>
      </div>

      {/* Content container to render components based on active tab */}
      <div className="content">
        {activeTab === 'Home' && <Home />}
        {activeTab === 'Employment' && <Employment />}
        {activeTab === 'Projects' && <Projects />}
        {activeTab === 'Home Lab' && <HomeLab />}
        {activeTab === 'Blog' && <Blog />}
      </div>

    </div>
  );
}
