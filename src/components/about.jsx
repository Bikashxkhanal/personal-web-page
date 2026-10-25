import { about } from "../data/siteData";

const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">
          {about.eyebrow}
        </span>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--heading)] md:text-5xl">
          {about.heading}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--text)] md:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
