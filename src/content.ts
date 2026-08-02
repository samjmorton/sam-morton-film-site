import type { SiteContent } from "./types";

export const content: SiteContent = {
  name: "Samuel Morton",
  tagline: "Actor · Writer · Director",

  headshot: "/headshot-placeholder.svg",

  reel: { kind: "youtube", id: "dQw4w9WgXcQ" },

  resumeUrl: "/resume.pdf",

  contact: {
    email: "sjmorton0@gmail.com",
    instagram: "https://instagram.com/",
    imdb: "https://imdb.com/",
  },

  acting: [
    {
      id: "acting-1",
      title: "Scene Title",
      role: "Lead",
      year: 2025,
      description: "A short logline describing the piece and the role.",
      thumbnail: "/thumbnails/placeholder-16x9.svg",
      source: { kind: "youtube", id: "dQw4w9WgXcQ" },
    },
    {
      id: "acting-2",
      title: "Another Scene",
      role: "Supporting",
      year: 2024,
      description: "Another placeholder scene description.",
      thumbnail: "/thumbnails/placeholder-16x9.svg",
      source: { kind: "vimeo", id: "76979871" },
    },
    {
      id: "acting-3",
      title: "Self Tape",
      role: "Lead",
      year: 2024,
      description: "A self-tape audition example.",
      thumbnail: "/thumbnails/placeholder-16x9.svg",
      source: { kind: "mp4", url: "/videos/placeholder.mp4" },
    },
  ],

  writing: {
    kind: "folder",
    id: "root",
    slug: "",
    name: "Writing",
    children: [
      {
        kind: "folder",
        id: "features",
        slug: "features",
        name: "Features",
        description: "Feature-length screenplays.",
        children: [
          {
            kind: "file",
            id: "feature-1",
            name: "Untitled Feature",
            role: "Writer",
            year: 2025,
            description: "A feature-length screenplay.",
            pdfUrl: "/scripts/placeholder.pdf",
          },
          {
            kind: "file",
            id: "feature-2",
            name: "Second Feature Draft",
            role: "Writer / Co-writer",
            year: 2024,
            pdfUrl: "/scripts/placeholder.pdf",
          },
        ],
      },
      {
        kind: "folder",
        id: "shorts",
        slug: "shorts",
        name: "Shorts",
        description: "Short film scripts.",
        children: [
          {
            kind: "file",
            id: "short-1",
            name: "Short Film Script",
            role: "Writer",
            year: 2024,
            description: "A short film script.",
            pdfUrl: "/scripts/placeholder.pdf",
          },
        ],
      },
      {
        kind: "folder",
        id: "pilots",
        slug: "pilots",
        name: "Pilots",
        description: "Television pilots.",
        children: [],
      },
      {
        kind: "file",
        id: "loose-1",
        name: "One-page pitch",
        role: "Writer",
        year: 2025,
        description: "Standalone document at the root.",
        pdfUrl: "/scripts/placeholder.pdf",
      },
    ],
  },

  directing: [
    {
      id: "directing-1",
      title: "Directed Short",
      role: "Director",
      year: 2024,
      description: "A short film I directed.",
      thumbnail: "/thumbnails/placeholder-16x9.svg",
      source: { kind: "youtube", id: "dQw4w9WgXcQ" },
    },
    {
      id: "directing-2",
      title: "Music Video",
      role: "Director",
      year: 2023,
      description: "A directed music video.",
      thumbnail: "/thumbnails/placeholder-16x9.svg",
      source: { kind: "vimeo", id: "76979871" },
    },
  ],
};
