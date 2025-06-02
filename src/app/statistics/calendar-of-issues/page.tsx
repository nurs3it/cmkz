import { getPageMetadata } from "@/lib/breadcrumbs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";

const messages = await getMessages();

const page = getPageMetadata("/statistics/calendar-of-issues");

export const metadata: Metadata = {
  title:
    getNestedTranslation(
      messages,
      page?.titleKey || "menu.statistics.calendar_issues",
    ) || "CMKZ",
  description:
    getNestedTranslation(
      messages,
      page?.titleKey || "menu.statistics.calendar_issues",
    ) || "CMKZ Frontend Application",
};

export default function CalendarOfIssues() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <PageTitle />
    </Container>
  );
}
