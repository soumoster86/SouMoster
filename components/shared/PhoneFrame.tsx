import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src?: string;
  alt: string;
  videoSrc?: string;
  poster?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

const sizeClasses = {
  sm: "w-[160px] sm:w-[180px]",
  md: "w-[200px] sm:w-[240px]",
  lg: "w-[220px] sm:w-[260px] lg:w-[280px]",
};

export function PhoneFrame({
  src,
  alt,
  videoSrc,
  poster,
  className,
  size = "md",
  priority = false,
}: PhoneFrameProps) {
  return (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      <div className="rounded-[2.5rem] border-[3px] border-border/80 bg-card p-2 shadow-2xl shadow-primary/25 ring-1 ring-white/10">
        <div
          className="pointer-events-none absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-card"
          aria-hidden="true"
        />
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-black">
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              className="h-full w-full object-cover object-top"
              aria-label={alt}
            >
              <source src={videoSrc} type="video/webm" />
            </video>
          ) : src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority={priority}
              sizes="(max-width: 640px) 220px, 280px"
            />
          ) : null}
        </div>
        <div
          className="mx-auto mt-2 h-1 w-1/3 rounded-full bg-muted/50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}