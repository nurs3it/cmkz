import { QueryPagination } from "@/components/ui/pagination";
import { Initiative } from "@/types/initiative";
import { InitiativeCard } from "./card";

interface InitiativesPanelsProps {
  initiatives: Initiative[];
  totalPages: number;
}

export function InitiativesPanels({
  initiatives,
  totalPages,
}: InitiativesPanelsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {initiatives.map((item) => (
          <InitiativeCard key={item.id} card={item} />
        ))}
      </div>
      <QueryPagination totalPages={totalPages} />
    </div>
  );
}
