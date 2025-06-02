import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  {
    code: "statistics",
    labelKey: "menu.statistics.title",
    children: [
      {
        code: "bonds-realtime",
        labelKey: "menu.statistics.bonds_realtime",
        href: "/statistics/bonds-realtime",
      },
      {
        code: "macro-indicators",
        labelKey: "menu.statistics.macro_indicators",
        href: "/statistics/macro-indicators",
      },
      {
        code: "calendar-of-issues",
        labelKey: "menu.statistics.calendar_issues",
        href: "/statistics/calendar-of-issues",
      },
    ],
  },
  {
    code: "information",
    labelKey: "menu.information.title",
    children: [
      {
        code: "bonds",
        labelKey: "menu.information.bonds",
        href: "/information/bonds",
      },
      {
        code: "issuers",
        labelKey: "menu.information.issuers",
        href: "/information/issuers",
      },
      {
        code: "calendar-of-corporate-events",
        labelKey: "menu.information.corporate_events",
        href: "/information/calendar-of-corporate-events",
      },
    ],
  },
  {
    code: "normative-legal-base",
    labelKey: "menu.legal.title",
    children: [
      {
        code: "rules-and-regulations",
        labelKey: "menu.legal.rules",
        href: "/normative-legal-base/rules-and-regulations",
      },
      {
        code: "types-of-bonds",
        labelKey: "menu.legal.bond_types",
        href: "/normative-legal-base/types-of-bonds",
      },
      {
        code: "taxation",
        labelKey: "menu.legal.taxation",
        href: "/normative-legal-base/taxation",
      },
      {
        code: "protection-of-investor-rights",
        labelKey: "menu.legal.investor_rights",
        href: "/normative-legal-base/protection-of-investor-rights",
      },
    ],
  },
  {
    code: "contacts",
    labelKey: "menu.contacts.title",
    children: [
      {
        code: "contact-form",
        labelKey: "menu.contacts.form",
        href: "/contacts/contact-form",
      },
      {
        code: "contact-information",
        labelKey: "menu.contacts.info",
        href: "/contacts/contact-information",
      },
      {
        code: "contact-information-of-market-participants",
        labelKey: "menu.contacts.participants",
        href: "/contacts/contact-information-of-market-participants",
      },
      {
        code: "frequently-asked-questions",
        labelKey: "menu.contacts.faq",
        href: "/contacts/frequently-asked-questions",
      },
    ],
  },
];
