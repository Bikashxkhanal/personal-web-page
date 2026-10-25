import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from "../constants";
import { contact, profile } from "../data/siteData";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
} from "./icons";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const HireMe = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const next = {};
    if (!data.from_name?.trim()) next.from_name = "Name required";
    if (!data.user_email?.trim()) next.user_email = "Email required";
    else if (!emailOk(data.user_email)) next.user_email = "Invalid email";
    if (!data.message?.trim()) next.message = "Message required";
    return next;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    // Honeypot — bots fill this; humans never see it
    if (fd.get("website")) return;

    const data = {
      from_name: fd.get("from_name"),
      user_email: fd.get("user_email"),
      subject: fd.get("subject") || "",
      message: fd.get("message"),
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(() => {
        setStatus({ type: "ok", message: contact.successMessage });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ type: "err", message: contact.errorMessage });
      })
      .finally(() => setIsSubmitting(false));
  };

  const links = [
    {
      icon: IconMail,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: IconGithub,
      label: "GitHub",
      href: profile.socials.github,
      external: true,
    },
    {
      icon: IconLinkedin,
      label: "LinkedIn",
      href: profile.socials.linkedin,
      external: true,
    },
    {
      icon: IconMapPin,
      label: profile.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--text)] md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--heading)] md:text-5xl">
            {contact.heading}
          </h2>
          <p className="mb-10 max-w-md text-[var(--text)]">{contact.blurb}</p>

          <ul className="space-y-5">
            {links.map((item) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <span className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-[var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-sm text-[var(--heading)]">
                    {item.label}
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-3 transition hover:opacity-80"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-3">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT — terminal-styled form */}
        <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card-bg)]">
          <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[10px] text-[var(--text)]">
              contact@netlab — sendmail
            </span>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-5 p-5 md:p-6" noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              aria-hidden
            />

            <Field
              label="$ name:"
              name="from_name"
              error={errors.from_name}
              required
            />
            <Field
              label="$ email:"
              name="user_email"
              type="email"
              error={errors.user_email}
              required
            />
            <Field label="$ subject:" name="subject" optional />
            <Field
              label="$ message:"
              name="message"
              as="textarea"
              rows={4}
              error={errors.message}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 border border-[var(--border-strong)] bg-[var(--accent)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--bg)] transition hover:opacity-90 disabled:opacity-40"
              style={{ boxShadow: "var(--glow)" }}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {status.message && (
              <p
                role="status"
                className={`font-mono text-xs ${
                  status.type === "ok"
                    ? "text-[var(--accent-secondary)]"
                    : "text-red-400"
                }`}
              >
                {status.type === "ok" ? "> " : "! "}
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  error,
  required,
  optional,
}) {
  const Tag = as;
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 flex items-center gap-2 font-mono text-xs text-[var(--accent)]"
      >
        {label}
        {optional && (
          <span className="text-[var(--text)] opacity-50">(optional)</span>
        )}
      </label>
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={rows}
        required={required}
        className="term-input w-full rounded px-3 py-2.5 text-sm"
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-err` : undefined}
      />
      {error && (
        <p id={`${name}-err`} className="mt-1 font-mono text-[10px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default HireMe;
