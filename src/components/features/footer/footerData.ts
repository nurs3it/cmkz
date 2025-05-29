export type FooterLink = {
  label: string;
  href: string;
};

export const footerContacts = {
  phone: "+7 (727) 777-77-77",
  email: "example@gmail.kz",
  address: "050000, Казахстан, г. Алматы, ул. Сатпаева, 30/8",
};

export const footerLinks: FooterLink[] = [
  { label: "Использование cookies", href: "/cookies" },
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Условия использования приложения", href: "/app-terms" },
  { label: "Политика использования Сайта", href: "/site-policy" },
  { label: "Публичная оферта для клиентов", href: "/public-offer" },
];

export const footerCopyright =
  "АО \“Центральный депозитарий ценных бумаг\” © Все права защищены, 2025";
