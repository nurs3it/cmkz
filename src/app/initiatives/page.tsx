import { getInitiatives } from "@/api/initiatives";
import { InitiativesPanels } from "@/components/features/initiatives/panels";
import { PageTitle } from "@/components/features/pagetitle";
import { Container } from "@/components/layout/container";

export default async function InitiativesPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const page = (await searchParams).page || "1";
  const initiatives = await getInitiatives(page);

  return (
    <Container className="flex flex-col px-4">
      <PageTitle />
      <InitiativesPanels
        initiatives={initiatives.data}
        totalPages={initiatives.totalPages}
      />
    </Container>
  );
}
