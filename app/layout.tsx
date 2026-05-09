import type { Metadata } from "next";
import { Barlow, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  keywords: ["podcast", "stories", "inspiration", "India", "entrepreneurship", "YNS"],
  authors: [{ name: "Ayush" }],
  openGraph: {
    siteName: "Your Neighbourhood Stories",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
