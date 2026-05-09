"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Got a Story?" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-teal text-cream sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading font-black uppercase text-lg tracking-widest hover:text-amber transition-colors">
          YNS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-heading font-black uppercase text-sm tracking-wider hover:text-amber transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@YourNeighborhoodStories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Watch Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-teal-light px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading font-black uppercase text-sm tracking-wider hover:text-amber transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
