"use client";

import { changeLocale } from "@/api/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";

export default function LocaleChanger() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <Select defaultValue={locale} onValueChange={changeLocale}>
      <SelectTrigger className="w-max h-max border-none shadow-none text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="kk">{t("locale.kazakh")}</SelectItem>
        <SelectItem value="ru">{t("locale.russian")}</SelectItem>
        <SelectItem value="en">{t("locale.english")}</SelectItem>
      </SelectContent>
    </Select>
  );
}
