export type NestedMessages = {
  [key: string]: string | NestedMessages;
};

/**
 * Gets a nested value from an object using dot notation
 * @param obj The nested object to traverse
 * @param path The path to the value using dot notation (e.g. "menu.statistics.title")
 * @returns The value at the path or empty string if not found
 */
export function getNestedTranslation(
  obj: NestedMessages,
  path: string,
): string {
  return (
    (path.split(".").reduce<string | NestedMessages>((acc, part) => {
      if (acc && typeof acc === "object") {
        return acc[part];
      }
      return "";
    }, obj) as string) || ""
  );
}

export function getLocalizedValue(obj: object, key: string, locale: string) {
  if (!key) key = "name";
  return `${obj[`${key}_${locale}` as keyof typeof obj] || obj[key as keyof typeof obj] || ""}`;
}
