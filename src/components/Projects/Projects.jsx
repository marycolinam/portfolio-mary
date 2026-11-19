import "./Projects.css";
import FeaturedProject from "./FeaturedProject";
import noirtechImg from "../../assets/images/noirtech-preview.png";
import booklistImg from "../../assets/images/booklist-vue-preview.png";
import pixelImg from "../../assets/images/pixel-perfect-preview.png";

const featuredProject = {
  title: "Noirtech SPA",
  description:
    "Aplicación SPA con una estética más técnica y una estructura frontend más completa, enfocada en navegación, componentes y organización del código.",
  stack: ["Vue", "Vue Router", "JavaScript", "CSS"],
  highlights: [
    "Arquitectura SPA",
    "Componentes reutilizables",
    "Mayor complejidad de interfaz",
  ],
  image: noirtechImg,
  demo: "",
  repo: "https://github.com/marycolinam/noirtech-spa",
};

const projects = [
  {
    title: "Booklist Vue",
    focus: "Código",
    description:
      "Aplicación para gestionar libros, centrada en flujo de datos, navegación y arquitectura basada en componentes.",
    stack: ["Vue", "Vue Router", "JavaScript", "CSS"],
    highlights: [
      "Single Page Application",
      "Gestión dinámica de datos",
      "Arquitectura frontend",
    ],
    image: booklistImg,
    demo: "https://unique-hamster-b3a9ce.netlify.app",
    repo: "https://github.com/marycolinam/booklist-vue",
  },
  {
    title: "Pixel Perfect",
    focus: "Diseño",
    description:
      "Course Card desarrollada con foco en fidelidad visual y organización de estilos con metodología BEM y SASS modular.",
    stack: ["HTML", "SASS", "BEM"],
    highlights: ["Precisión visual", "BEM", "SASS modular"],
    image: pixelImg,
    demo: "https://marycolinam.github.io/pixel-perfect-l2/",
    repo: "https://github.com/marycolinam/pixel-perfect-l2",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <p className="projects__eyebrow">Proyectos</p>

        <h2 className="projects__title">
          Una selección de proyectos donde combiné código, diseño y estructura.
        </h2>

        <p className="projects__intro">
          Cada proyecto representa una parte distinta de mi camino como
          desarrolladora frontend: desde la lógica y la arquitectura hasta la
          atención al detalle visual.
        </p>

        <FeaturedProject project={featuredProject} />

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="projects__card" key={project.title}>
              <div className="projects__preview">
                <img
                  src={project.image}
                  alt={`Vista previa del proyecto ${project.title}`}
                  className="projects__image"
                />

                <div className="projects__overlay"></div>

                <span className="projects__focus">{project.focus}</span>
              </div>

              <div className="projects__content">
                <div className="projects__card-top">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__description">{project.description}</p>
                </div>

                <div className="projects__section">
                  <p className="projects__label">Stack</p>
                  <div className="projects__tags">
                    {project.stack.map((item) => (
                      <span className="projects__tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects__section">
                  <p className="projects__label">Puntos clave</p>
                  <ul className="projects__highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="featured-project__actions">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="featured-project__button featured-project__button--primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver demo
                    </a>
                  )}

                  <a
                    href={project.repo}
                    className="featured-project__button featured-project__button--secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
