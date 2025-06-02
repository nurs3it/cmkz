type Breadcrumb = {
  title: string;
  href: string;
};

export interface RouteMeta {
  path: string;
  titleKey: string;
}

export const routeMetadata: RouteMeta[] = [
  { path: "/", titleKey: "page_titles.home" },
  { path: "/statistics", titleKey: "page_titles.statistics" },
  {
    path: "/statistics/bonds-realtime",
    titleKey: "menu.statistics.bonds_realtime",
  },
  {
    path: "/statistics/macro-indicators",
    titleKey: "menu.statistics.macro_indicators",
  },
  {
    path: "/statistics/calendar-of-issues",
    titleKey: "menu.statistics.calendar_issues",
  },
  { path: "/information", titleKey: "page_titles.information" },
  { path: "/information/bonds", titleKey: "menu.information.bonds" },
  { path: "/information/issuers", titleKey: "menu.information.issuers" },
  {
    path: "/information/calendar-of-corporate-events",
    titleKey: "menu.information.corporate_events",
  },
  { path: "/normative-legal-base", titleKey: "page_titles.legal" },
  {
    path: "/normative-legal-base/rules-and-regulations",
    titleKey: "menu.legal.rules",
  },
  {
    path: "/normative-legal-base/types-of-bonds",
    titleKey: "menu.legal.bond_types",
  },
  { path: "/normative-legal-base/taxation", titleKey: "menu.legal.taxation" },
  {
    path: "/normative-legal-base/protection-of-investor-rights",
    titleKey: "menu.legal.investor_rights",
  },
  { path: "/contacts", titleKey: "page_titles.contacts" },
  { path: "/contacts/contact-form", titleKey: "menu.contacts.form" },
  { path: "/contacts/contact-information", titleKey: "menu.contacts.info" },
  {
    path: "/contacts/contact-information-of-market-participants",
    titleKey: "menu.contacts.participants",
  },
  {
    path: "/contacts/frequently-asked-questions",
    titleKey: "menu.contacts.faq",
  },
];

export function getBreadcrumbs(currentPath: string): Breadcrumb[] {
  const parts = currentPath.split("/").filter(Boolean);
  const breadcrumbs: Breadcrumb[] = [];

  let currentHref = "";

  for (const part of parts) {
    currentHref += `/${part}`;
    const match = routeMetadata.find((r) => r.path === currentHref);
    if (match) {
      breadcrumbs.push({
        title: match.titleKey,
        href: match.path,
      });
    }
  }

  return breadcrumbs;
}

export function getPageMetadata(path: string) {
  return routeMetadata.find((route) => route.path === path);
}

export function useBreadcrumbs(path: string) {
  const t = useTranslations();
  const breadcrumbs = [];
  const segments = path.split("/").filter(Boolean);
  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const match = getPageMetadata(currentPath);
    if (match) {
      breadcrumbs.push({
        title: t(match.titleKey),
        href: match.path,
      });
    }
  }

  return breadcrumbs;
}
