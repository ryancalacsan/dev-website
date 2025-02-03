import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IconContext } from "react-icons"

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__wrapper wrapper">
        <h2 className="contact-section__title">Let's Connect ✉️</h2>
        <p className="contact-section__text">
          If you ever want to grab a cup of coffee virtually or just want to
          have a quick chat - you can find me on social media or send me an
          email!
        </p>
        <div className="contact-section__social-icons">
          <IconContext.Provider value={{ size: "2.0em" }}>
            <FaLinkedinIn className="contact-section__icon" />
            <FaGithub className="contact-section__icon" />
            <FaXTwitter className="contact-section__icon" />
            <FaEnvelope className="contact-section__icon" />
          </IconContext.Provider>
        </div>
      </div>
    </section>
  )
}
