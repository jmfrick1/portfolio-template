import React from 'react';
import Link from 'next/link';
import '../styles/components/ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <p>Here are some of my projects...</p>
      <Link href="/projects">
        <a className="btn">View All Projects</a>
      </Link>
    </div>
  );
};

export default ProjectsSection;
