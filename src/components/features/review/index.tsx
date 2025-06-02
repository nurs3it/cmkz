import { GroupedLayout } from "@layout/grouped";
import { Card } from "@/components/ui/card";
import { Container } from "@layout/container";
import { Button } from "@ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Review() {
  const t = useTranslations();

  return (
    <div className="bg-slate-50 py-10">
      <Container className="flex gap-8 px-4 flex-col lg:flex-row">
        <Card className="flex-1 shadow-none p-8 lg:p-10 rounded border-none">
          <GroupedLayout title={t("reviews.title")}>
            <p className="text-base">{t("reviews.description")}</p>
            <Button className="w-max ml-auto">{t("reviews.read_more")}</Button>
          </GroupedLayout>
        </Card>
        <Card className="flex-1 p-0 shadow-none rounded border-none overflow-hidden">
          <Image
            src="/images/banners/review.png"
            alt={t("reviews.title")}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </Card>
      </Container>
    </div>
  );
}
