export interface Video {
  id: string;         // YouTube video ID
  title: string;
  type: "episode" | "reel" | "short";
  guest?: string;
  episode?: number;
}

// Latest episode first
export const videos: Video[] = [
  {
    id: "HQKjwNZ25cE",
    title: "The Ocean Told Him It Was Time to Walk Away.",
    type: "episode",
    guest: "Arjun Warrier",
    episode: 8,
  },
  {
    id: "pR5Slg5jcnk",
    title: "Dentist. MBA. Consultant. And Always One Step Ahead.",
    type: "episode",
    guest: "Dr. Vikram",
    episode: 7,
  },
  {
    id: "snpXGHNDg2Q",
    title: "CA. Law. Counselling. Pandemic. And Finally — Herself.",
    type: "episode",
    guest: "Aparna",
    episode: 6,
  },
  {
    id: "AVUPH_5HBlA",
    title: "He Left a Family Legacy Behind. What He Found Was Worth It.",
    type: "episode",
    guest: "Govind",
    episode: 5,
  },
  {
    id: "_fqN1-RzZDA",
    title: "Girl From Bhopal, No Map, No Mentor — Just the Audacity to Begin.",
    type: "episode",
    guest: "Micky",
    episode: 4,
  },
  {
    id: "SZJA_PIZ450",
    title: "A Mom Who Refused to Wait.",
    type: "episode",
    guest: "Swati",
    episode: 3,
  },
  {
    id: "FRV_Kudqg7A",
    title: "One Interview, One Promise and a Dream Fulfilled.",
    type: "episode",
    guest: "Abhishek",
    episode: 2,
  },
  {
    id: "ouniFjj-HVM",
    title: "Proving That Grief Doesn't Define Your Destiny.",
    type: "episode",
    guest: "Dr. Mayanka",
    episode: 1,
  },
  {
    id: "mITCt8XZNp0",
    title: "The Stories We Never Hear.",
    type: "episode",
    episode: 0,
  },
];
