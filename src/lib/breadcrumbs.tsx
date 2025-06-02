type Breadcrumb = {
  title: string;
  href: string;
};

type RouteMeta = {
  path: string;
  title: string;
};

export const routeMetadata: RouteMeta[] = [
  { path: "/", title: "Главная" },
  { path: "/statistics", title: "Статистика" },
  {
    path: "/statistics/bonds-realtime",
    title: "Доходность, цены и объемы облигаций в режиме реального времени",
  },
  {
    path: "/statistics/macro-indicators",
    title: "Макроэкономические  показатели",
  },
  {
    path: "/statistics/calendar-of-issues",
    title: "Календарь выпусков включая  предстоящие аукционы и даты  выпуска",
  },
  { path: "/information", title: "ИНФОРМАЦИЯ О ФИ" },
  { path: "/information/bonds", title: "Сведения по облигациям" },
  { path: "/information/issuers", title: "Сведения по эмитентам" },
  {
    path: "/information/calendar-of-corporate-events",
    title: "Календарь корпоративных  событий",
  },
  { path: "/normative-legal-base", title: "НОРМАТИВНО-ПРАВОВАЯ БАЗА" },
  {
    path: "/normative-legal-base/rules-and-regulations",
    title: "Правила и положения,  регулирующие рынок с  ссылками",
  },
  { path: "/normative-legal-base/types-of-bonds", title: "Виды облигаций" },
  { path: "/normative-legal-base/taxation", title: "Налогообложение" },
  {
    path: "/normative-legal-base/protection-of-investor-rights",
    title: "Защита прав инвесторов",
  },
  { path: "/contacts", title: "КОНТАКТЫ" },
  {
    path: "/contacts/contact-form",
    title: "Контактная форма для  запросов и обратной связи",
  },
  {
    path: "/contacts/contact-information",
    title:
      "Контактная информация:  адреса электронной почты и  номера телефонов отделов и  организаций",
  },
  {
    path: "/contacts/contact-information-of-market-participants",
    title: "Контактная информация участников рынка",
  },
  {
    path: "/contacts/frequently-asked-questions",
    title: "Ответы на часто задаваемые вопросы",
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
        title: match.title,
        href: match.path,
      });
    }
  }

  return breadcrumbs;
}

export function getPageMetadata(
  currentPath: string = "",
): RouteMeta | undefined {
  return routeMetadata.find((r) => r.path === currentPath);
}
