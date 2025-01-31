import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa"
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
    <section className="toolkit-section wrapper">
      <h2>My Toolkit 💻</h2>
      <IconContext.Provider value={{ size: "2.0em", color: "#ff8811" }}>
        <ul className="skills wrapper">
          <li>
            <FaHtml5 />
            HTML5
          </li>
          <li>
            <FaCss3Alt />
            CSS3
          </li>
          <li>
            <SiTailwindcss />
            Tailwind CSS
          </li>
          <li>
            <SiJavascript />
            JavaScript
          </li>
          <li>
            <SiTypescript />
            Typescript
          </li>
          <li>
            <FaReact size={30} />
            React
          </li>
          <li>
            <SiReactrouter />
            React Router
          </li>
          <li>
            <SiAdobecreativecloud />
            Adobe Createive Cloud
          </li>
          <li>
            <RxAccessibility />
            Accessibility
          </li>
          <li>
            <SiFirebase />
            Firebase
          </li>
          <li>
            <SiDaisyui />
            DaisyUI
          </li>
        </ul>
      </IconContext.Provider>
    </section>
  )
}
