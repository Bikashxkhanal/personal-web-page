import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID } from "../constants";

const HireMe = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(
        () => {
          setStatus("Message sent successfully.");
          form.current.reset();
        },
        () => {
          setStatus("An error occurred. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="hireme" className="py-40 px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 block font-mono">Contact</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">Let's Connect</h2>
          <p className="text-gray-500 text-lg font-light max-w-lg">
            Open for collaborations and full-stack opportunities. 
            Reach out via the form below.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold ml-1">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-gray-800"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold ml-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-gray-800"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold ml-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all resize-none placeholder:text-gray-800"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-black text-white disabled:opacity-30"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <div className="w-12 h-px bg-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
            </button>
          </div>

          {status && (
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mt-8">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HireMe;
