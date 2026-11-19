import "./About.css";

const skills = [
  { name: "HTML", label: "estructura semántica" },
  { name: "CSS · SASS", label: "diseño responsive y BEM" },
  { name: "JavaScript", label: "lógica interactiva" },
  { name: "React", label: "componentes reutilizables" },
  { name: "Vue", label: "SPA y Vue Router" },
  { name: "Python", label: "lógica y fundamentos" },
  { name: "Git", label: "control de versiones" },
  { name: "IA", label: "desarrollo asistido" },
];

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
          Construyo experiencias digitales claras, cuidadas y con intención.
        </h2>

        <div className="about__text">
          <p>
            Soy Mariangel Colina, desarrolladora frontend freelance y
            estudiante de Analista Programador en el Instituto Profesional
            IPLACEX. Vivo en Santiago de Chile y trabajo en español e inglés.
          </p>

          <p>
            Antes de programar trabajé en gestión comercial, operaciones y
            análisis de información. De esa etapa traigo la comunicación, el
            pensamiento estructurado y el trabajo en equipo, que hoy aplico en
            cada proyecto.
          </p>

          <p>
            Me interesa combinar lógica, estética y detalle para construir
            interfaces coherentes, agradables y bien pensadas. Hoy sigo
            sumando Python, fundamentos de ingeniería de software y desarrollo
            asistido con IA.
          </p>
        </div>

        <div className="about__stats">
          {skills.map((skill) => (
            <article className="about__stat" key={skill.name}>
              <span className="about__stat-number">{skill.name}</span>
              <span className="about__stat-label">{skill.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
