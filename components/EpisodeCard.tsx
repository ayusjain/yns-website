import Link from "next/link";
import Image from "next/image";
import { Episode, getYouTubeThumbnail } from "@/lib/episodes";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  const thumbnail = episode.youtubeId
    ? getYouTubeThumbnail(episode.youtubeId)
    : null;

  return (
    <Link href={`/episodes/${episode.slug}`} className="group block card overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-teal overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`Episode ${episode.episode} — ${episode.guest}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading font-black text-cream/30 text-4xl">
              EP{episode.episode}
            </span>
          </div>
        )}

        {/* Episode number badge */}
        <div className="absolute top-3 left-3 bg-amber text-cream font-heading font-black text-xs uppercase tracking-wider px-2 py-1">
          EP {episode.episode}
        </div>

        {/* Upcoming badge */}
        {episode.status === "upcoming" && (
          <div className="absolute inset-0 bg-teal/70 flex items-center justify-center">
            <span className="font-heading font-black uppercase tracking-widest text-cream text-lg">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="section-label mb-2">{episode.guest}</p>
        <h3 className="font-heading font-black text-teal text-base leading-tight mb-3 group-hover:text-amber transition-colors">
          The Story of: {episode.title}
        </h3>
        <p className="text-teal/60 text-xs font-heading uppercase tracking-wider">
          {episode.theme}
        </p>
      </div>
    </Link>
  );
}
