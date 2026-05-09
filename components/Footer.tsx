import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-teal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-heading font-black uppercase text-xl tracking-widest mb-2">
            Your Neighbourhood Stories
          </p>
          <p className="font-body italic text-cream/70 text-sm leading-relaxed mb-6">
            Real People. Real Grit. Real Inspiration.
          </p>
          <SocialIcons size={22} />
        </div>

        {/* Listen & Watch */}
        <div>
          <p className="section-label text-amber mb-4">Listen &amp; Watch</p>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { label: "YouTube", url: "https://www.youtube.com/@YourNeighborhoodStories" },
              { label: "Spotify", url: "https://spotifycreators-web.app.link/e/niXeTNhy01b" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                className="hover:text-amber transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Follow */}
        <div>
          <p className="section-label text-amber mb-4">Follow</p>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { label: "Instagram", url: "https://www.instagram.com/ynstories_podcast/" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/ynstories/" },
              { label: "X / Twitter", url: "https://x.com/ynstories_pod" },
              { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61565944108038" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                className="hover:text-amber transition-colors">
                {s.label}
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

      {/* Bottom bar */}
      <div className="border-t border-teal-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-cream/50 text-xs">
            © {new Date().getFullYear()} Your Neighbourhood Stories. All rights reserved.
          </span>
          <SocialIcons size={16} iconClassName="text-cream/30" />
          <span className="font-body italic text-cream/50 text-xs">
            Aur aaj ki story yaheen khatam hoti hai...
          </span>
        </div>
      </div>
    </footer>
  );
}
