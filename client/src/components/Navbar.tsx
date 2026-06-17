import { useState } from "react";
import { Menu, X, Film } from "lucide-react";
import { profile } from "../data/siteData";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#showreel", label: "Showreel" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#devwork", label: "Dev Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-[3px] left-0 right-0 z-40 backdrop-blur-md bg-ink/80 border-b border-surface">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-2xl tracking-wide text-paper"
          onClick={() => setOpen(false)}
        >
          <Film size={20} className="text-gold" strokeWidth={2} />
          {profile.name.toUpperCase()}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest2 text-mist">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 font-mono text-sm uppercase tracking-widest2 text-mist bg-ink border-b border-surface">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
