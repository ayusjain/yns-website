import Link from "next/link";
import { getAllEpisodes } from "@/lib/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import KPIStats from "@/components/KPIStats";
import NewsletterForm from "@/components/NewsletterForm";
import VideoCarousel from "@/components/VideoCarousel";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  const episodes = getAllEpisodes();
  const latest = episodes.find((e) => e.status === "published");
  const recent = episodes.filter((e) => e.status === "published").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-32 border-b-4 border-teal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Your Neighbourhood Stories</p>
            <h1 className="font-heading font-black uppercase text-teal text-4xl md:text-6xl lg:text-7xl leading-none mb-6">
              Real People.{" "}
              <span className="text-amber">Real Grit.</span>{" "}
              Real Inspiration.
            </h1>
            <p className="font-body italic text-teal/70 text-lg md:text-xl mb-10 max-w-xl">
              Stories of builders, dreamers, and quiet revolutionaries living right next door.
              No celebrities. No polished highlight reels. Just real, unfiltered conversations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@YourNeighborhoodStories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Watch on YouTube
              </a>
              <a
                href="https://spotifycreators-web.app.link/e/niXeTNhy01b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Stats */}
      <KPIStats />

      {/* Latest Episode */}
      {latest && (
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="section-label mb-4">Latest Episode</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-heading font-black uppercase text-teal text-2xl md:text-3xl leading-tight mb-4">
                  The Story of: {latest.title}
                </h2>
                <p className="font-body italic text-teal/70 text-lg mb-2">
                  &ldquo;{latest.guestQuote}&rdquo;
                </p>
                <p className="text-teal/50 text-sm font-heading uppercase tracking-wider mb-6">
                  — {latest.guest}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={`https://www.youtube.com/watch?v=${latest.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Watch Episode
                  </a>
                  <Link href={`/episodes/${latest.slug}`} className="btn-outline">
                    Show Notes
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <EpisodeCard episode={latest} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Episodes */}
      {recent.length > 1 && (
        <section className="py-16 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <p className="section-label">All Episodes</p>
              <Link href="/episodes" className="font-heading uppercase text-sm tracking-wider text-teal hover:text-amber transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((ep) => (
                <EpisodeCard key={ep.slug} episode={ep} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Testimonials */}
      <Testimonials />

      {/* Mission strip */}
      <section className="bg-amber py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black uppercase text-cream text-2xl md:text-4xl leading-tight max-w-3xl mx-auto">
            Every person has a story worth telling. We just listen.
          </h2>
          <p className="font-body italic text-cream/80 mt-4 text-lg">
            New episode every 2nd Thursday — YouTube, Spotify, and here.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <NewsletterForm />
      </section>
    </>
  );
}
