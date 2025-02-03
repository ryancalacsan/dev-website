export default function AboutMe() {
  return (
    <section className="about-me wrapper" id="about-me">
      <h2 className="about-me__title">About Me 📸</h2>
      <div className="about-me__content">
        <p className="about-me__text">
          Hello there, I’m a developer from Chicago with a passion for crafting
          beautiful and efficient web applications. With expertise in front-end
          development and experience across the full stack, I bring ideas to
          life using technologies like JavaScript, React, and Firebase. When I’m
          not coding, you might find me exploring the city, a mountain, or
          working on creative side projects. Let’s build something amazing
          together!
        </p>
        <img
          className="about-me__content__image"
          src="/adventure.jpg"
          alt="Ryan Calacsan Ice Climbing"
        />
      </div>
    </section>
  )
}
