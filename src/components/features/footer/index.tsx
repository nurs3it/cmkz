import Link from "next/link";
import { footerContacts, footerLinks, FooterLink } from "./footerData";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-muted text-muted-foreground text-sm mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-8">
        <div className="flex-1 flex flex-col gap-6 min-w-[260px]">
          <div>
            <div className="font-bold mb-2">{t("footer.contacts")}</div>
            <div>{footerContacts.phone}</div>
            <div>{footerContacts.email}</div>
          </div>
          <div>
            <div className="font-bold mb-2">{t("footer.address")}</div>
            <div>{footerContacts.address}</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:items-end gap-2 min-w-[260px]">
          <div className="font-bold mb-2">{t("footer.terms")}</div>
          {footerLinks.map((link: FooterLink) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {t(`footer.links.${link.key}`)}
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 pb-4 pt-2 text-xs text-muted-foreground">
        © {new Date().getFullYear()} CMKZ. All rights reserved.
      </div>
    </footer>
  );
}
