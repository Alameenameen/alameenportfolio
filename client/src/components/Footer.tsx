import { profile } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-8 border-t border-surface">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-mist uppercase tracking-widest2">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Shot, edited &amp; coded with care in Kollam, Kerala.</p>
      </div>
    </footer>
  );
}
