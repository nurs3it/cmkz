import { useTranslations } from "next-intl";
import { GroupedLayout } from "@/components/layout/grouped";
import { Regulation } from "@/types/regulation";
import { RegulationCard } from "./card";

interface RegulationCardsProps {
  cards: Regulation[];
}

export function RegulationCards({ cards }: RegulationCardsProps) {
  const t = useTranslations();

  return (
    <GroupedLayout title={t("regulation.title")}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
        {cards.map((card) => (
          <RegulationCard key={card.title} card={card} />
        ))}
      </div>
    </GroupedLayout>
  );
}
