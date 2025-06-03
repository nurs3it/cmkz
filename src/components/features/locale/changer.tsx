import { changeLocale } from "@/api/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getNestedTranslation } from "@/utils/translations";
import { getMessages } from "next-intl/server";
import { getLocale } from "@/api/locale";

export default async function LocaleChanger() {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <Select value={locale} defaultValue={locale} onValueChange={changeLocale}>
      <SelectTrigger className="w-max h-max border-none shadow-none text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="kk">
          {getNestedTranslation(messages, "locale.kazakh")}
        </SelectItem>
        <SelectItem value="ru">
          {getNestedTranslation(messages, "locale.russian")}
        </SelectItem>
        <SelectItem value="en">
          {getNestedTranslation(messages, "locale.english")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
