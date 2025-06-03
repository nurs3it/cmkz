import { Logo } from "@ui/logo";
import { Navigation } from "@features/navigation";
import LocaleChanger from "@features/locale/changer";
import { getMenu } from "@/components/features/header/data";

export async function Header() {
  const menu = await getMenu();

  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-end justify-between gap-4 w-full">
          <Logo />
          <Navigation menu={menu} />
          <LocaleChanger />
        </div>
      </div>
    </header>
  );
}
