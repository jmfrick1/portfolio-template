import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <DarkModeToggle />
      <div className="projects-container">
        <h1>My Projects</h1>
        <p>Here you can showcase your projects. Include descriptions, images, and links to the live projects or repositories.</p>
        <div className="project-list">
          <div className="project-item">
            <h2>Project Title 1</h2>
            <p>Short description of the project.</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-item">
            <h2>Project Title 2</h2>
            <p>Short description of the project.</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
