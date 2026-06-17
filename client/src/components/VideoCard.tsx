import { Play, ExternalLink } from "lucide-react";
import { VideoItem } from "../types";

const GRADIENTS: Record<string, string> = {
  "Wedding Films": "from-maroon via-ink to-surface",
  "Pre-Wedding & Anniversaries": "from-gold/30 via-maroon/60 to-ink",
  "Birthday & Celebrations": "from-gold/70 via-maroon/50 to-ink",
  "Festivals & Events": "from-maroon via-gold/30 to-ink",
  "Brand Promos & Ads": "from-surface via-ink to-ink",
  "Music Videos": "from-ink via-maroon to-gold/20",
  "Short Reels": "from-gold/40 via-ink to-ink",
  "Color Grading": "from-maroon to-gold/60",
};

export default function VideoCard({ video }: { video: VideoItem }) {
  const gradient = GRADIENTS[video.category] || "from-surface via-ink to-ink";

  return (
    <a
      href={video.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-surface border border-surface hover:border-gold/60 transition-colors"
    >
      <div className={`relative aspect-video bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-ink/50 group-hover:bg-gold group-hover:scale-110 transition-all">
            <Play size={22} className="text-paper group-hover:text-ink" fill="currentColor" />
          </span>
        </div>
        <span className="absolute bottom-3 right-3 font-mono text-xs text-paper/90 bg-ink/60 px-2 py-0.5 rounded">
          {video.duration}
        </span>
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest2 text-paper/90 bg-ink/60 px-2 py-1 rounded">
          {video.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-body font-semibold text-paper text-lg mb-1">{video.title}</h3>
        <p className="text-mist text-sm font-body mb-3">{video.description}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest2 text-gold">
          Watch on Instagram
          <ExternalLink size={12} />
        </span>
      </div>
    </a>
  );
}
