import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  {
    label: "СТАТИСТИКА",
    children: [
      {
        label: "Доходность, цены и объемы облигаций в режиме реального времени",
        href: "/statistics/bonds-realtime",
      },
      {
        label: "Макроэкономические  показатели",
        href: "/statistics/macro-indicators",
      },
      {
        label:
          "Календарь выпусков включая  предстоящие аукционы и даты  выпуска",
        href: "/statistics/calendar-of-issues",
      },
    ],
  },
  {
    label: "ИНФОРМАЦИЯ О ФИ",
    children: [
      {
        label: "Сведения по облигациям",
        href: "/information/bonds",
      },
      {
        label: "Сведения по эмитентам",
        href: "/information/issuers",
      },
      {
        label: "Календарь корпоративных  событий",
        href: "/information/calendar-of-corporate-events",
      },
    ],
  },
  {
    label: "НОРМАТИВНО-ПРАВОВАЯ  БАЗА",
    children: [
      {
        label: "Правила и положения,  регулирующие рынок с  ссылками",
        href: "/normative-legal-base/rules-and-regulations",
      },
      {
        label: "Виды облигаций",
        href: "/normative-legal-base/types-of-bonds",
      },
      {
        label: "Налогообложение",
        href: "/normative-legal-base/taxation",
      },
      {
        label: "Защита прав инвесторов",
        href: "/normative-legal-base/protection-of-investor-rights",
      },
    ],
  },
  {
    label: "КОНТАКТЫ",
    children: [
      {
        label: "Контактная форма для  запросов и обратной связи",
        href: "/contacts/contact-form",
      },
      {
        label:
          "Контактная информация:  адреса электронной почты и  номера телефонов отделов и  организаций",
        href: "/contacts/contact-information",
      },
      {
        label: "Контактная информация участников рынка",
        href: "/contacts/contact-information-of-market-participants",
      },
      {
        label: "Ответы на часто задаваемые вопросы",
        href: "/contacts/frequently-asked-questions",
      },
    ],
  },
];
