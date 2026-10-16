import Image from "next/image";
import { cn, videoMimeType } from "@/lib/utils";

interface PhoneFrameProps {
  src?: string;
  alt: string;
  videoSrc?: string;
  poster?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  orientation?: "portrait" | "landscape";
  priority?: boolean;
}

const sizeClasses = {
  sm: "w-[160px] sm:w-[180px]",
  md: "w-[200px] sm:w-[240px]",
  lg: "w-[220px] sm:w-[260px] lg:w-[280px]",
};

const landscapeSizeClasses = {
  sm: "w-[280px] sm:w-[360px]",
  md: "w-full max-w-[640px]",
  lg: "w-full max-w-[760px]",
};

export function PhoneFrame({
  src,
  alt,
  videoSrc,
  poster,
  className,
  size = "md",
  orientation = "portrait",
  priority = false,
}: PhoneFrameProps) {
  const landscape = orientation === "landscape";

  return (
    <div
      className={cn(
        "relative mx-auto",
        landscape ? landscapeSizeClasses[size] : sizeClasses[size],
        className,
      )}
    >
      <div
        className={cn(
          "border-[3px] border-border/80 bg-card shadow-2xl shadow-primary/25 ring-1 ring-white/10",
          landscape ? "rounded-[2rem] p-2 sm:p-3" : "rounded-[2.5rem] p-2",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute z-10 rounded-full bg-card",
            landscape
              ? "top-1/2 left-4 h-14 w-3 -translate-y-1/2 sm:left-5"
              : "top-4 left-1/2 h-5 w-20 -translate-x-1/2",
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "relative overflow-hidden bg-black",
            landscape
              ? "aspect-video rounded-[1.5rem]"
              : "aspect-[9/19.5] rounded-[2rem]",
          )}
        >
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
              <source src={videoSrc} type={videoMimeType(videoSrc)} />
            </video>
          ) : src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority={priority}
              sizes={
                landscape
                  ? "(max-width: 768px) 100vw, 760px"
                  : "(max-width: 640px) 220px, 280px"
              }
            />
          ) : null}
        </div>
        {!landscape && (
          <div
            className="mx-auto mt-2 h-1 w-1/3 rounded-full bg-muted/50"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}