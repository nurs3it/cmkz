import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  {
    code: "statistics",
    label: "СТАТИСТИКА",
    children: [
      {
        code: "bonds-realtime",
        label: "Доходность, цены и объемы облигаций в режиме реального времени",
        href: "/statistics/bonds-realtime",
      },
      {
        code: "macro-indicators",
        label: "Макроэкономические  показатели",
        href: "/statistics/macro-indicators",
      },
      {
        code: "calendar-of-issues",
        label:
          "Календарь выпусков включая  предстоящие аукционы и даты  выпуска",
        href: "/statistics/calendar-of-issues",
      },
    ],
  },
  {
    code: "information",
    label: "ИНФОРМАЦИЯ О ФИ",
    children: [
      {
        code: "bonds",
        label: "Сведения по облигациям",
        href: "/information/bonds",
      },
      {
        code: "issuers",
        label: "Сведения по эмитентам",
        href: "/information/issuers",
      },
      {
        code: "calendar-of-corporate-events",
        label: "Календарь корпоративных  событий",
        href: "/information/calendar-of-corporate-events",
      },
    ],
  },
  {
    code: "normative-legal-base",
    label: "НОРМАТИВНО-ПРАВОВАЯ  БАЗА",
    children: [
      {
        code: "rules-and-regulations",
        label: "Правила и положения,  регулирующие рынок с  ссылками",
        href: "/normative-legal-base/rules-and-regulations",
      },
      {
        code: "types-of-bonds",
        label: "Виды облигаций",
        href: "/normative-legal-base/types-of-bonds",
      },
      {
        code: "taxation",
        label: "Налогообложение",
        href: "/normative-legal-base/taxation",
      },
      {
        code: "protection-of-investor-rights",
        label: "Защита прав инвесторов",
        href: "/normative-legal-base/protection-of-investor-rights",
      },
    ],
  },
  {
    code: "contacts",
    label: "КОНТАКТЫ",
    children: [
      {
        code: "contact-form",
        label: "Контактная форма для  запросов и обратной связи",
        href: "/contacts/contact-form",
      },
      {
        code: "contact-information",
        label:
          "Контактная информация:  адреса электронной почты и  номера телефонов отделов и  организаций",
        href: "/contacts/contact-information",
      },
      {
        code: "contact-information-of-market-participants",
        label: "Контактная информация участников рынка",
        href: "/contacts/contact-information-of-market-participants",
      },
      {
        code: "frequently-asked-questions",
        label: "Ответы на часто задаваемые вопросы",
        href: "/contacts/frequently-asked-questions",
      },
    ],
  },
];
