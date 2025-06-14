export type Breadcrumb = {
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
  { path: "/news", titleKey: "page_titles.news" },
  { path: "/news/:id", titleKey: "page_titles.news_detail" },
  { path: "/initiatives", titleKey: "page_titles.initiatives" },
  { path: "/initiatives/:id", titleKey: "page_titles.initiative_detail" },
];

function matchRoute(routePath: string, currentPath: string): boolean {
  const routeParts = routePath.split("/").filter(Boolean);
  const currentParts = currentPath.split("/").filter(Boolean);

  if (routeParts.length !== currentParts.length) {
    return false;
  }

  for (let i = 0; i < routeParts.length; i++) {
    const routePart = routeParts[i];
    const currentPart = currentParts[i];

    if (routePart.startsWith(":")) {
      continue;
    }

    if (routePart !== currentPart) {
      return false;
    }
  }

  return true;
}

export function getBreadcrumbs(currentPath: string): Breadcrumb[] {
  const parts = currentPath.split("/").filter(Boolean);
  const breadcrumbs: Breadcrumb[] = [];

  let currentHref = "";

  for (const part of parts) {
    currentHref += `/${part}`;

    let match = routeMetadata.find((r) => r.path === currentHref);

    if (!match) {
      match = routeMetadata.find((r) => matchRoute(r.path, currentHref));
    }

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
  let match = routeMetadata.find((route) => route.path === path);

  if (!match) {
    match = routeMetadata.find((route) => matchRoute(route.path, path));
  }

  return match;
}
