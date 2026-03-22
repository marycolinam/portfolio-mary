import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Faltan las credenciales de EmailJS en el archivo .env");
      return;
    }

    setIsSending(true);
    setStatus("Enviando mensaje...");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("Mensaje enviado con éxito. Te responderé pronto.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSending(false);
    }
    <input type="hidden" name="botcheck" />;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__glow contact__glow--left"></div>
      <div className="contact__glow contact__glow--right"></div>

      <div className="contact__container">
        <div className="contact__intro">
          <div className="contact__intro-content">
            <p className="contact__eyebrow">Contacto</p>

            <h2 className="contact__title">Hablemos de tu próxima idea</h2>

            <p className="contact__text">
              Si quieres colaborar conmigo, conversar sobre un proyecto o
              conocer más sobre mi trabajo, puedes escribirme aquí.
            </p>
          </div>

          <div className="contact__info">
            <div className="contact__item">
              <span className="contact__label">Ubicación</span>
              <p className="contact__value">Chile · Remoto</p>
            </div>

            <div className="contact__item">
              <span className="contact__label">Idioma</span>
              <p className="contact__value">Español · Inglés</p>
            </div>
          </div>
        </div>

        <div className="contact__card">
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="user_name" className="contact__field-label">
                Nombre
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="contact__input"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="user_email" className="contact__field-label">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className="contact__input"
                placeholder="tuemail@correo.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__field-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder="Cuéntame sobre tu idea o proyecto..."
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact__button"
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p
              className={`contact__status ${status.includes("éxito") ? "success" : ""}`}
            >
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
