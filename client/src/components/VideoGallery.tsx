import { useEffect, useState } from "react";
import { categories } from "../data/siteData";
import { getVideos } from "../lib/api";
import { VideoItem } from "../types";
import VideoCard from "./VideoCard";
import Reveal from "./Reveal";

export default function VideoGallery() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    getVideos().then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, []);

  const filtered = active === "All" ? videos : videos.filter((v) => v.category === active);

  return (
    <section id="showreel" className="px-5 sm:px-8 py-20 sm:py-28 bg-surface/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="scene-eyebrow text-gold text-xs mb-3">Scene 02 — The Showreel</p>
          <h2 className="font-display text-4xl sm:text-5xl text-paper mb-8">
            Video Work
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-xs uppercase tracking-widest2 px-4 py-2 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-gold text-ink border-gold"
                    : "border-mist/30 text-mist hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-2xl bg-surface animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <Reveal key={video.id} delay={i * 60}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-mist font-body">No videos in this category yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
