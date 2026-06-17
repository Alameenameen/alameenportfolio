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
  instagram: "https://www.instagram.com/edi_x___/?__pwa=1", // e.g. https://instagram.com/your_handle
  linkedin: "www.linkedin.com/in/al-ameen-a19767316", // e.g. https://linkedin.com/in/your-name
  github: "https://github.com/Alameenameen/", // e.g. https://github.com/your-username
  resume: "/resume.pdf", // drop your resume PDF into client/public/resume.pdf
};

export const timeline = [
  { year: "2021", label: "Completed SSLC (10th Standard) , M.K.L.M.H.S.SCHOOL" },
  { year: "2022 – 2024", label: "Higher Secondary Education ,  M.K.L.M.H.S.SCHOOL" },
  { year: "2025", label: "Software Development Course (MERN Stack) — Brototype-Ernakulam" },
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
  "Sql",
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
    instagramUrl: "https://www.instagram.com/reel/DXY9oPXE74C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "45sec",
  },
  {
    id: "v2",
    title: "Anniversary Film Sample",
    category: "Pre-Wedding & Anniversaries",
    description: "Celebrating years together with a warm, narrative edit.",
    instagramUrl: "https://www.instagram.com/reel/DYK09fzTQKb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "40sec",
  },
  {
    id: "v3",
    title: "Birthday Celebration Reel",
    category: "Birthday & Celebrations",
    description: "High-energy highlights from a birthday party.",
    instagramUrl: "https://www.instagram.com/reel/DV6DTYpD2O9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "01:00min",
  },
  {
    id: "v4",
    title: "Festival Highlights Reel",
    category: "Festivals & Events",
    description: "Color, crowd and culture cut to rhythm.",
    instagramUrl: "https://www.instagram.com/reel/DTxYnWCiLIw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "45sec",
  },
  {
    id: "v5",
    title: "Brand Promo Ad",
    category: "Brand Promos & Ads",
    description: "A short, punchy promo built to stop the scroll.",
    instagramUrl: "https://www.instagram.com/reel/DKpujHBuBbT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "1:00",
  },
  {
    id: "v6",
    title: "Music Video Edit",
    category: "Music Videos",
    description: "Performance footage synced tight to the beat.",
    instagramUrl: "https://www.instagram.com/reel/DZcBzC7TXRG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "1:00",
  },
  {
    id: "v7",
    title: "Instagram Reel Edit",
    category: "Short Reels",
    description: "Fast-paced vertical edit built for the feed.",
    instagramUrl: "https://www.instagram.com/reel/DZrkQeeT903/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "00:30",
  },
  {
    id: "v8",
    title: "Color Grade Showcase",
    category: "Color Grading",
    description: "Before/after grading on the same raw footage.",
    instagramUrl: "https://www.instagram.com/reel/DYEjIiCzfta/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "30sec",
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
    title: "PepperpotRestaurant — MERN food ordering Platform",
    description:
      "Full-stack food ordering app with user authentication, a product catalog, cart, and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/Alameenameen/",
    liveUrl: "https://www.pepperpotrestaurant.com/",
  },
  {
    id: "p2",
    title: "Personal portFolio Website — MERN Stack",
    description:
      "Personal portfolio website showcasing my work, skills, and contact information.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Alameenameen/",
    liveUrl: "https://alameenportfolio.vercel.app/",
  },
  // {
  //   id: "p3",
  //   title: "BlogSpace — Full-Stack Blogging Platform",
  //   description:
  //     "A blogging platform with a rich text editor, comments, and authenticated authoring.",
  //   tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  // },
];
