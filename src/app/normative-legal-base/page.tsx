import { Container } from "@layout/container";
import Link from "next/link";
import { getMenu } from "@/components/features/header/data";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.page_titles.legal,
  };
}

export default async function NormativeLegalBase() {
  const messages = await getMessages();
  const legal = (await getMenu()).find(
    (item) => item.code === "normative-legal-base",
  );

  return (
    <Container className="flex flex-col gap-4 py-10 px-4">
      <h1 className="text-2xl font-bold">
        {getNestedTranslation(messages, "page_titles.legal")}
      </h1>
      <ul>
        {legal?.children?.map((item) => (
          <li className="text-lg underline text-primary" key={item.code}>
            <Link href={item.href || ""}>
              {item.label ||
                getNestedTranslation(messages, item.labelKey || "")}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
