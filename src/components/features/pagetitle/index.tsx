import { getPageMetadata } from "@/lib/breadcrumbs";
import { getMessages } from "next-intl/server";
import {
  getNestedTranslation,
  type NestedMessages,
} from "@/utils/translations";
import { headers } from "next/headers";

interface PageTitleProps {
  pathname?: string;
}

export async function PageTitle({ pathname = "" }: PageTitleProps) {
  const headersList = await headers();
  const pathFromHeader = headersList.get("x-pathname") || "";
  const messages = (await getMessages()) as NestedMessages;
  const page = getPageMetadata(
    pathname || pathFromHeader || window.location.pathname,
  );

  const title = page?.titleKey
    ? getNestedTranslation(messages, page.titleKey)
    : "";

  return <h1 className="text-2xl font-bold text-primary py-4">{title}</h1>;
}
