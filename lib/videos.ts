export interface Video {
  id: string;         // YouTube video ID
  title: string;
  type: "episode" | "reel" | "short";
  guest?: string;
  episode?: number;
}

// Add all video IDs here — paste YouTube links and extract the ID after "v=" or from youtu.be/
// Full episodes
export const videos: Video[] = [
  {
    id: "AVUPH_5HBlA",
    title: "What If Your Dream Had Nothing to Do With Your Family's Legacy?",
    type: "episode",
    guest: "Govind",
    episode: 5,
  },
  {
    id: "_fqN1-RzZDA",
    title: "Girl From Bhopal, No Map, No Mentor — Just the Audacity to Begin.",
    type: "episode",
    guest: "Micky",
    episode: 3,
  },
  // ── Reels & Shorts ──────────────────────────────────────────────────────────
  // Add reel/short video IDs below. Example:
  // { id: "XXXXXXXXXXX", title: "Ignorance is bliss", type: "reel", guest: "Micky" },
];
