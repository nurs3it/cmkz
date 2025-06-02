import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";

export default function MacroIndicators() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <PageTitle />
    </Container>
  );
}
