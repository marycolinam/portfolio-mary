import "./Footer.css";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a
            href="#"
            target="_blank"
            rel="https://github.com/pauudev"
            className="footer__icon"
          >
            <Github size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="https://www.linkedin.com/in/paolacolinam/"
            className="footer__icon"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <p className="footer__copy">© 2026 · Crafted with code and intention</p>
      </div>
    </footer>
  );
}

export default Footer;
