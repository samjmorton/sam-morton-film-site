# Samuel Morton

A minimalist React portfolio site showcasing filmmaking work across acting, writing, and directing.

## Purpose

A personal portfolio for Samuel Morton to showcase filmmaking achievements. The design follows the conventions of professional actor and filmmaker sites — clean, minimal, text-forward, generous whitespace, restrained color, media doing the talking.

## Sections

### Home
- **Headshot** — a single, prominent photograph
- **Reel** — a large embedded showreel video below the headshot
- **Resume** — a link to a downloadable/viewable PDF resume

### Acting (`/acting`)
- Thumbnail grid of video work
- Supports both YouTube/Vimeo embeds and self-hosted MP4 files per item
- Click a thumbnail to play the video (modal or inline)
- Each item: title, role/credit, year, short description

### Writing (`/writing`)
- Thumbnail grid of scripts
- Click to open the PDF in a modal viewer (read inline, no leaving the site)
- Each item: title, role/credit, year, short description

### Directing (`/directing`)
- Same treatment as Acting — thumbnail grid, mixed video sources
- Each item: title, role/credit, year, short description

### Footer (every page)
- Email link
- Instagram link
- IMDb link

## Design

- **Palette:** pure black & white with a single accent color
- **Typography:** serif headings (project titles, name) + sans-serif body
- **Layout:** wide margins, single column on mobile, grid on desktop
- **Motion:** minimal — subtle fades only, no distracting animation

## Technical Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Plain CSS modules
- **Routing:** React Router (URL per section)
- **PDF viewing:** lightweight library (react-pdf or browser-native)
- **Content:** single hand-edited `src/content.ts` file — arrays of typed work items
- **Backend:** none — pure static site
- **Deployment:** Azure Static Web Apps

## Content Model

A single `src/content.ts` file exports typed arrays:

```ts
type VideoItem = {
  title: string;
  role: string;
  year: number;
  description: string;
  thumbnail: string;      // local path or URL
  source:
    | { kind: "youtube"; id: string }
    | { kind: "vimeo"; id: string }
    | { kind: "mp4"; url: string };
};

type ScriptItem = {
  title: string;
  role: string;
  year: number;
  description: string;
  thumbnail: string;      // cover image
  pdfUrl: string;         // local path or URL
};
```

Content assets (headshot, thumbnails, MP4s, PDFs) live in `public/` and are referenced by relative path or public URL.

## Local Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production bundle in dist/
npm run preview   # serve the built dist/ locally
```

### Editing content

All work items, links, and personal info live in **`src/content.ts`**. Edit that file, save, and the dev server hot-reloads.

- **Videos** (Acting, Directing, Home reel): each item's `source` is one of:
  - `{ kind: "youtube", id: "abc123" }` — the YouTube video ID
  - `{ kind: "vimeo", id: "12345678" }` — the Vimeo video ID
  - `{ kind: "mp4", url: "/videos/my-clip.mp4" }` — file in `public/videos/`
- **Scripts** (Writing): `pdfUrl` points to a PDF in `public/scripts/` or a public URL.
- **Thumbnails**: any image in `public/thumbnails/` or a public URL. 16:9 for videos, 3:4 for scripts.
- **Headshot**: replace `public/headshot-placeholder.svg` with your real image and update `headshot` in `content.ts`.
- **Resume**: drop a PDF at `public/resume.pdf`.

### Content assets

Placeholder files ship with the project. Replace:
- `public/headshot-placeholder.svg` → your headshot (jpg/png/webp/svg)
- `public/resume.pdf` → your real resume
- `public/thumbnails/*` → thumbnails per work item
- `public/videos/*` → self-hosted MP4s (if any)
- `public/scripts/*` → PDFs of your scripts

## Deployment

Target: **Azure Static Web Apps**. `npm run build` produces `dist/` — a fully static bundle ready to deploy.
