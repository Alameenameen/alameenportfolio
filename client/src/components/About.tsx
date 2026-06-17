import { MapPin, Mail, Phone } from "lucide-react";
import { profile, timeline } from "../data/siteData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="scene-eyebrow text-gold text-xs mb-3">Scene 01 — The Story</p>
          <h2 className="font-display text-4xl sm:text-5xl text-paper mb-12">About</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <p className="text-lg text-paper/90 leading-relaxed font-body">{profile.bio}</p>

            <div className="mt-8 space-y-3 font-mono text-sm text-mist">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                {profile.location}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold" />
                {profile.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="scene-eyebrow text-mist text-xs mb-6">Credits</p>
            <ol className="relative border-l border-surface ml-2">
              {timeline.map((item, i) => (
                <li key={i} className="ml-6 pb-8 last:pb-0">
                  <span className="absolute -left-[5px] w-[9px] h-[9px] rounded-full bg-gold mt-1.5" />
                  <p className="font-mono text-xs text-gold uppercase tracking-widest2 mb-1">
                    {item.year}
                  </p>
                  <p className="text-paper/90 font-body">{item.label}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
