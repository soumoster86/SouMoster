import { Home, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("common.notFound");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-bold text-text">{t("title")}</h1>
      <p className="mt-2 max-w-md text-muted">{t("message")}</p>
      <div className="mt-8 flex gap-3">
        <Button href="/">
          <Home className="h-4 w-4" />
          {t("goHome")}
        </Button>
        <Button href="/apps" variant="outline">
          <Search className="h-4 w-4" />
          {t("browseApps")}
        </Button>
      </div>
    </div>
  );
}
