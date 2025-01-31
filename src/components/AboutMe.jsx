import "./aboutme.css"

export default function AboutMe() {
  return (
    <section className="about-me wrapper" id="about-me">
      <h2>About Me 📸</h2>
      <div className="about-content">
        <p>
          Hello there, I’m a developer from Chicago with a passion for crafting
          beautiful and efficient web applications. With expertise in front-end
          development and experience across the full stack, I bring ideas to
          life using technologies like JavaScript, React, and Firebase. When I’m
          not coding, you might find me exploring the city, a mountain, or
          working on creative side projects. Let’s build something amazing
          together!
        </p>
        <img src="/adventure.jpg" alt="Ryan Calacsan Ice Climbing" />
      </div>
    </section>
  )
}
