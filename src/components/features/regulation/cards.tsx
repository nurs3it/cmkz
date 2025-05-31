import { GroupedLayout } from "@/components/layout/grouped";
import { Regulation } from "@/types/regulation";
import { RegulationCard } from "./card";

interface RegulationCardsProps {
  cards: Regulation[];
}

export function RegulationCards({ cards }: RegulationCardsProps) {
  return (
    <GroupedLayout title="Регулирование">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
        {cards.map((card) => (
          <RegulationCard key={card.title} card={card} />
        ))}
      </div>
    </GroupedLayout>
  );
}
