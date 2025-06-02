import { Container } from "@layout/container";
import Link from "next/link";
import { menu } from "@/components/features/header/data";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getNestedTranslation } from "@/utils/translations";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.page_titles.statistics,
  };
}

export default async function Statistics() {
  const messages = await getMessages();
  const statistics = menu.find((item) => item.code === "statistics");

  return (
    <Container className="flex flex-col gap-4 py-10 px-4">
      <h1 className="text-2xl font-bold">
        {getNestedTranslation(messages, "page_titles.statistics")}
      </h1>
      <ul>
        {statistics?.children?.map((item) => (
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
