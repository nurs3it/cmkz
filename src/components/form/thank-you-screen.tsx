import { Button } from "@ui/button";
import { CheckCircle2 } from "lucide-react";

interface ThankYouScreenProps {
  onReset: () => void;
}

export function ThankYouScreen({ onReset }: ThankYouScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="rounded-full bg-primary/10 p-3">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Спасибо за обращение!
        </h2>
        <p className="text-muted-foreground">
          Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
        </p>
      </div>
      <Button onClick={onReset} variant="outline">
        Отправить еще одно сообщение
      </Button>
    </div>
  );
}
