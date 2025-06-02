import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { lazy, Suspense } from "react";

const ContactForm = lazy(() => import("@/components/form/contact-form"));

export function ContactValidationForm() {
  return (
    <Card className="p-4 shadow-none rounded">
      <CardHeader className="py-4">
        <CardTitle className="text-xl">Вам нужна помощь?</CardTitle>
        <CardDescription>
          Напишите нам, и мы ответим в ближайшее время.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
