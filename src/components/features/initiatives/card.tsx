import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Initiative } from "@/types/initiative";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

interface InitiativeCardProps {
  card: Initiative;
}

export function InitiativeCard({ card }: InitiativeCardProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col border rounded overflow-hidden">
      <div className="w-full h-[200px] bg-slate-50">
        <Image
          src={card.image}
          alt={card.title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-2 h-full">
        <p className="text-sm text-foreground line-clamp-5 pt-4">
          {card.description}
        </p>
        <Button
          variant="link"
          className="w-max text-primary p-0 cursor-pointer flex items-center gap-2 mt-auto"
        >
          {t("initiatives.read_more")}
          <Icon icon={ChevronRightIcon} size={16} />
        </Button>
      </div>
    </div>
  );
}
