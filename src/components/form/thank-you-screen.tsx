import { useTranslations } from "next-intl";
import { Button } from "@ui/button";
import { CheckCircle2 } from "lucide-react";

interface ThankYouScreenProps {
  onReset: () => void;
}

export function ThankYouScreen({ onReset }: ThankYouScreenProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="rounded-full bg-primary/10 p-3">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("form.thank_you.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("form.thank_you.description")}
        </p>
      </div>
      <Button onClick={onReset} variant="outline">
        {t("form.thank_you.new_request")}
      </Button>
    </div>
  );
}
