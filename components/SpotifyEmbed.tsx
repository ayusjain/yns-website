interface Props {
  spotifyUrl: string;
}

export default function SpotifyEmbed({ spotifyUrl }: Props) {
  // Convert share URL to embed URL
  // e.g. https://open.spotify.com/episode/XXX → https://open.spotify.com/embed/episode/XXX
  const embedUrl = spotifyUrl.replace("open.spotify.com/", "open.spotify.com/embed/");

  return (
    <div className="w-full">
      <iframe
        src={embedUrl}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-none"
        title="Spotify episode player"
      />
    </div>
  );
}
