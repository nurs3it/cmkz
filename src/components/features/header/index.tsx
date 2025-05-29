import { Logo } from "@ui/logo";
import { Navigation } from "../navigation";

export function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-end justify-between gap-4 w-full">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
