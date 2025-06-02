import { getPageMetadata } from "@/lib/breadcrumbs";
import { menu } from "@features/header/data";
import { Container } from "@layout/container";
import { Metadata } from "next";
import Link from "next/link";

const page = getPageMetadata("/contacts");

export const metadata: Metadata = {
  title: page?.title || "CMKZ",
  description: page?.title || "CMKZ Frontend Application",
};

export default function Contacts() {
  const contacts = menu.find((item) => item.code === "contacts");
  return (
    <Container className="flex flex-col gap-4 py-10 px-4">
      <h1 className="text-2xl font-bold">Статистика</h1>
      <ul>
        {contacts?.children?.map((item) => (
          <li className="text-lg underline text-primary" key={item.code}>
            <Link href={item.href || ""}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
