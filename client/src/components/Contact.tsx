import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, FileText, Send } from "lucide-react";
import { profile, links } from "../data/siteData";
import { postContact } from "../lib/api";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const result = await postContact(form);
    setFeedback(result.message);
    if (result.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 sm:px-8 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="scene-eyebrow text-gold text-xs mb-3">Final Cut</p>
          <h2 className="font-display text-4xl sm:text-5xl text-paper mb-12">
            Let's Work Together
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <p className="text-paper/90 font-body text-lg mb-8">
              Have a wedding, event, or project in mind? I'm available for freelance bookings
              across Kollam and beyond — reach out directly or send a message.
            </p>

            <div className="space-y-3 font-mono text-sm text-mist mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold" /> {profile.phone}
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" /> {profile.location}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-mist/30 text-mist hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-mist/30 text-mist hover:border-gold hover:text-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-mist/30 text-mist hover:border-gold hover:text-gold transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-mist/30 text-mist hover:border-gold hover:text-gold transition-colors"
              >
                <FileText size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-surface border border-mist/20 rounded-lg px-4 py-3 text-paper placeholder:text-mist/60 font-body focus:border-gold outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-surface border border-mist/20 rounded-lg px-4 py-3 text-paper placeholder:text-mist/60 font-body focus:border-gold outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your event or project"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface border border-mist/20 rounded-lg px-4 py-3 text-paper placeholder:text-mist/60 font-body focus:border-gold outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 bg-gold text-ink font-body font-semibold px-6 py-3 rounded-full hover:bg-paper transition-colors disabled:opacity-60"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {feedback && (
                <p
                  className={`text-sm font-body ${
                    status === "success" ? "text-gold" : "text-mist"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
