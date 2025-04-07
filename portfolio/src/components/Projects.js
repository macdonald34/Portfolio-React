import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Car-Hire',
    description: 'A full-featured online store with cart functionality and payment integration.',
    technologies: ['React', 'Node.js', 'Flask', 'Stripe'],
    image: '/project1.jpg',
    link: '#',
    github: 'https://github.com/macdonald34/Car-Rentals'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: '/project2.jpg',
    link: '#',
    github: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;