import { useTranslations } from "next-intl";
import { GroupedLayout } from "@layout/grouped";
import { Initiative } from "@/types/initiative";
import { InitiativeCard } from "./card";
import { Button } from "@ui/button";
import { Icon } from "@ui/icon";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface InitiativeCardsProps {
  cards: Initiative[];
}

export function InitiativeCards({ cards }: InitiativeCardsProps) {
  const t = useTranslations();

  return (
    <GroupedLayout title={t("initiatives.title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {cards.map((card) => (
          <InitiativeCard key={card.title} card={card} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          asChild
          variant="link"
          className="w-max text-primary p-0 cursor-pointer flex items-center gap-2 mt-auto"
        >
          <Link href="/initiatives">
            {t("initiatives.view_all")}
            <Icon icon={ChevronRightIcon} size={16} />
          </Link>
        </Button>
      </div>
    </GroupedLayout>
  );
}
