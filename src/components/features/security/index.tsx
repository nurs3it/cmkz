import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Security() {
  return (
    <div className="w-full h-[420px] flex overflow-hidden flex-col rounded-3xl relative p-12 py-20 bg-[#CDCDCD]">
      <div className="z-1 w-max flex flex-col gap-8">
        <h2 className="text-5xl font-bold">Ценные бумаги</h2>
        <p className="text-sm text-foreground max-w-[500px]">
          Ценная бумага — это финансовый инструмент, который подтверждает право
          владельца на определенное имущество, например, деньги в установленной
          валюте или долю в компании. Раньше ценные бумаги печатали и
          предъявляли по факту, а сейчас они в основном обращаются в электронном
          формате.
        </p>
        <Button
          asChild
          className="w-max ml-[-0.8rem] p-0 px-0 text-foreground font-normal"
          variant="link"
        >
          <Link href="/security">
            Подробнее
            <ChevronRight />
          </Link>
        </Button>
      </div>
      <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-[#BFBFBF] to-[#CDCDCD] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col" />
      <Image
        alt="Security"
        objectFit="cover"
        src="/images/banners/pig.png"
        width={320}
        height={420}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}
