import "./Projects.css";
import FeaturedProject from "./FeaturedProject";
import chapuzonImg from "../../assets/images/chapuzon-preview.png";
import smartBudgetImg from "../../assets/images/smart-budget-preview.png";
import kovaPayImg from "../../assets/images/kova-pay-preview.png";
import noirtechImg from "../../assets/images/noirtech-preview.png";
import booklistImg from "../../assets/images/booklist-vue-preview.png";

const featuredProject = {
  title: "Chapuzón",
  description:
    "Juego web educativo para aprender a prepararse ante lluvias intensas, inundaciones y aluviones en Chile. Cuatro minijuegos que acompañan a Tadeo y su familia antes, durante y después de un temporal. Proyecto en equipo desarrollado con apoyo de IA generativa de código.",
  stack: ["HTML", "CSS", "JavaScript", "Canvas", "IA generativa"],
  highlights: [
    "4 minijuegos con temporizador y puntaje",
    "Insignias, ranking y retroalimentación",
    "Accesibilidad con ARIA y teclado",
    "Trabajo colaborativo en equipo",
  ],
  image: chapuzonImg,
  background: "#2c5867",
  demo: "https://marycolinam.github.io/chapuzon/",
  repo: "https://github.com/marycolinam/chapuzon",
};

const projects = [
  {
    title: "SmartBudget",
    focus: "Diseño",
    description:
      "Landing page responsiva para una app de finanzas personales, maquetada sin frameworks con arquitectura SASS 7-1 y metodología BEM.",
    stack: ["HTML", "SASS", "BEM", "CSS Grid", "Flexbox"],
    highlights: [
      "Arquitectura SASS 7-1",
      "Responsive desktop, tablet y mobile",
      "Componentes con BEM",
    ],
    image: smartBudgetImg,
    demo: "https://marycolinam.github.io/smart-budget-ABP/",
    repo: "https://github.com/marycolinam/smart-budget-ABP",
  },
  {
    title: "Kova Pay",
    focus: "Código",
    description:
      "Billetera digital con login, depósitos, envío de dinero a contactos e historial de movimientos con filtros, todo persistido en el navegador.",
    stack: ["JavaScript", "jQuery", "Bootstrap", "localStorage"],
    highlights: [
      "Manipulación del DOM y eventos",
      "Validación de formularios",
      "Persistencia con localStorage",
    ],
    image: kovaPayImg,
    demo: "https://marycolinam.github.io/kova-pay/login.html",
    repo: "https://github.com/marycolinam/kova-pay",
  },
  {
    title: "Noirtech SPA",
    focus: "Arquitectura",
    description:
      "Aplicación SPA con una estética técnica y una estructura frontend completa, enfocada en navegación, componentes y organización del código.",
    stack: ["Vue", "Vue Router", "JavaScript", "CSS"],
    highlights: [
      "Arquitectura SPA",
      "Componentes reutilizables",
      "Navegación con Vue Router",
    ],
    image: noirtechImg,
    demo: "",
    repo: "https://github.com/marycolinam/noirtech-spa",
  },
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
          Cada proyecto representa una etapa de mi camino como desarrolladora
          frontend, desde la lógica y la arquitectura hasta el detalle visual
          y el trabajo en equipo.
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
