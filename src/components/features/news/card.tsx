import { Button } from "@ui/button";
import { Icon } from "@ui/icon";
import { News } from "@/types/news";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

interface NewsCardProps {
  card: News;
}

export function NewsCard({ card }: NewsCardProps) {
  return (
    <div className="relative flex flex-col border rounded overflow-hidden">
      <div className="w-full h-[200px] bg-slate-50">
        <Image
          src={card.image}
          alt={card.title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gray-600/50 flex items-start justify-start p-4">
        <div className="flex flex-col h-full gap-2">
          <p className="text-white text-base font-semibold line-clamp-4">
            {card.title}
          </p>
          <Button
            variant="link"
            className="w-max text-white p-0 cursor-pointer flex items-center gap-2 mt-auto"
          >
            Подробнее
            <Icon icon={ChevronRightIcon} size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
