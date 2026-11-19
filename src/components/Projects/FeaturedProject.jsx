import "./FeaturedProject.css";

function FeaturedProject({ project }) {
  if (!project) {
    return null;
  }

  return (
    <article className="featured-project">
      <div className="featured-project__preview">
        <img
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
          className="featured-project__image"
          style={project.background ? { background: project.background } : undefined}
        />

        {!project.background && <div className="featured-project__overlay"></div>}

        <span className="featured-project__badge">Proyecto destacado</span>
      </div>

      <div className="featured-project__content">
        <p className="featured-project__eyebrow">Proyecto principal</p>

        <h3 className="featured-project__title">{project.title}</h3>

        <p className="featured-project__description">{project.description}</p>

        <div className="featured-project__section">
          <p className="featured-project__label">Stack</p>
          <div className="featured-project__tags">
            {project.stack.map((item) => (
              <span className="featured-project__tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="featured-project__section">
          <p className="featured-project__label">Puntos clave</p>
          <ul className="featured-project__highlights">
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
  );
}

export default FeaturedProject;
