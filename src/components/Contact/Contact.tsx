import { useState } from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    time: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString(); // puedes ajustarlo según zona horaria

    const dataToSend = {
      ...formData,
      time: currentTime,
    };

    emailjs
      .send("service_qbqx2l5", "template_g2n518i", dataToSend, {
        publicKey: "tYFon4-4RWVT9nyUP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Mensaje enviado con éxito!");
          setFormData({ email: "", subject: "", message: "", time: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <section className="section-title">
      <h2 className="about-me-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <CiLinkedin />
            <a
              href="https://www.linkedin.com/in/carlos-serradilla-rodriguez-975066322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tuperfil
            </a>
          </div>

          <div className="contact-item">
            <FaGithub />
            <a
              href="https://github.com/Carlossr2401"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Carlossr2401
            </a>
          </div>

          <div className="contact-item">
            <CiMail />
            <span>carlossr2401@gmail.com</span>
          </div>
        </div>

        <div className="contact-form">
          <h2>Enviar mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
