import { Container } from "@layout/container";
import Link from "next/link";
import { menu } from "@/components/features/header/data";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: getNestedTranslation(messages, "page_titles.contacts"),
  };
}

export default async function Contacts() {
  const messages = await getMessages();
  const contacts = menu.find((item) => item.code === "contacts");

  return (
    <Container className="flex flex-col gap-4 py-10 px-4">
      <h1 className="text-2xl font-bold">
        {getNestedTranslation(messages, "page_titles.contacts")}
      </h1>
      <ul>
        {contacts?.children?.map((item) => (
          <li className="text-lg underline text-primary" key={item.code}>
            <Link href={item.href || ""}>
              {getNestedTranslation(messages, item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
