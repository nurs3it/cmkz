"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NormativeLegalBaseLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-base cursor-pointer hover:text-primary p-0 text-left font-normal w-full mr-auto",
        pathname?.includes(href) ? "text-primary" : "",
      )}
    >
      {children}
    </Link>
  );
}
