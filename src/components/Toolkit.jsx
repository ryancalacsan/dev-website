import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa"
import {
  SiAdobecreativecloud,
  SiReactrouter,
  SiJavascript,
} from "react-icons/si"
import { RxAccessibility } from "react-icons/rx"
import { IconContext } from "react-icons"

export default function Toolkit() {
  return (
    <section className="toolkit-section">
      <h2 className="wrapper">My Toolkit 💻</h2>
      <IconContext.Provider value={{ size: "2.0em", color: "#ff8811" }}>
        <ul className="skills wrapper">
          <li>
            <FaReact size={30} />
            React
          </li>
          <li>
            <SiAdobecreativecloud />
            Adobe Createive Cloud
          </li>
          <li>
            <FaCss3Alt />
            CSS3
          </li>
          <li>
            <FaHtml5 />
            HTML
          </li>
          <li>
            <SiJavascript />
            JavaScript
          </li>
          <li>
            <SiReactrouter />
            React Router
          </li>
          <li>
            <RxAccessibility />
            Accessibility
          </li>
        </ul>
      </IconContext.Provider>
    </section>
  )
}
