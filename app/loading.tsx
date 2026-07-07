import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <Skeleton className="mx-auto h-8 w-48" />
        <Skeleton className="mx-auto h-16 w-full max-w-lg" />
        <Skeleton className="mx-auto h-6 w-80" />
        <div className="flex justify-center gap-4 pt-4">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    </div>
  );
}