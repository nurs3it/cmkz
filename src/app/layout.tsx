import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@layout/base";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title: messages.page_titles.home,
    description: "CMKZ Frontend Application",
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
