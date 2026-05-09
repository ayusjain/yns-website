import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const platforms = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@YourNeighborhoodStories",
    Icon: FaYoutube,
    color: "hover:text-red-500",
  },
  {
    name: "Spotify",
    url: "https://spotifycreators-web.app.link/e/niXeTNhy01b",
    Icon: FaSpotify,
    color: "hover:text-green-400",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ynstories_podcast/",
    Icon: FaInstagram,
    color: "hover:text-pink-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ynstories/",
    Icon: FaLinkedinIn,
    color: "hover:text-blue-400",
  },
  {
    name: "X",
    url: "https://x.com/ynstories_pod",
    Icon: FaXTwitter,
    color: "hover:text-white",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61565944108038",
    Icon: FaFacebook,
    color: "hover:text-blue-500",
  },
];

interface Props {
  className?: string;
  iconClassName?: string;
  size?: number;
}

export default function SocialIcons({ className, iconClassName, size = 20 }: Props) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {platforms.map(({ name, url, Icon, color }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={cn(
            "text-cream/50 transition-colors duration-200",
            color,
            iconClassName
          )}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
