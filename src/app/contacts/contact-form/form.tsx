import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Suspense } from "react";
import { ContactForm } from "@components/form/contact-form";
import { useTranslations } from "next-intl";

export function ContactValidationForm() {
  const t = useTranslations();

  return (
    <Card className="p-4 shadow-none rounded">
      <CardHeader className="py-4">
        <CardTitle className="text-xl">{t("form.header.title")}</CardTitle>
        <CardDescription>{t("form.header.description")}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
