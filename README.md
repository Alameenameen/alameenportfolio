# Al Ameen — Portfolio (MERN Stack)

A full-stack portfolio built with **React + TypeScript** (frontend) and **Node.js + Express + MongoDB** (backend), showcasing videography/editing work first, with MERN development work as a supporting section.

The frontend never breaks even without the backend running — if it can't reach an API, it quietly falls back to placeholder data in `client/src/data/siteData.ts`. This means you can deploy the site to Vercel today and wire up the database whenever you're ready.

## Project structure

```
al-ameen-portfolio/
├── client/        React + TypeScript + Vite + Tailwind (deploy to Vercel)
│   ├── public/
│   └── src/
│       ├── components/   All UI sections (Hero, About, VideoGallery, Contact, etc.)
│       ├── data/         siteData.ts — EDIT THIS for your content
│       ├── lib/           api.ts — talks to the backend, falls back gracefully
│       └── types/
└── server/        Node + Express + MongoDB (deploy to Render/Railway)
    ├── models/     Mongoose schemas (Video, Project, ContactMessage)
    ├── routes/     /api/videos, /api/projects, /api/contact
    └── data/       seedData.js — EDIT THIS, then run `npm run seed`
```

## 1. Run it locally

**Frontend:**
```bash
cd client
npm install
npm run dev
```
Opens at `http://localhost:5173`. It will work immediately using placeholder content — no backend required.

**Backend (optional, for the real database + working contact form):**
```bash
cd server
npm install
cp .env.example .env  # then fill in MONGODB_URI
npm run seed            # loads placeholder videos/projects into MongoDB
npm run dev
```
Runs at `http://localhost:5000`. To make the frontend use it, set `VITE_API_BASE_URL=http://localhost:5000` in `client/.env`.

## 2. Personalize your content

You don't need to touch any component code for basic updates.

- **Profile, bio, links, categories, editing tools, skills, placeholder videos/projects** → edit `client/src/data/siteData.ts`. Every placeholder is marked `EDIT ME`.
- **Instagram reel links** → in `siteData.ts`, replace each video's `instagramUrl: "#"` with the real link to that reel/post once you're ready to share it.
- **Social links** → update the `links` object (`instagram`, `linkedin`, `github`) in `siteData.ts`.
- **Resume** → drop your PDF at `client/public/resume.pdf` (the Contact section already links to `/resume.pdf`).
- **Real dev projects** → replace the 3 placeholder projects in `siteData.ts` with your actual GitHub/live links once you have a couple of MERN  projects ready to show.

If you connect MongoDB (step 3 below), edit `server/data/seedData.js` instead and run `npm run seed` — that becomes the live source of truth shown to visitors via the API.

## 3. Connect MongoDB (optional but recommended)

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and allow network access from anywhere (0.0.0.0/0) for simplicity.
3. Copy your connection string into `server/.env` as `MONGODB_URI`.
4. Run `npm run seed` inside `server/` to load your videos and projects.

## 4. Deploy

**Frontend → Vercel**
1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo.
3. Set **Root Directory** to `client` (important, since this is a monorepo).
4. Framework preset: Vite (auto-detected). Build command and output directory are also auto-detected.
5. If you have a backend deployed, add an environment variable `VITE_API_BASE_URL` set to your backend's URL. Otherwise leave it unset — the site will use placeholder data.

**Backend → Render (or Railway)**
1. Create a new Web Service, pointing at this repo with **Root Directory** set to `server`.
2. Build command: `npm install`. Start command: `npm start`.
3. Add environment variables: `MONGODB_URI`, `FRONTEND_URL` (your Vercel domain, e.g. `https://your-site.vercel.app`), and `PORT` (Render sets this automatically).
4. Once deployed, copy the backend URL into Vercel's `VITE_API_BASE_URL` env var and redeploy the frontend.

## Tech stack

React 18, TypeScript, Vite, Tailwind CSS, lucide-react — Node.js, Express, MongoDB, Mongoose, CORS.

## Design notes

Dark, cinematic theme built around the idea of a "showreel" — a scroll progress bar that behaves like a video scrubber, sections labeled as "scenes," and timecode-style metadata on video cards. The Dev Work section is intentionally styled like a code editor (terminal-style window chrome) to visually separate it from the video portfolio above it.
