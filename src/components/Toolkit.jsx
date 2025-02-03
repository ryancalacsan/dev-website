import { FaReact, FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa"
import {
  SiAdobecreativecloud,
  SiReactrouter,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiDaisyui,
} from "react-icons/si"
import { RxAccessibility } from "react-icons/rx"
import { IconContext } from "react-icons"

export default function Toolkit() {
  return (
    <section className="toolkit toolkit-section wrapper">
      <h2 className="toolkit__title">My Toolkit 💻</h2>
      <IconContext.Provider value={{ size: "2.0em", color: "#ff8811" }}>
        <ul className="toolkit__skills">
          <li className="toolkit__skill">
            <RxAccessibility />
            Accessibility
          </li>
          <li className="toolkit__skill">
            <FaHtml5 />
            HTML5
          </li>
          <li className="toolkit__skill">
            <FaCss3Alt />
            CSS3
          </li>
          <li className="toolkit__skill">
            <SiTailwindcss />
            Tailwind CSS
          </li>
          <li className="toolkit__skill">
            <FaSass />
            Sass
          </li>
          <li className="toolkit__skill">
            <SiJavascript />
            JavaScript
          </li>
          <li className="toolkit__skill">
            <SiTypescript />
            Typescript
          </li>
          <li className="toolkit__skill">
            <FaReact size={30} />
            React
          </li>
          <li className="toolkit__skill">
            <SiReactrouter />
            React Router
          </li>
          <li className="toolkit__skill">
            <SiFirebase />
            Firebase
          </li>
          <li className="toolkit__skill">
            <SiAdobecreativecloud />
            Adobe Creative Cloud
          </li>
          <li className="toolkit__skill">
            <SiDaisyui />
            DaisyUI
          </li>
        </ul>
      </IconContext.Provider>
    </section>
  )
}
