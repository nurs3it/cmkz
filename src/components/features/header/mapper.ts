import { MenuItem } from "@/types/menu";
import { LegalType } from "@/types/legal";
import { getLocalizedValue } from "@/utils/translations";
import { getLocale } from "@/api/locale";

export const mapLegalTypes = async (
  legalTypes: LegalType[],
): Promise<MenuItem[]> => {
  const locale = await getLocale();
  return await Promise.all(
    legalTypes.map(async (type) => {
      return {
        code: type.code,
        labelKey: "",
        label: getLocalizedValue(type, "name", locale),
        href: `/normative-legal-base/${type.code}`,
      };
    }),
  );
};
