import CopyableText from "./CopyableText";

const Contact = () => {
  return (
    <section className="section-title">
      <h2 className="about-me-title">Contact Me</h2>
      <div className="contact-div">
        <div className="contact-links">
          <div className="contact-links-element">
            <span>Correo</span>
            <CopyableText
              text="correo@ejemplo.es"
              className="text-blue-600 font-medium"
            />
          </div>
        </div>
        <div className="contact-input"></div>
      </div>
    </section>
  );
};

export default Contact;
