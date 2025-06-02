import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const locale = (await headers()).get("x-locale") || "ru";

  return {
    locale,
    messages: (await import(`../../message/${locale}.json`)).default,
  };
});
