import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IconContext } from "react-icons"

export default function Contact() {
  const emailAddress = "calacsancode@gmail.com"
  const subject = "Hello!"

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
            <a href="https://www.linkedin.com/in/ryancalacsan/" target="_blank">
              <FaLinkedinIn className="contact-section__icon" />
            </a>
            <a href="https://github.com/ryancalacsan" target="_blank">
              <FaGithub className="contact-section__icon" />
            </a>
            <a href="https://x.com/ryancalacsan" target="_blank">
              <FaXTwitter className="contact-section__icon" />
            </a>
            <a
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                subject
              )}`}
              className="contact-section__email-link"
            >
              <FaEnvelope className="contact-section__icon" />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  )
}
