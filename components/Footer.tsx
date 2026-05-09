import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-heading font-black uppercase text-xl tracking-widest mb-2">
            Your Neighbourhood Stories
          </p>
          <p className="font-body italic text-cream/70 text-sm leading-relaxed">
            Real People. Real Grit. Real Inspiration.
          </p>
        </div>

        {/* Listen */}
        <div>
          <p className="section-label text-amber mb-4">Listen &amp; Watch</p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://www.youtube.com/@YourNeighborhoodStories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://spotifycreators-web.app.link/e/niXeTNhy01b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/ynstories_podcast/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="section-label text-amber mb-4">Connect</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/contact" className="hover:text-amber transition-colors">
              Got a story? Tell us.
            </Link>
            <a href="mailto:info@yourneighborhoodstories.com" className="hover:text-amber transition-colors">
              info@yourneighborhoodstories.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-teal-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-cream/50 text-xs">
          <span>© {new Date().getFullYear()} Your Neighbourhood Stories. All rights reserved.</span>
          <span className="font-body italic mt-1 md:mt-0">Aur aaj ki story yaheen khatam hoti hai...</span>
        </div>
      </div>
    </footer>
  );
}
