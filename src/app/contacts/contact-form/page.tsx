import { getPageMetadata } from "@/lib/breadcrumbs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { Metadata } from "next";
import { ContactValidationForm } from "./form";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";

const messages = await getMessages();

const page = getPageMetadata("/contacts/contact-form");

export const metadata: Metadata = {
  title:
    getNestedTranslation(
      messages,
      page?.titleKey || "menu.contacts.contact_form",
    ) || "CMKZ",
  description:
    getNestedTranslation(
      messages,
      page?.titleKey || "menu.contacts.contact_form",
    ) || "CMKZ Frontend Application",
};

export default function ContactForm() {
  return (
    <Container className="flex flex-col gap-4 px-4">
      <PageTitle />
      <ContactValidationForm />
    </Container>
  );
}
