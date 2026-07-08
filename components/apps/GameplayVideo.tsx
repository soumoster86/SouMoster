"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GameplayVideoProps {
  src: string;
  title: string;
  poster?: string;
}

export function GameplayVideo({ src, title, poster }: GameplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="glass group relative overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        className="aspect-video w-full bg-black object-contain"
        controls={playing}
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={`${title} gameplay video`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src={src} type="video/webm" />
        Your browser does not support video playback.
      </video>

      <button
        type="button"
        onClick={togglePlayback}
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity",
          playing ? "pointer-events-none opacity-0" : "opacity-100",
        )}
        aria-label={`Play ${title} gameplay video`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/40 transition-transform group-hover:scale-110">
          <Play className="ml-1 h-7 w-7" fill="currentColor" />
        </span>
      </button>

      {playing && (
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute top-4 right-4 rounded-full bg-background/80 p-2 text-text opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
          aria-label="Pause gameplay video"
        >
          <Pause className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}