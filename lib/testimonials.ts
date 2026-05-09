export interface Testimonial {
  name: string;
  comment: string;
  source: string; // e.g. "on Ep 3 — Micky"
}

// Replace these with real viewer comments from your YouTube videos
export const testimonials: Testimonial[] = [
  {
    name: "Rahul S.",
    comment:
      "This episode hit different. Micky's story about starting at 18 with zero guidance — that's something no one talks about. Ignorance really is bliss sometimes.",
    source: "on Ep 3 — Micky",
  },
  {
    name: "Priya M.",
    comment:
      "The snow walk moment gave me chills. 5KM uphill alone in a blizzard and he kept going — that's the kind of grit that doesn't make it to your LinkedIn profile.",
    source: "on Ep 5 — Govind",
  },
  {
    name: "Aakash T.",
    comment:
      "Finally a podcast that doesn't interview celebrities. Real people, real struggles, no highlight reels. Subscribed after the first 10 minutes.",
    source: "on YouTube",
  },
  {
    name: "Sunita R.",
    comment:
      "Ayush lets the guest breathe. He doesn't interrupt, doesn't steer. You forget there's a microphone. That's rare.",
    source: "on Ep 5 — Govind",
  },
  {
    name: "Dev K.",
    comment:
      "The line about the blueprint not fitting — not your body — I replayed it three times. This is why this podcast exists.",
    source: "on Ep 3 — Micky",
  },
  {
    name: "Meera J.",
    comment:
      "Your Neighbourhood Stories is what happens when someone actually listens. Not just waits for their turn to talk.",
    source: "on YouTube",
  },
];
