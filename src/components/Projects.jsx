import { forwardRef, useState } from "react"
import projectsData from "../projectData"
import "./projects.css" // CSS for the hover effect and click behavior

const Projects = forwardRef((props, ref) => {
  const [activeProjectId, setActiveProjectId] = useState(null)

  const handleClick = (projectId) => {
    setActiveProjectId(activeProjectId === projectId ? null : projectId) // Toggle active project
  }

  return (
    <section className="projects-section wrapper" id="projects" ref={ref}>
      <h2>My Projects 👾</h2>
      <p className="learnMoreText ">click any project to learn more!</p>
      <div className="portfolio-container">
        {projectsData.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div
              className="thumbnail-container"
              onClick={() => handleClick(project.id)} // Only for small screens
            >
              <img
                src={project.image}
                alt={project.title}
                className="thumbnail"
              />
              {/* Overlay content */}
              <div
                className={`overlay ${
                  activeProjectId === project.id ? "active" : ""
                }`}
              >
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="links">
                    <a
                      href={project.livePreviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Projects
