import fs from "fs";
import path from "path";
import matter from "gray-matter";

const episodesDir = path.join(process.cwd(), "content/episodes");

export interface Episode {
  episode: number;
  slug: string;
  title: string;
  guest: string;
  theme: string;
  youtubeId: string;
  spotifyUrl: string;
  publishDate: string;
  status: "published" | "upcoming";
  guestQuote: string;
  keyMoments: string[];
  content: string;
}

export function getAllEpisodes(): Episode[] {
  const files = fs.readdirSync(episodesDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(episodesDir, file), "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content } as Episode;
    })
    .sort((a, b) => b.episode - a.episode);
}

export function getEpisodeBySlug(slug: string): Episode | null {
  const files = fs.readdirSync(episodesDir).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(episodesDir, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) return { ...data, content } as Episode;
  }
  return null;
}

export function getYouTubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}
