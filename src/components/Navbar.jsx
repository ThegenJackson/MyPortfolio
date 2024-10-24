import React, { useState } from 'react';

import Hero from './Hero';
import Projects from './Projects';
import HomeLab from './HomeLab';
import Blog from './Blog';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="navbar bg-base-100 w-screen">
        
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

      <div className="content">
        {activeTab === 'Home' && <Hero />}
        {activeTab === 'Projects' && <Projects />}
        {activeTab === 'Home Lab' && <HomeLab />}
        {activeTab === 'Blog' && <Blog />}
      </div>
    </div>
  );
}
