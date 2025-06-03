import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/layout/base";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getNestedTranslation } from "@/utils/translations";
import { getPageMetadata } from "@/lib/breadcrumbs";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const page = getPageMetadata(pathname);
  return {
    title: getNestedTranslation(messages, page?.titleKey || "page_titles.home"),
    description: getNestedTranslation(
      messages,
      page?.titleKey || "page_titles.home",
    ),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-background min-h-screen`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <BaseLayout>{children}</BaseLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
