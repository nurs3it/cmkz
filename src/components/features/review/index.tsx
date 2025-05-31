import { GroupedLayout } from "@layout/grouped";
import { Card } from "@/components/ui/card";
import { Container } from "@layout/container";
import { Button } from "@ui/button";
import Image from "next/image";

export function Review() {
  return (
    <div className="bg-slate-50 py-10">
      <Container className="flex gap-8 px-4 flex-col lg:flex-row">
        <Card className="flex-1 shadow-none p-8 lg:p-10 rounded border-none">
          <GroupedLayout title="Отзывы">
            <p className="text-base">
              Совокупный объем рынка облигаций Казахстана национальной валюте
              достиг по итогам 2024 года более 50 трлн тенге  (100 млрд долл.
              США). Необходимо отметить сбалансированную структуру между рынком
              ГЦБ (ΧΧ%) и корпоративными облигациями (YY%). Исторически рынок
              облигаций, как ГЦБ, так и корпоративный, сложился биржецентричным
              при этом значительную роль в его развитии сыграла накопительная
              пенсионная система в лице Единого накопительного пенсионного
              фонда, который стал основным крупным институциональным инвестором
              на рынке облигаций.
            </p>
            <Button className="w-max ml-auto">Читать далее</Button>
          </GroupedLayout>
        </Card>
        <Card className="flex-1 p-0 shadow-none rounded border-none overflow-hidden">
          <Image
            src="/images/banners/review.png"
            alt="review"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </Card>
      </Container>
    </div>
  );
}
