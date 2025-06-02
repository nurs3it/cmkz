import { useTranslations } from "next-intl";
import { GroupedLayout } from "@layout/grouped";
import { NewsCard } from "./card";
import { News } from "@/types/news";
import { Button } from "@ui/button";
import { Icon } from "@ui/icon";
import { ChevronRightIcon } from "lucide-react";

interface NewsCardsProps {
  cards: News[];
}

export function NewsCards({ cards }: NewsCardsProps) {
  const t = useTranslations();

  return (
    <GroupedLayout title={t("news.title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
        {cards.map((card) => (
          <NewsCard key={card.title} card={card} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          variant="link"
          className="w-max text-primary p-0 cursor-pointer flex items-center gap-2 mt-auto"
        >
          {t("news.view_all")}
          <Icon icon={ChevronRightIcon} size={16} />
        </Button>
      </div>
    </GroupedLayout>
  );
}
