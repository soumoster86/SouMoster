interface GameplayVideoProps {
  src: string;
  title: string;
  poster?: string;
}

export function GameplayVideo({ src, title, poster }: GameplayVideoProps) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <video
        className="aspect-video w-full bg-black object-contain"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={`${title} gameplay video`}
      >
        <source src={src} type="video/webm" />
        Your browser does not support video playback.
      </video>
    </div>
  );
}