import { VideoItem, DevProject } from "../types";

/**
 * ============================================================
 *  SITE CONTENT — edit everything in this file to personalize
 * ============================================================
 * Anything marked "EDIT ME" is a placeholder. Nothing else in
 * the codebase needs to change for basic content updates.
 */

export const profile = {
  name: "Al Ameen",
  tagline: "Videographer & Editor | MERN Stack Developer",
  location: "Kollam, Kerala, India",
  email: "alluallu6002@gmail.com",
  phone: "+91 90616 38482",
  bio: "I'm Al Ameen, a freelance videographer and editor based in Kollam, Kerala. I shoot and cut films for weddings, anniversaries, birthdays, festivals and brand promotions — turning a day's footage into a story people replay. Outside the edit suite, I build web applications with the MERN stack, so I bring the same attention to detail to code as I do to a final colour grade.",
};

// EDIT ME — replace "#" with your real profile links once ready.
export const links = {
  instagram: "#", // e.g. https://instagram.com/your_handle
  linkedin: "#", // e.g. https://linkedin.com/in/your-name
  github: "#", // e.g. https://github.com/your-username
  resume: "/resume.pdf", // drop your resume PDF into client/public/resume.pdf
};

export const timeline = [
  { year: "2021", label: "Completed SSLC (10th Standard)" },
  { year: "2022 – 2024", label: "Higher Secondary Education" },
  { year: "2025", label: "Software Development Course (MERN Stack) — Brototype" },
  { year: "2025 – Present", label: "Freelance MERN Stack Developer (1+ year experience)" },
  { year: "Ongoing", label: "Freelance Videographer & Editor — weddings, events, brand films & more" },
];

export const categories = [
  "Wedding Films",
  "Pre-Wedding & Anniversaries",
  "Birthday & Celebrations",
  "Festivals & Events",
  "Brand Promos & Ads",
  "Music Videos",
  "Short Reels",
  "Color Grading",
];

export const editingTools = [
  { name: "CapCut", note: "Mobile & desktop editing" },
  { name: "Lightroom", note: "Color & photo grading" },
  { name: "Adobe Express", note: "Quick graphics & posts" },
  { name: "PhotoRoom", note: "Thumbnails & cutouts" },
];

export const devSkills = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB & Mongoose",
  "JavaScript (ES6+)",
  "REST API Design",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Git & GitHub",
  "JWT Authentication",
  "Postman",
];

/**
 * EDIT ME — Showreel.
 * This is the placeholder video list shown when no backend/API is
 * connected (see src/lib/api.ts). Replace instagramUrl with the real
 * link to each Instagram reel / YouTube video once you have it, and
 * feel free to add, remove, or re-order entries.
 *
 * If you set up the backend, edit server/data/seedData.js instead
 * (and run the seed script) — that becomes the live source of truth.
 */
export const fallbackVideos: VideoItem[] = [
  {
    id: "v1",
    title: "Wedding Film Sample",
    category: "Wedding Films",
    description: "A full wedding day cut down into one cinematic story.",
    instagramUrl: "#",
    duration: "03:15",
  },
  {
    id: "v2",
    title: "Anniversary Film Sample",
    category: "Pre-Wedding & Anniversaries",
    description: "Celebrating years together with a warm, narrative edit.",
    instagramUrl: "#",
    duration: "02:40",
  },
  {
    id: "v3",
    title: "Birthday Celebration Reel",
    category: "Birthday & Celebrations",
    description: "High-energy highlights from a birthday party.",
    instagramUrl: "#",
    duration: "01:10",
  },
  {
    id: "v4",
    title: "Festival Highlights Reel",
    category: "Festivals & Events",
    description: "Color, crowd and culture cut to rhythm.",
    instagramUrl: "#",
    duration: "01:45",
  },
  {
    id: "v5",
    title: "Brand Promo Ad",
    category: "Brand Promos & Ads",
    description: "A short, punchy promo built to stop the scroll.",
    instagramUrl: "#",
    duration: "00:30",
  },
  {
    id: "v6",
    title: "Music Video Edit",
    category: "Music Videos",
    description: "Performance footage synced tight to the beat.",
    instagramUrl: "#",
    duration: "03:02",
  },
  {
    id: "v7",
    title: "Instagram Reel Edit",
    category: "Short Reels",
    description: "Fast-paced vertical edit built for the feed.",
    instagramUrl: "#",
    duration: "00:42",
  },
  {
    id: "v8",
    title: "Color Grade Showcase",
    category: "Color Grading",
    description: "Before/after grading on the same raw footage.",
    instagramUrl: "#",
    duration: "01:00",
  },
];

/**
 * EDIT ME — Dev projects.
 * These are placeholder MERN projects so the section isn't empty.
 * Swap in your real projects, GitHub links, and live demo links
 * (or set up the backend and edit server/data/seedData.js instead).
 */
export const fallbackProjects: DevProject[] = [
  {
    id: "p1",
    title: "ShopEase — MERN E-Commerce Platform",
    description:
      "Full-stack e-commerce app with user authentication, a product catalog, cart, and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "p2",
    title: "TaskFlow — Team Task Manager",
    description:
      "Kanban-style task board with drag-and-drop columns and live status updates for small teams.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "p3",
    title: "BlogSpace — Full-Stack Blogging Platform",
    description:
      "A blogging platform with a rich text editor, comments, and authenticated authoring.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
