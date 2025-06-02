import { getPageMetadata } from "@/lib/breadcrumbs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { Metadata } from "next";

const page = getPageMetadata("/statistics/bonds-realtime");

export const metadata: Metadata = {
  title: page?.title || "CMKZ",
  description: page?.title || "CMKZ Frontend Application",
};

export default function BondsRealtime() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <PageTitle />
    </Container>
  );
}
