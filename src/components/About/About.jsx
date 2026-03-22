import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      {/* MARQUEE */}
      <div className="about__marquee">
        <div className="about__marquee-track">
          <span>frontend</span>
          <span>diseño</span>
          <span>interfaces</span>
          <span>creatividad</span>
          <span>intención</span>
          <span>ui/ux</span>
          <span>código</span>

          {/* duplicado para loop infinito */}
          <span>frontend</span>
          <span>diseño</span>
          <span>interfaces</span>
          <span>creatividad</span>
          <span>intención</span>
          <span>ui/ux</span>
          <span>código</span>
        </div>
      </div>

      <div className="about__glow about__glow--left"></div>
      <div className="about__glow about__glow--right"></div>

      <div className="about__container">
        <p className="about__eyebrow">Sobre mí</p>

        <h2 className="about__title">
          No solo escribo código, construyo experiencias digitales con
          intención.
        </h2>

        <div className="about__text">
          <p>
            Soy desarrolladora frontend en formación, enfocada en crear
            interfaces claras, funcionales y visualmente cuidadas.
          </p>

          <p>
            Me interesa combinar estructura, estética y detalle para construir
            sitios que no solo funcionen bien, sino que también se sientan
            coherentes, agradables y bien pensados.
          </p>
        </div>

        <div className="about__stats">
          <article className="about__stat">
            <span className="about__stat-number">HTML</span>
            <span className="about__stat-label">estructura semántica</span>
          </article>

          <article className="about__stat">
            <span className="about__stat-number">CSS</span>
            <span className="about__stat-label">diseño responsive</span>
          </article>

          <article className="about__stat">
            <span className="about__stat-number">JS</span>
            <span className="about__stat-label">lógica interactiva</span>
          </article>

          <article className="about__stat">
            <span className="about__stat-number">React</span>
            <span className="about__stat-label">componentes reutilizables</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
