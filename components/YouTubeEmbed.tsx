interface Props {
  youtubeId: string;
  title?: string;
}

export default function YouTubeEmbed({ youtubeId, title = "YouTube video" }: Props) {
  return (
    <div className="relative w-full aspect-video bg-teal">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
