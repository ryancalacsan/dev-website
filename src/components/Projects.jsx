import { forwardRef } from "react"

const Projects = forwardRef((props, ref) => {
  return (
    <section className="projects-section wrapper" id="projects" ref={ref}>
      <h2>My Projects 👾</h2>
      <p className="learnMoreText ">click any project to learn more!</p>
      <div className="firstRow ">
        <div className="portfolio-item">
          <img
            className="portfolio-thumbnail"
            src="src/assets/placeholder.jpg"
            alt=""
          />
        </div>
        <div className="portfolio-item">
          <img
            className="portfolio-thumbnail"
            src="src/assets/placeholder.jpg"
            alt=""
          />
        </div>
        <div className="SecondRow">
          <div className="portfolio-item">
            <img
              className="portfolio-thumbnail"
              src="src/assets/placeholder.jpg"
              alt=""
            />
          </div>
          <div className="portfolio-item">
            <img
              className="portfolio-thumbnail"
              src="src/assets/placeholder.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
})

export default Projects
