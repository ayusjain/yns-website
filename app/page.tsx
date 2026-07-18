import type { Metadata } from "next";
import Link from "next/link";
import { getAllEpisodes } from "@/lib/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import KPIStats from "@/components/KPIStats";
import VideoCarousel from "@/components/VideoCarousel";
import ContactForm from "@/components/ContactForm";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Testimonials from "@/components/Testimonials";
import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Your Neighbourhood Stories — Indian podcast for real people, real grit, and real inspiration",
  description:
    "Your Neighbourhood Stories shares authentic conversations with builders, dreamers, and quiet revolutionaries living right next door.",
  keywords: [
    "Indian podcast",
    "real stories",
    "inspirational stories",
    "community podcast",
    "YNS",
  ],
  openGraph: {
    title: "Your Neighbourhood Stories — Real people, real grit, real inspiration",
    description:
      "Your Neighbourhood Stories shares authentic conversations with builders, dreamers, and quiet revolutionaries living right next door.",
    url: "https://www.yourneighborhoodstories.com",
    type: "website",
    images: [
      {
        url: "https://www.yourneighborhoodstories.com/Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Your Neighbourhood Stories",
      },
    ],
  },
  alternates: {
    canonical: "https://www.yourneighborhoodstories.com",
  },
};

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
            <SocialIcons size={24} className="mt-8" iconClassName="text-teal/40 hover:text-teal" />
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

      {/* The Experience Of */}
      <section className="py-16 md:py-24 bg-cream-dark border-t border-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="section-label mb-3">New Format</p>
              <h2 className="font-heading font-black uppercase text-teal text-3xl md:text-4xl leading-tight mb-5">
                The Experience Of
              </h2>
              <p className="font-body italic text-teal/70 text-lg leading-relaxed mb-6">
                A shorter, sharper format built around one real experience. One moment. No extra noise.
              </p>
              <p className="text-teal/70 text-base leading-relaxed mb-8">
                Not an overarching story. Just a moment in time. This is where we hold that single experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/watch?v=ThFiPOfj9n8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Watch the Moment
                </a>
                <a
                  href="https://open.spotify.com/episode/171juyA6N19QLHtsrDwFRK?si=5657698486994c82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>

            <div className="bg-white border border-cream-dark p-3 shadow-[0_20px_60px_-25px_rgba(26,92,82,0.25)]">
              <div className="relative aspect-video bg-teal overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/ThFiPOfj9n8/maxresdefault.jpg"
                  alt="The Experience Of — latest episode"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p className="section-label text-amber mb-2">Latest Episode</p>
                  <h3 className="font-heading font-black uppercase text-cream text-xl md:text-2xl leading-tight">
                    A Locked Room, A Blackout, And No Explanation.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch + Got a Story? (replaced All Episodes) */}
      <VideoCarousel />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-3">Got a Story?</p>
            <h2 className="font-heading font-black uppercase text-teal text-3xl md:text-4xl leading-none mb-6">
              We&apos;re Listening.
            </h2>
            <p className="font-body italic text-teal/70 text-lg max-w-xl leading-relaxed">
              If you&apos;ve built something, survived something, or chose something different — your story might belong here. Tell us about yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="section-label mb-3">Email Us Directly</p>
                <a
                  href="mailto:info@yourneighborhoodstories.com"
                  className="font-body text-teal hover:text-amber transition-colors break-all"
                >
                  info@yourneighborhoodstories.com
                </a>
              </div>

              <div>
                <p className="section-label mb-3">Follow Along</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/ynstories_podcast/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-wider text-amber hover:text-teal transition-colors"
                  >
                    <FaInstagram size={16} className="text-amber" />
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@YourNeighborhoodStories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-wider text-amber hover:text-teal transition-colors"
                  >
                    <FaYoutube size={16} className="text-amber" />
                    YouTube
                  </a>
                </div>
              </div>

              <div className="bg-teal text-cream p-6">
                <p className="font-body italic text-cream/80 text-sm leading-relaxed">
                  &ldquo;Every person has a story worth telling. We just listen.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
