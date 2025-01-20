import { useState } from "react"

export default function Menu() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <nav role="navigation">
      <div
        onClick={toggleMenu}
        className={`menu-toggle ${isOpen && "menu-open"}`}
      >
        <span>Menu</span>
      </div>
      <ul className={`menu ${isOpen && "active"}`}>
        <li>
          <a onClick={toggleMenu} href="#projects" className="link">
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#about-me" className="link">
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#contact" className="link">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
