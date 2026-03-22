import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          Mary
        </a>

        <nav className="navbar__nav" aria-label="Navegación principal">
          <a href="#home" className="navbar__link">
            Inicio
          </a>
          <a href="#about" className="navbar__link">
            Sobre mí
          </a>
          <a href="#projects" className="navbar__link">
            Proyectos
          </a>
          <a href="#contact" className="navbar__link">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
