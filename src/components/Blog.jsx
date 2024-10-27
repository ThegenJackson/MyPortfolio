import React, { useState } from 'react';

import BlogPost1, { blogPost1Title } from './BlogPosts/BlogPost1';
import BlogPost2, { blogPost2Title } from './BlogPosts/BlogPost2'; // Import titles

export default function Blog() {
  const [activeTab, setActiveTab] = useState('BlogPost1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = [
    { name: 'BlogPost1', title: blogPost1Title },
    { name: 'BlogPost2', title: blogPost2Title },
  ];

  return (
    <div className="hero bg-base-200 min-h-screen">

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

        </div>
        <div className="drawer-side">
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <a
                  role="tab"
                  className={`tab ${activeTab === tab.name ? 'tab-active' : ''}`}
                  onClick={() => handleTabClick(tab.name)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-content text-center">
        <div className="content">
          {activeTab === 'BlogPost1' && <BlogPost1 />}
          {activeTab === 'BlogPost2' && <BlogPost2 />}
        </div>
        
      </div>
    </div>
  );
}
