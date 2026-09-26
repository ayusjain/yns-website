import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourneighborhoodstories.com"),
  title: {
    default: "Your Neighbourhood Stories",
    template: "%s | Your Neighbourhood Stories",
  },
  description:
    "Real People. Real Grit. Real Inspiration. Stories of builders, dreamers, and quiet revolutionaries living right next door.",
  keywords: [
    "Your Neighbourhood Stories",
    "Indian podcast",
    "real stories",
    "inspiration",
    "entrepreneurship",
    "community",
  ],
  authors: [{ name: "Ayush" }],
  creator: "Ayush",
  alternates: {
    canonical: "https://yourneighborhoodstories.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Your Neighbourhood Stories",
    title: "Your Neighbourhood Stories",
    description:
      "Real People. Real Grit. Real Inspiration. Stories of builders, dreamers, and quiet revolutionaries living right next door.",
    url: "https://yourneighborhoodstories.com",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://yourneighborhoodstories.com/Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Your Neighbourhood Stories podcast cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Neighbourhood Stories",
    description:
      "Real People. Real Grit. Real Inspiration. Stories of builders, dreamers, and quiet revolutionaries living right next door.",
    creator: "@ynstories_pod",
    images: ["https://yourneighborhoodstories.com/Logo.jpeg"],
  },
};

const schemaPodcast = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Your Neighbourhood Stories",
  description:
    "Real People. Real Grit. Real Inspiration. Stories of builders, dreamers, and quiet revolutionaries living right next door.",
  url: "https://yourneighborhoodstories.com",
  sameAs: [
    "https://www.youtube.com/@YourNeighborhoodStories",
    "https://spotifycreators-web.app.link/e/niXeTNhy01b",
    "https://www.instagram.com/ynstories_podcast/",
    "https://www.linkedin.com/in/ynstories/",
    "https://x.com/ynstories_pod",
    "https://www.facebook.com/profile.php?id=61565944108038",
  ],
  publisher: {
    "@type": "Organization",
    name: "Your Neighbourhood Stories",
    logo: {
      "@type": "ImageObject",
      url: "https://yourneighborhoodstories.com/Logo.jpeg",
    },
  },
  creator: {
    "@type": "Person",
    name: "Ayush",
  },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPodcast) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
