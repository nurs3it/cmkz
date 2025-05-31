"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Regulation as RegulationType } from "@/types/regulation";
import { ChevronLeftIcon, ChevronRightIcon, FileIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface RegulationCardProps {
  card: RegulationType;
}

interface RegulationCardFilesProps {
  card: RegulationType;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function RegulationCard({ card }: RegulationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen)
    return (
      <RegulationCardFiles card={card} setIsOpen={setIsOpen} isOpen={isOpen} />
    );

  return (
    <div className="flex flex-col border rounded overflow-hidden hover:border-primary">
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
        <h3 className="text-lg font-bold">{card.title}</h3>
        <p className="text-sm text-foreground">{card.description}</p>
        <Button
          variant="link"
          className="w-max text-primary p-0 cursor-pointer flex items-center gap-2 mt-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          Читать далее
          <Icon icon={ChevronRightIcon} size={16} />
        </Button>
      </div>
    </div>
  );
}

const RegulationCardFiles = ({
  card,
  setIsOpen,
  isOpen,
}: RegulationCardFilesProps) => {
  return (
    <div className="flex flex-col border rounded border-primary relative overflow-hidden">
      <Image
        src={card.image}
        alt={card.title}
        width={600}
        height={400}
        objectFit="cover"
        className="w-full h-full object-cover blur-[4px] z-0"
        objectPosition="center"
        draggable={false}
      />
      <div className="flex flex-col gap-2 px-4 py-2 h-full absolute top-0 right-0 left-0 bottom-0 z-1">
        <div className="flex flex-col gap-0 items-start text-primary-foreground mt-4">
          {card.files?.map((file) => (
            <Button
              variant="link"
              className="flex items-center gap-2 text-left text-primary-foreground underline p-0"
              key={file.title}
              onClick={() => console.log(file)}
            >
              <Icon icon={FileIcon} size={16} />
              <p className="text-primary-foreground">{file.title}</p>
            </Button>
          ))}
        </div>
        <Button
          variant="link"
          className="w-max p-0 cursor-pointer flex items-center gap-2 mt-auto text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={ChevronLeftIcon} size={16} />
          Вернуться к описанию
        </Button>
      </div>
    </div>
  );
};
