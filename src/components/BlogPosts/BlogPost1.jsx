import React from 'react';

// Export the title of the blog post
export const blogPost1Title = "Modern Password Complexity";

export default function BlogPost1() {
  return (
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold mb-5">{blogPost1Title}</h1>
        <h2 className="text-3xl font-bold">This page is under construction</h2>
        <p className="py-6">
          Check back soon!
        </p>
        <button className="btn btn-primary m-10">Get Started</button>
      </div>
    </div>
  );
}
