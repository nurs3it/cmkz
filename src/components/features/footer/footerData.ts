export interface FooterLink {
  key: string;
  href: string;
}

export const footerContacts = {
  phone: "+7 (727) 777-77-77",
  email: "example@gmail.kz",
  address: "050000, Казахстан, г. Алматы, ул. Сатпаева, 30/8",
};

export const footerLinks: FooterLink[] = [
  { key: "cookies", href: "/cookies" },
  { key: "privacy", href: "/privacy" },
  { key: "app_terms", href: "/app-terms" },
  { key: "site_policy", href: "/site-policy" },
  { key: "public_offer", href: "/public-offer" },
];

export const footerCopyright =
  "АО \“Центральный депозитарий ценных бумаг\” © Все права защищены, 2025";
