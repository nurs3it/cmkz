import NotFound from "@features/notfound";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.error_page.not_found.title,
    description: messages.error_page.not_found.description,
  };
}

export default function NotFoundPage() {
  return <NotFound />;
}
