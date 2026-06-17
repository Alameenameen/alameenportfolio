import { Scissors, SunMedium, Sparkles, Wand2, LucideIcon } from "lucide-react";
import { editingTools } from "../data/siteData";
import Reveal from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  CapCut: Scissors,
  Lightroom: SunMedium,
  "Adobe Express": Sparkles,
  PhotoRoom: Wand2,
};

export default function EditingTools() {
  return (
    <section id="toolkit" className="px-5 sm:px-8 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="scene-eyebrow text-gold text-xs mb-3">In the Edit Suite</p>
          <h2 className="font-display text-4xl sm:text-5xl text-paper mb-12">Toolkit</h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {editingTools.map((tool, i) => {
            const Icon = ICONS[tool.name] || Sparkles;
            return (
              <Reveal key={tool.name} delay={i * 80}>
                <div className="h-full rounded-2xl border border-surface bg-surface/40 p-6 text-center hover:border-gold/50 transition-colors">
                  <Icon size={28} className="text-gold mx-auto mb-4" />
                  <p className="font-body font-semibold text-paper">{tool.name}</p>
                  <p className="font-mono text-xs text-mist mt-1">{tool.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
