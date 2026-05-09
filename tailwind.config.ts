import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber:  { DEFAULT: "#C8832A", light: "#D99A4A", dark: "#A86820" },
        teal:   { DEFAULT: "#1A5C52", light: "#2A7A6E", dark: "#0F3D36" },
        cream:  { DEFAULT: "#F5F0E8", dark: "#E8E0D0" },
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "sans-serif"],
        body:    ["var(--font-playfair)", "serif"],
        sans:    ["var(--font-barlow)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1A5C52",
            a: { color: "#C8832A", "&:hover": { color: "#A86820" } },
            h1: { fontFamily: "var(--font-barlow)", fontWeight: "900", textTransform: "uppercase" },
            h2: { fontFamily: "var(--font-barlow)", fontWeight: "900", textTransform: "uppercase" },
            h3: { fontFamily: "var(--font-barlow)", fontWeight: "700" },
            blockquote: { fontFamily: "var(--font-playfair)", fontStyle: "italic", borderLeftColor: "#C8832A" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
