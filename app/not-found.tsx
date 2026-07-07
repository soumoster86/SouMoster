import { Home, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-bold text-text">Page Not Found</h1>
      <p className="mt-2 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/">
          <Button>
            <Home className="h-4 w-4" />
            Go Home
          </Button>
        </Link>
        <Link href="/apps">
          <Button variant="outline">
            <Search className="h-4 w-4" />
            Browse Apps
          </Button>
        </Link>
      </div>
    </div>
  );
}