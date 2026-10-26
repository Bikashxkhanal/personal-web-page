import { projects } from "../data/siteData";
import { IconGithub, ProjectIcon } from "./icons";

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto mb-14 max-w-7xl">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--heading)] md:text-6xl">
          Projects
        </h2>
        <p className="mt-3 font-mono text-sm text-[var(--accent)]">
          // labs & builds
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card relative flex flex-col rounded-lg p-6 md:p-7"
          >
            <div className="project-icon mb-4 inline-flex h-10 w-10 items-center justify-center text-[var(--heading)] transition-transform duration-300">
              <ProjectIcon name={project.icon} className="h-6 w-6" />
            </div>

            <h3 className="mb-2 text-xl font-bold tracking-tight text-[var(--heading)]">
              {project.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text)]">
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-[var(--heading)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <ProjectIcon name="globe" className="h-4 w-4" />
                </a>
              )}

             { project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-[var(--heading)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                onClick={(e) => {
                  if (project.github === "#") e.preventPreventDefault();
                }}
              >
                <IconGithub className="h-4 w-4" />
              </a>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
