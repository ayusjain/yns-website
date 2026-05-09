"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-teal text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label text-amber mb-3">What Listeners Say</p>
        <h2 className="font-heading font-black uppercase text-cream text-3xl md:text-4xl leading-none mb-12">
          Real Reactions. <span className="text-amber">Real People.</span>
        </h2>

        {/* Featured quote */}
        <div className="max-w-3xl mb-10">
          <p className="font-body italic text-cream text-xl md:text-2xl leading-relaxed mb-6">
            &ldquo;{testimonials[active].comment}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-amber" />
            <span className="font-heading font-black uppercase text-sm tracking-wider text-amber">
              {testimonials[active].name}
            </span>
            <span className="text-cream/40 text-xs font-body">
              {testimonials[active].source}
            </span>
          </div>
        </div>

        {/* Dot nav */}
        <div className="flex gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? "bg-amber w-6" : "bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>

        {/* All quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-6 border transition-colors ${
                i === active
                  ? "border-amber bg-teal-dark"
                  : "border-cream/10 hover:border-cream/30 bg-transparent"
              }`}
            >
              <p className="font-body italic text-cream/80 text-sm leading-relaxed mb-4 line-clamp-3">
                &ldquo;{t.comment}&rdquo;
              </p>
              <p className="font-heading font-black uppercase text-amber text-xs tracking-wider">
                {t.name}
              </p>
              <p className="text-cream/40 text-xs mt-0.5">{t.source}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
