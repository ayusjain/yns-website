import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Your Neighbourhood Stories — who we are, why we do this, and what we believe.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="section-label mb-3">About the Show</p>
        <h1 className="font-heading font-black uppercase text-teal text-4xl md:text-6xl leading-none mb-6">
          Your Neighbourhood{" "}
          <span className="text-amber">Stories.</span>
        </h1>
        <p className="font-body italic text-teal/70 text-xl leading-relaxed max-w-2xl">
          Real People. Real Grit. Real Inspiration.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-teal text-cream p-10 mb-16">
        <p className="section-label text-amber mb-4">The Mission</p>
        <p className="font-body text-lg leading-relaxed text-cream/90 mb-4">
          We started Your Neighbourhood Stories because we got tired of the same kind of podcast guest.
          The celebrity. The millionaire. The polished LinkedIn success story.
        </p>
        <p className="font-body text-lg leading-relaxed text-cream/90 mb-4">
          The truth is, the most remarkable people are living right next door.
          The woman who built a fashion empire in Bhopal at 18 with no internet and no mentor.
          The man who washed dishes in Switzerland to stay close to his dream.
          The educator who picked up a drill during a lockdown and built something with her hands.
        </p>
        <p className="font-body italic text-xl text-amber leading-relaxed">
          &ldquo;No celebrities. No polished highlight reels. Just authentic, unfiltered conversations
          with real people.&rdquo;
        </p>
      </div>

      {/* Host */}
      <div className="mb-16">
        <p className="section-label mb-4">Your Host</p>
        <h2 className="font-heading font-black uppercase text-teal text-3xl mb-6">Ayush</h2>
        <p className="font-body text-teal/80 text-lg leading-relaxed mb-4">
          Hello, hello. I&apos;m Ayush — and I genuinely believe that every person sitting across
          from you has a story that could change the way you see the world. You just have to ask.
        </p>
        <p className="font-body text-teal/80 text-lg leading-relaxed mb-4">
          Your Neighbourhood Stories is my attempt to ask better questions — and then get out of the way.
          Long-form, unhurried conversations with people who built something, survived something,
          or chose something different.
        </p>
        <p className="font-body italic text-teal/60 text-lg">
          New episode every 2nd Thursday, 7pm IST.
        </p>
      </div>

      {/* What we don't do */}
      <div className="bg-cream-dark p-10 mb-16">
        <p className="section-label mb-4">What YNS Is Not</p>
        <ul className="space-y-3">
          {[
            "Celebrity guests",
            "Polished 'success story' framing",
            "Motivational poster language",
            "Hustle culture",
            "Excessive emojis",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 font-body text-teal/80 text-base">
              <span className="text-amber font-heading font-black text-lg">✕</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="font-body italic text-teal/60 text-lg mb-6">
          Got a story to share? We want to hear it.
        </p>
        <Link href="/contact" className="btn-primary">
          Tell Us Your Story
        </Link>
      </div>
    </div>
  );
}
