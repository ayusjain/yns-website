"use client";

import { useState } from "react";
import Image from "next/image";
import { videos } from "@/lib/videos";

export default function VideoCarousel() {
  const [active, setActive] = useState(0);
  const current = videos[active];

  if (videos.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-3">Watch</p>
        <h2 className="font-heading font-black uppercase text-teal text-3xl md:text-4xl leading-none mb-10">
          All Episodes &amp; <span className="text-amber">Reels.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main player */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video bg-teal w-full">
              <iframe
                key={current.id}
                src={`https://www.youtube.com/embed/${current.id}?autoplay=0`}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4">
              {current.episode && (
                <span className="section-label text-xs mr-2">EP {current.episode}</span>
              )}
              <span className="font-heading uppercase text-xs tracking-wider text-teal/50">
                {current.type === "episode" ? "Full Episode" : current.type === "reel" ? "Reel" : "Short"}
              </span>
              <h3 className="font-heading font-black uppercase text-teal text-lg mt-1 leading-tight">
                {current.guest && `${current.guest} — `}{current.title}
              </h3>
              <a
                href={`https://www.youtube.com/watch?v=${current.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 font-heading uppercase text-sm tracking-wider text-amber hover:underline"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>

          {/* Thumbnail list */}
          <div className="lg:col-span-2 flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1">
            {videos.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActive(i)}
                className={`flex gap-3 items-start text-left p-2 transition-colors ${
                  i === active
                    ? "bg-teal text-cream"
                    : "bg-white hover:bg-cream border border-cream-dark text-teal"
                }`}
              >
                <div className="relative w-24 flex-shrink-0 aspect-video bg-teal/20 overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {i === active && (
                    <div className="absolute inset-0 bg-amber/30 flex items-center justify-center">
                      <span className="text-white text-lg">▶</span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  {v.episode && (
                    <span className={`text-xs font-heading uppercase tracking-wider ${i === active ? "text-amber" : "text-amber"}`}>
                      EP {v.episode}
                    </span>
                  )}
                  <p className={`text-xs font-heading font-black uppercase leading-tight mt-0.5 line-clamp-2 ${
                    i === active ? "text-cream" : "text-teal"
                  }`}>
                    {v.guest ? `${v.guest} — ` : ""}{v.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
