import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { ContactValidationForm } from "./form";

export default function ContactForm() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <PageTitle />
      <ContactValidationForm />
    </Container>
  );
}
