import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/layout/base";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "CMKZ",
  description: "CMKZ Frontend Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-background min-h-screen`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
