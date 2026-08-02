export type VideoSource =
  | { kind: "youtube"; id: string }
  | { kind: "vimeo"; id: string }
  | { kind: "mp4"; url: string };

export type VideoItem = {
  id: string;
  title: string;
  role: string;
  year: number;
  description: string;
  thumbnail: string;
  source: VideoSource;
};

export type ScriptItem = {
  id: string;
  title: string;
  role: string;
  year: number;
  description: string;
  thumbnail: string;
  pdfUrl: string;
};

export type ScriptFile = {
  kind: "file";
  id: string;
  name: string;
  role: string;
  year: number;
  description?: string;
  pdfUrl: string;
};

export type ScriptFolder = {
  kind: "folder";
  id: string;
  slug: string;
  name: string;
  description?: string;
  children: DriveNode[];
};

export type DriveNode = ScriptFile | ScriptFolder;

export type SiteContent = {
  name: string;
  tagline: string;
  headshot: string;
  reel: VideoSource;
  resumeUrl: string;
  contact: {
    email: string;
    instagram: string;
    imdb: string;
  };
  acting: VideoItem[];
  writing: ScriptFolder;
  directing: VideoItem[];
};
