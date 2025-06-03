"use server";

import { getLegalTypes } from "@/api/legal";
import { MenuItem } from "@/types/menu";
import { mapLegalTypes } from "./mapper";
import { LegalType } from "@/types/legal";

const legalTypes = await getLegalTypes();
const mappedLegalTypes = await mapLegalTypes(legalTypes as LegalType[]);

export const getMenu = async (): Promise<MenuItem[]> => {
  return [
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
      children: mappedLegalTypes,
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
};
