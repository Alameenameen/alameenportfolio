/**
 * EDIT ME — this is the source of truth once you've connected MongoDB.
 * Run `npm run seed` after editing to push this into your database.
 * Keep the shape (field names) the same as you edit values.
 */

const videos = [
  {
    title: "Wedding Film Sample",
    category: "Wedding Films",
    description: "A full wedding day cut down into one cinematic story.",
    instagramUrl: "#",
    duration: "03:15",
    order: 1,
  },
  {
    title: "Anniversary Film Sample",
    category: "Pre-Wedding & Anniversaries",
    description: "Celebrating years together with a warm, narrative edit.",
    instagramUrl: "#",
    duration: "02:40",
    order: 2,
  },
  {
    title: "Birthday Celebration Reel",
    category: "Birthday & Celebrations",
    description: "High-energy highlights from a birthday party.",
    instagramUrl: "#",
    duration: "01:10",
    order: 3,
  },
  {
    title: "Festival Highlights Reel",
    category: "Festivals & Events",
    description: "Color, crowd and culture cut to rhythm.",
    instagramUrl: "#",
    duration: "01:45",
    order: 4,
  },
  {
    title: "Brand Promo Ad",
    category: "Brand Promos & Ads",
    description: "A short, punchy promo built to stop the scroll.",
    instagramUrl: "#",
    duration: "00:30",
    order: 5,
  },
  {
    title: "Music Video Edit",
    category: "Music Videos",
    description: "Performance footage synced tight to the beat.",
    instagramUrl: "#",
    duration: "03:02",
    order: 6,
  },
  {
    title: "Instagram Reel Edit",
    category: "Short Reels",
    description: "Fast-paced vertical edit built for the feed.",
    instagramUrl: "#",
    duration: "00:42",
    order: 7,
  },
  {
    title: "Color Grade Showcase",
    category: "Color Grading",
    description: "Before/after grading on the same raw footage.",
    instagramUrl: "#",
    duration: "01:00",
    order: 8,
  },
];

const projects = [
  {
    title: "ShopEase — MERN E-Commerce Platform",
    description:
      "Full-stack e-commerce app with user authentication, a product catalog, cart, and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    order: 1,
  },
  {
    title: "TaskFlow — Team Task Manager",
    description:
      "Kanban-style task board with drag-and-drop columns and live status updates for small teams.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    order: 2,
  },
  {
    title: "BlogSpace — Full-Stack Blogging Platform",
    description: "A blogging platform with a rich text editor, comments, and authenticated authoring.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
    order: 3,
  },
];

module.exports = { videos, projects };
