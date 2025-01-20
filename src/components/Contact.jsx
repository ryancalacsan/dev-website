import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IconContext } from "react-icons"

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrapper">
        <h2>Let's Connect ✉️</h2>
        <p>
          If you ever want to grab a cup of coffee virtually or just want to
          have a quick chat - you can find me on social media or send me an
          email!
        </p>
        <div className="social-icons">
          <IconContext.Provider value={{ size: "2.0em" }}>
            <FaLinkedinIn />
            <FaGithub />
            <FaXTwitter />
            <FaEnvelope />
          </IconContext.Provider>
        </div>
      </div>
    </section>
  )
}
