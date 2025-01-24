import { FaAngleDoubleDown } from "react-icons/fa"

export default function Header({ scrollToSection }) {
  return (
    <header className="header-section wrapper">
      <div className="header-main-container">
        <div className="header-info">
          <h1>
            Hello! <span>I'm Ryan. 👋</span>
          </h1>
          <p>
            A <span>developer</span> and <span>photographer</span> with a
            passion for creating engaging, accessible user experiences.
          </p>
        </div>
        <img
          src="src/assets/profile.jpg"
          alt="Ryan Calacsan smiling"
          className="header-img"
        />
      </div>
      <p className="tagline">
        Code, Creativity, and a Dash of Chicago Flair 🌆✨
      </p>
      <div className="down-arrow" onClick={scrollToSection}>
        <FaAngleDoubleDown size="2rem" />
      </div>
    </header>
  )
}
