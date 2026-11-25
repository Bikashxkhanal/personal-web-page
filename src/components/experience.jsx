import React from "react";
import { experiences } from "../data/siteData";



const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-title"
    className="relative overflow-hidden px-6 py-24 md:px-25"
  >
    <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[100px]" />

    <div className="relative mx-auto max-w-5xl">
      <header className="mb-14 md:mb-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-secondary)]">
          Career history
        </p>
        <h2
          id="experience-title"
          className="text-4xl font-black tracking-tight text-[var(--heading)] md:text-5xl"
        >
          Professional <span className="text-[var(--accent-secondary)]">Experience</span>
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-[var(--text)]">
          A timeline of the roles, teams, and work that have shaped my experience.
        </p>
      </header>

      <ol className="relative space-y-8 before:absolute before:bottom-6 before:left-[11px] before:top-3 before:w-px before:bg-gradient-to-b before:from-[var(--accent)] before:via-[var(--border-strong)] before:to-transparent md:space-y-10">
        {experiences.map((experience) => {
          const endDate = experience.current ? "Present" : experience.endDate;

          return (
            <li key={`${experience.organization}-${experience.role}`} className="relative pl-10 md:pl-14">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-7 z-10 h-6 w-6 rounded-full border-[5px] border-[var(--bg)] ${experience.current ? "bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" : "bg-[var(--accent-secondary)]"}`}
              />
              <article className="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] md:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-secondary)]">
                      {experience.role}
                    </p>
                    <h3 className="text-2xl font-bold leading-tight text-[var(--heading)] md:text-3xl">
                      {experience.organization}
                    </h3>
                  </div>
                  <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 font-mono text-[11px] text-[var(--text)]">
                    {experience.current && (
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                    )}
                    <time>{experience.startDate}</time>
                    <span aria-hidden="true" className="text-[var(--accent-secondary)]">—</span>
                    <time className={experience.current ? "text-[var(--accent)]" : ""}>{endDate}</time>
                  </div>
                </div>

                {experience.accomplishments?.length > 0 && (
                  <ul className="mt-6 space-y-3 border-t border-[var(--border)] pt-5">
                    {experience.accomplishments.map((item) => (
                      <li key={item} className="flex items-start gap-3 leading-relaxed text-[var(--text)]">
                        <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {experience.tools?.length > 0 && (
                  <div className="mt-6 border-t border-[var(--border)] pt-5">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text)]">
                      Tools used
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label="Tools used">
                      {experience.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-full border border-[var(--border)] bg-[var(--input-bg)] px-3 py-1.5 font-mono text-[11px] text-[var(--accent-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--heading)]"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

export default Experience;
