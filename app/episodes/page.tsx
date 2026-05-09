import type { Metadata } from "next";
import { getAllEpisodes } from "@/lib/episodes";
import EpisodeCard from "@/components/EpisodeCard";

export const metadata: Metadata = {
  title: "Episodes",
  description: "Every episode of Your Neighbourhood Stories — real conversations with real people.",
};

export default function EpisodesPage() {
  const episodes = getAllEpisodes();
  const published = episodes.filter((e) => e.status === "published");
  const upcoming = episodes.filter((e) => e.status === "upcoming");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="section-label mb-3">All Episodes</p>
        <h1 className="font-heading font-black uppercase text-teal text-4xl md:text-5xl leading-none">
          Every Story,{" "}
          <span className="text-amber">Right Here.</span>
        </h1>
        <p className="font-body italic text-teal/60 mt-4 text-lg max-w-xl">
          Long-form conversations with builders, dreamers, and quiet revolutionaries.
          New episode every 2nd Thursday.
        </p>
      </div>

      {/* Published episodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {published.map((ep) => (
          <EpisodeCard key={ep.slug} episode={ep} />
        ))}
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <>
          <div className="border-t-2 border-cream-dark pt-12 mb-8">
            <p className="section-label">Coming Soon</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((ep) => (
              <EpisodeCard key={ep.slug} episode={ep} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
