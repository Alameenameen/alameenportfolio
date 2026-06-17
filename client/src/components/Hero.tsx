import { Play, ArrowRight } from "lucide-react";
import { profile, categories } from "../data/siteData";

export default function Hero() {
  const tickerItems = [...categories, ...categories];

  return (
    <section
      id="top"
      className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 px-5 sm:px-8 overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #E3A33D, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        <p className="scene-eyebrow text-gold text-xs mb-6">
          Opening Shot — Freelance Videographer &amp; Editor, Kollam, Kerala
        </p>

        <h1 className="font-display text-[15vw] sm:text-[7rem] md:text-[8.5rem] leading-[0.9] text-paper tracking-wide">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-xl text-lg sm:text-xl text-mist font-body">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#showreel"
            className="inline-flex items-center gap-2 bg-gold text-ink font-body font-semibold px-6 py-3 rounded-full hover:bg-paper transition-colors"
          >
            <Play size={18} fill="currentColor" />
            Watch Showreel
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-mist/40 text-paper font-body font-semibold px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* marquee ticker of specialties */}
      <div className="mt-16 sm:mt-20 border-y border-surface py-4 overflow-hidden whitespace-nowrap">
        <div className="flex w-max marquee-track">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="font-mono text-sm sm:text-base text-mist uppercase tracking-widest2 px-6"
            >
              {item} <span className="text-gold">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
