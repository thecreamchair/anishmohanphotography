# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Frontend (root directory)
```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Build for production (also copies dist/index.html → dist/404.html for GH Pages SPA routing)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages (gh-pages -d dist)
```

### Sanity Studio (anish-website-studio/)
```bash
cd anish-website-studio
npm run dev       # Start Sanity Studio locally
npm run deploy    # Deploy studio to Sanity's hosted URL
```

## Architecture

This is a wildlife photography portfolio site for Anish Mohan, deployed to GitHub Pages at `thecreamchair.github.io/anishmohanphotography/`.

**Tech stack:** React 19 + Vite, Tailwind CSS v4, Framer Motion, React Router v7, Sanity CMS.

### Routing

`src/App.jsx` defines four routes wrapped in a shared `Layout` (Navbar + Footer):
- `/` → `Home` (single-page scroll with all sections)
- `/projects` → `ProjectsPage`
- `/blog` → `BlogPage`
- `/portfolio` → `PortfolioPage`

The `vite.config.js` sets `base: '/anishmohanphotography/'` only during production builds. The `postbuild` script copies `dist/index.html` to `dist/404.html` to support client-side routing on GitHub Pages.

### Sanity CMS integration

`src/client.js` exports two things used throughout:
- `client` — the Sanity client (projectId: `3fbrgky7`, dataset: `production`)
- `urlFor(source)` — image URL builder helper

All data is fetched directly in components using GROQ queries via `client.fetch()`. There is no global state or caching layer.

**Schema types** (defined in `anish-website-studio/schemaTypes/`):
- `portfolio` — individual photo entries (title, image with hotspot, caption)
- `selectedWork` — singleton document; holds exactly 6 references to `portfolio` items for the home page gallery
- `project` — photography projects (title, slug, coverImage, shortDescription, date, location, gallery array)
- `blog` (type `blogPost`) — blog posts with Portable Text content and optional gallery
- `homePage` — singleton for home page content
- `blockContent` — shared Portable Text block schema

### Home page structure

`src/pages/Home.jsx` composes these sections in order: `Hero → Gallery → About → Portfolio → Blog → Contact`

The `Gallery` component fetches `selectedWork` (a singleton document) and dereferences its 6 `portfolio` image references using `*[_type == "selectedWork"][0]{..., images[]->}`.

### Styling

Tailwind CSS v4 with a custom theme defined in `src/index.css` using the `@theme` directive. The palette is a Cream & Olive nature theme:
- `nature-950` (#faf9f7) — background (cream white)
- `nature-50` (#2c2b29) — primary text (dark umber)
- `nature-400` / `nature-300` — secondary text shades
- `brand-600` / `brand-500` — deep and pale olive accents

Typography: `font-sans` = Montserrat, `font-serif` = Source Serif 4. Headings use serif by default.

### Content management workflow

To update displayed content, use the Sanity Studio (`anish-website-studio/`). The home page gallery requires exactly 6 `portfolio` items selected in the `selectedWork` singleton — the schema enforces this with validation.
