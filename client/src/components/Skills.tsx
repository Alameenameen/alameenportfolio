import { devSkills } from "../data/siteData";

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {devSkills.map((skill) => (
        <span
          key={skill}
          className="font-mono text-xs text-paper/90 bg-ink border border-mist/20 rounded px-3 py-1.5"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
