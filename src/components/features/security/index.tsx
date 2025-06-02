import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Security() {
  const t = useTranslations();

  return (
    <div className="w-full h-[420px] flex overflow-hidden flex-col justify-center rounded-3xl relative p-8 md:p-12 py-20 bg-[#CDCDCD]">
      <div className="z-1 w-full flex flex-col gap-4 md:gap-8">
        <h2 className="text-3xl font-bold md:text-5xl">
          {t("security.title")}
        </h2>
        <p className="text-sm text-foreground w-full max-w-[500px]">
          {t("security.description")}
        </p>
        <Button
          asChild
          className="w-max p-0 px-0 text-foreground font-normal"
          variant="link"
        >
          <Link href="/security">
            {t("security.learn_more")}
            <ChevronRight />
          </Link>
        </Button>
      </div>
      <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-[#BFBFBF] to-[#CDCDCD] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col" />
      <Image
        draggable={false}
        alt={t("security.image_alt")}
        objectFit="cover"
        src="/images/banners/pig.png"
        width={320}
        height={420}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}
