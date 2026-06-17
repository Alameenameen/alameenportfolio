import { useEffect, useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { getProjects } from "../lib/api";
import { DevProject } from "../types";
import Skills from "./Skills";
import Reveal from "./Reveal";

export default function DevProjects() {
  const [projects, setProjects] = useState<DevProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="devwork" className="px-5 sm:px-8 py-20 sm:py-28 bg-surface/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="scene-eyebrow text-gold text-xs mb-3 flex items-center gap-2">
            <Code2 size={14} /> Bonus Scene — Behind the Code
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-paper mb-4">Dev Work</h2>
          <p className="text-mist font-body max-w-2xl mb-10">
            MERN stack developer, 1 year of freelance experience. Some of the things I've built:
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-12">
            <Skills />
          </div>
        </Reveal>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-ink animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <div className="h-full flex flex-col rounded-2xl border border-mist/15 bg-ink overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-mist/15">
                    <span className="w-2.5 h-2.5 rounded-full bg-maroon" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                    <span className="w-2.5 h-2.5 rounded-full bg-mist/40" />
                    <span className="ml-3 font-mono text-xs text-mist truncate">
                      {project.title.split(" ")[0].toLowerCase()}.tsx
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-body font-semibold text-paper mb-2">{project.title}</h3>
                    <p className="text-mist text-sm font-body mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase tracking-wide text-gold/90 border border-gold/30 rounded px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs text-mist mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-gold transition-colors"
                      >
                        <Github size={14} /> Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 hover:text-gold transition-colors"
                        >
                          <ExternalLink size={14} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
