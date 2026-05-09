import { MetadataRoute } from "next";
import { getAllEpisodes } from "@/lib/episodes";

const BASE_URL = "https://www.yourneighborhoodstories.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const episodes = getAllEpisodes().filter((e) => e.status === "published");

  const episodeRoutes = episodes.map((ep) => ({
    url: `${BASE_URL}/episodes/${ep.slug}`,
    lastModified: new Date(ep.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/episodes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...episodeRoutes,
  ];
}
