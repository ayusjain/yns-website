import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllEpisodes, getEpisodeBySlug } from "@/lib/episodes";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import GiscusComments from "@/components/GiscusComments";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEpisodes().map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};

  return {
    title: `Ep ${episode.episode}: ${episode.guest} — ${episode.title}`,
    description: episode.guestQuote,
    openGraph: {
      title: `The Story of: ${episode.title} | ${episode.guest}`,
      description: episode.guestQuote,
      images: episode.youtubeId
        ? [`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`]
        : [],
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Episode header */}
      <div className="mb-10">
        <p className="section-label mb-2">Episode {episode.episode} — {episode.guest}</p>
        <h1 className="font-heading font-black uppercase text-teal text-2xl md:text-4xl leading-tight mb-4">
          The Story of: {episode.title}
        </h1>
        <p className="font-body italic text-teal/60 text-xs uppercase tracking-wider">
          {episode.theme}
        </p>
      </div>

      {/* YouTube embed */}
      {episode.youtubeId && (
        <div className="mb-8">
          <YouTubeEmbed
            youtubeId={episode.youtubeId}
            title={`The Story of: ${episode.title} | ${episode.guest}`}
          />
        </div>
      )}

      {/* Spotify embed */}
      {episode.spotifyUrl && (
        <div className="mb-10">
          <SpotifyEmbed spotifyUrl={episode.spotifyUrl} />
        </div>
      )}

      {/* Guest quote */}
      {episode.guestQuote && (
        <blockquote className="border-l-4 border-amber pl-6 py-2 my-10 bg-cream-dark">
          <p className="font-body italic text-teal text-xl md:text-2xl leading-relaxed">
            &ldquo;{episode.guestQuote}&rdquo;
          </p>
          <footer className="mt-3 font-heading uppercase tracking-wider text-amber text-sm">
            — {episode.guest}
          </footer>
        </blockquote>
      )}

      {/* Key moments */}
      {episode.keyMoments?.length > 0 && (
        <div className="my-10 bg-teal text-cream p-8">
          <p className="section-label text-amber mb-4">Key Moments</p>
          <ul className="space-y-3">
            {episode.keyMoments.map((moment, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-amber font-heading font-black mt-0.5">✦</span>
                <span className="font-body text-cream/90">{moment}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show notes (MDX content) */}
      <div className="prose prose-teal max-w-none my-10
        prose-headings:font-heading prose-headings:uppercase prose-headings:text-teal
        prose-p:text-teal/80 prose-p:font-body
        prose-a:text-amber prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-amber prose-blockquote:font-body prose-blockquote:italic
        prose-strong:text-teal prose-code:text-amber prose-code:bg-cream-dark prose-code:px-1
        prose-li:text-teal/80">
        <MDXRemote source={episode.content} />
      </div>

      {/* Platform links */}
      <div className="border-t-2 border-cream-dark pt-8 mt-12 flex flex-wrap gap-4">
        {episode.youtubeId && (
          <a
            href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Watch on YouTube
          </a>
        )}
        {episode.spotifyUrl && (
          <a
            href={episode.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Listen on Spotify
          </a>
        )}
      </div>

      {/* Comments */}
      <GiscusComments slug={episode.slug} />
    </article>
  );
}
