import { FaAngleDoubleDown } from "react-icons/fa"

export default function Hero({ scrollToSection }) {
  return (
    <section className="hero wrapper">
      <div className="hero__main-container">
        <div className="hero__info">
          <h1>
            Hello! <span className="hero__name">I'm Ryan. 👋</span>
          </h1>
          <p className="hero__description">
            A <span className="hero__highlight">developer</span> and{" "}
            <span className="hero__highlight">photographer</span> with a passion
            for creating engaging, accessible user experiences.
          </p>
        </div>
        <img
          src="/profile.jpg"
          alt="Ryan Calacsan smiling"
          className="hero__img"
        />
      </div>
      <p className="hero__tagline">
        Code, Creativity, and a Dash of Chicago Flair 🌆✨
      </p>
      <div className="hero__down-arrow" onClick={scrollToSection}>
        <FaAngleDoubleDown size="2rem" />
      </div>
    </section>
  )
}
