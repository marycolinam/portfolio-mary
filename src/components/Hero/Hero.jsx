import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Hello, I&apos;m</p>

          <h1 className="hero__title">
            Mary Colina
            <span> Frontend Developer · Analista Programador en formación</span>
          </h1>

          <p className="hero__terminal">
            creando experiencias digitales claras, funcionales y con
            intención
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__button hero__button--primary">
              Ver proyectos
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Contacto
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow"></div>

          <div className="hero__shape hero__shape--orb"></div>
          <div className="hero__shape hero__shape--blob"></div>
          <div className="hero__shape hero__shape--ring"></div>

          <div className="hero__floating-card">
            <span className="hero__floating-line"></span>
            <span className="hero__floating-line hero__floating-line--short"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
