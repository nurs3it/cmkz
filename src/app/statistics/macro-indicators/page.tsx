import { getPageMetadata } from "@/lib/breadcrumbs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";

const messages = await getMessages();

const page = getPageMetadata("/statistics/macro-indicators");

export const metadata: Metadata = {
  title:
    getNestedTranslation(
      messages,
      page?.titleKey || "menu.statistics.macro_indicators",
    ) || "CMKZ",
  description:
    getNestedTranslation(
      messages,
      page?.titleKey || "menu.statistics.macro_indicators",
    ) || "CMKZ Frontend Application",
};

export default function MacroIndicators() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <PageTitle />
    </Container>
  );
}
