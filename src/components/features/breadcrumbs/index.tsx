"use client";

import { Container } from "@layout/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@ui/breadcrumb";
import { getBreadcrumbs } from "@/lib/breadcrumbs";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<{ [key: string]: string }[]>(
    [],
  );

  const t = useTranslations();

  useEffect(() => {
    setBreadcrumbs(getBreadcrumbs(pathname || ""));
  }, [pathname]);

  if (breadcrumbs.length === 0) return null;

  return (
    <div className="bg-primary/5 py-5">
      <Container className="flex items-center gap-2 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem key="/">
              <BreadcrumbLink asChild>
                <div className="flex items-center gap-2">
                  <Icon icon={Home} size={16} />
                  <Link href="/">{t("page_titles.home")}</Link>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {breadcrumbs.map((breadcrumb, index) => (
              <BreadcrumbItem key={breadcrumb.href}>
                <BreadcrumbLink
                  asChild
                  className={cn(
                    breadcrumb.href === pathname && "text-foreground",
                  )}
                >
                  <Link href={breadcrumb.href}>{t(breadcrumb.title)}</Link>
                </BreadcrumbLink>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </div>
  );
}
