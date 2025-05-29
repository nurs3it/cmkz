import Link from "next/link";
import {
  footerContacts,
  footerLinks,
  footerCopyright,
  FooterLink,
} from "./footerData";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground text-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-8">
        <div className="flex-1 flex flex-col gap-6 min-w-[260px]">
          <div>
            <div className="font-bold mb-2">Контакты</div>
            <div>{footerContacts.phone}</div>
            <div>{footerContacts.email}</div>
          </div>
          <div>
            <div className="font-bold mb-2">Адрес</div>
            <div>{footerContacts.address}</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:items-end gap-2 min-w-[260px]">
          <div className="font-bold mb-2">Условия использования</div>
          {footerLinks.map((link: FooterLink) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 pb-4 pt-2 text-xs text-muted-foreground">
        {footerCopyright}
      </div>
    </footer>
  );
}
