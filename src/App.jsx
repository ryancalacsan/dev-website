import React, { useRef } from "react"
import Menu from "./components/Menu"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Toolkit from "./components/Toolkit"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const sectionRef = useRef(null)

  const scrollToSection = () => {
    console.log("clicked")
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      <Menu />
      <Hero scrollToSection={scrollToSection} />
      <Projects ref={sectionRef} />
      <AboutMe />
      <Toolkit />
      <Contact />
      <Footer />
    </>
  )
}

export default App
