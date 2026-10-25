import { education } from "../data/siteData";

const EducationCertifications = () => {
  return (
    <section id="education" className="relative px-6 py-20 md:px-12">
      <div className="mx-auto max-w-4xl">
        <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">
          // credentials
        </span>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--heading)] md:text-4xl">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-10 md:flex-row md:items-baseline"
            >
              <div className="max-w-xl">
                <h3 className="mb-1 text-xl font-semibold text-[var(--heading)]">
                  {edu.degree}
                </h3>
                <p className="text-[var(--text)]">{edu.institution}</p>
              </div>
              <div className="md:text-right">
                <span className="block font-mono text-sm text-[var(--accent)]">
                  {edu.duration}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text)]">
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
