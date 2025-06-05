import { PageTitle } from "@/components/features/pagetitle";
import { Container } from "@/components/layout/container";
import { getContactInformation } from "@/api/contact";
import { ContactInformationCard } from "./card";

export default async function ContactInformation() {
  const contactInformation = await getContactInformation();

  return (
    <Container className="flex flex-col px-4">
      <PageTitle />
      <div className="flex flex-col gap-10 mt-4">
        {contactInformation.map((information) => (
          <ContactInformationCard
            key={information.title}
            contactInformation={information}
          />
        ))}
      </div>
    </Container>
  );
}
