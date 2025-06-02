import { getPageMetadata } from "@/lib/breadcrumbs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { Metadata } from "next";
import { ContactValidationForm } from "./form";

const page = getPageMetadata("/contacts/contact-form");

export const metadata: Metadata = {
  title: page?.title || "CMKZ",
  description: page?.title || "CMKZ Frontend Application",
};

export default function ContactForm() {
  return (
    <Container className="flex flex-col gap-4 px-4">
      <PageTitle />
      <ContactValidationForm />
    </Container>
  );
}
