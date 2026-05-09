import Link from "next/link";
import { socials } from "@/lib/socials";

export default function Footer() {
  const listenLinks = socials.filter((s) => ["YouTube", "Spotify"].includes(s.name));
  const followLinks = socials.filter((s) => ["Instagram", "LinkedIn", "X", "Facebook"].includes(s.name));

  return (
    <footer className="bg-teal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-heading font-black uppercase text-xl tracking-widest mb-2">
            Your Neighbourhood Stories
          </p>
          <p className="font-body italic text-cream/70 text-sm leading-relaxed">
            Real People. Real Grit. Real Inspiration.
          </p>
        </div>

        {/* Listen & Watch */}
        <div>
          <p className="section-label text-amber mb-4">Listen &amp; Watch</p>
          <div className="flex flex-col gap-2 text-sm">
            {listenLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="hover:text-amber transition-colors">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Follow */}
        <div>
          <p className="section-label text-amber mb-4">Follow</p>
          <div className="flex flex-col gap-2 text-sm">
            {followLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="hover:text-amber transition-colors">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="section-label text-amber mb-4">Connect</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/contact" className="hover:text-amber transition-colors">
              Got a story? Tell us.
            </Link>
            <a href="mailto:info@yourneighborhoodstories.com"
              className="hover:text-amber transition-colors break-all">
              info@yourneighborhoodstories.com
            </a>
          </div>
        </div>
      </div>

      {/* Social icon row */}
      <div className="border-t border-teal-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-cream/50 text-xs">
            © {new Date().getFullYear()} Your Neighbourhood Stories. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                aria-label={s.name}
                className="text-cream/40 hover:text-amber transition-colors font-heading font-black text-xs tracking-wider">
                {s.icon}
              </a>
            ))}
          </div>
          <span className="font-body italic text-cream/50 text-xs">
            Aur aaj ki story yaheen khatam hoti hai...
          </span>
        </div>
      </div>
    </footer>
  );
}
