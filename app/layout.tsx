import type { Metadata } from "next";
import { Barlow, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadataBase = new URL("https://www.yourneighborhoodstories.com");

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
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
    canonical: "https://www.yourneighborhoodstories.com",
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
    url: "https://www.yourneighborhoodstories.com",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.yourneighborhoodstories.com/Logo.jpeg",
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
    images: ["https://www.yourneighborhoodstories.com/Logo.jpeg"],
  },
};

const schemaPodcast = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Your Neighbourhood Stories",
  description:
    "Real People. Real Grit. Real Inspiration. Stories of builders, dreamers, and quiet revolutionaries living right next door.",
  url: "https://www.yourneighborhoodstories.com",
  publisher: {
    "@type": "Organization",
    name: "Your Neighbourhood Stories",
    logo: {
      "@type": "ImageObject",
      url: "https://www.yourneighborhoodstories.com/Logo.jpeg",
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
    <html lang="en" className={`${barlow.variable} ${playfair.variable}`}>
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
