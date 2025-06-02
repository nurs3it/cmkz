import { getPageMetadata } from "@/lib/breadcrumbs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";
import { ContactValidationForm } from "./form";

const PATHNAME = "/contacts/contact-form";
const messages = await getMessages();
const page = getPageMetadata(PATHNAME);

export const metadata: Metadata = {
  title:
    getNestedTranslation(messages, page?.titleKey || "menu.contacts.form") ||
    "CMKZ",
  description:
    getNestedTranslation(messages, page?.titleKey || "menu.contacts.form") ||
    "CMKZ Frontend Application",
};

export default function ContactForm() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <PageTitle pathname={PATHNAME} />
      <ContactValidationForm />
    </Container>
  );
}
