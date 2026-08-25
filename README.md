# Kavin Chaudhary — Portfolio

A personal portfolio and resume site built with React, TypeScript, Tailwind CSS, and Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

## Everything you need to edit lives in one place

Open **`src/config/site.ts`**. That's it for personal info:

- `links.email`, `links.github`, `links.linkedin`, `links.instagram` — replace the
  `YOUR_...` placeholders with your real URLs/email. Any link left as a placeholder
  is automatically hidden or shown as disabled in the UI instead of pointing nowhere.
- `githubUsername` — set this to your GitHub username and the "Code & Open Source"
  section will automatically pull in your live repositories via the GitHub API.
- `resumePath` — defaults to `/resume.pdf`. Drop your real resume at
  `public/resume.pdf` (replacing the placeholder file that's there now) and the
  "Download Resume" buttons will serve it immediately.
- `about`, `tagline`, `interests`, `education` — edit the copy directly.

## Other content files

- `src/data/projects.ts` — your project cards (name, description, tech, links, status).
- `src/data/skills.ts` — skills grouped by category.
- `src/data/journey.ts` — the timeline in the "My Journey" section.
- `src/data/cybersecurity.ts` — topics shown in the Cybersecurity section.
- `src/data/nav.ts` — the nav bar items (id must match a section's `id` attribute).

## Notable features

- Dark, cybersecurity-inspired visual theme with a "reticle" (corner-bracket)
  card style, CLI-style section labels, and a terminal easter egg
  (press **Ctrl/Cmd + K**, or use the terminal icon in the nav bar).
- Fully responsive, down to 320px-wide phones.
- Scroll-spy navigation, scroll-reveal animations, and a `prefers-reduced-motion`
  fallback that disables non-essential motion.
- Contact form with client-side validation. **No email backend is wired up yet** —
  see the comment in `src/sections/Contact.tsx` for where to plug in a service like
  Formspree, EmailJS, or your own API route.
- Live GitHub repo cards via the public GitHub REST API (no auth/token needed for
  public data, but rate limits are lower without one).

## Tech stack

React 19 · TypeScript · Tailwind CSS · Vite · lucide-react icons

## Project structure

```text
src/
├── components/   # Reusable UI (Navbar, Footer, cards, Terminal, etc.)
├── sections/     # One file per page section (Hero, About, Projects, ...)
├── data/         # Content: projects, skills, journey, cybersecurity topics, nav
├── config/       # site.ts — the single file for personal info & links
├── hooks/        # useScrollSpy, useReveal, useGitHubData
├── lib/          # Small utilities (placeholder detection)
├── App.tsx
└── main.tsx
```

## Deploying

This is a static site after `npm run build` (output in `dist/`). It deploys as-is to
Vercel, Netlify, Cloudflare Pages, or GitHub Pages — point the host at `dist/` with
build command `npm run build`.

## Before you publish — checklist


- [ ] Replace `public/resume.pdf` with your real resume
- [ ] Replace `public/og-image.png` with a real social preview image (optional)
- [ ] Wire up the contact form to a real backend (see `src/sections/Contact.tsx`)
- [ ] Update the `YOUR_GITHUB_URL` placeholders inside `src/data/projects.ts` per project
