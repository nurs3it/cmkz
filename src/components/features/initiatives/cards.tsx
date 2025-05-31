import { GroupedLayout } from "@layout/grouped";
import { Initiative } from "@/types/initiative";
import { InitiativeCard } from "./card";
import { Button } from "@ui/button";
import { Icon } from "@ui/icon";
import { ChevronRightIcon } from "lucide-react";

interface InitiativeCardsProps {
  cards: Initiative[];
}

export function InitiativeCards({ cards }: InitiativeCardsProps) {
  return (
    <GroupedLayout title="Инициативы">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {cards.map((card) => (
          <InitiativeCard key={card.title} card={card} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          variant="link"
          className="w-max text-primary p-0 cursor-pointer flex items-center gap-2 mt-auto"
        >
          Все инициативы
          <Icon icon={ChevronRightIcon} size={16} />
        </Button>
      </div>
    </GroupedLayout>
  );
}
