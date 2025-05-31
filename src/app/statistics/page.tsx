import { Container } from "@layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статистика",
  description: "Страница статистики",
};

export default function Statistics() {
  return (
    <Container className="flex flex-col gap-10 px-4">
      <h1 className="text-2xl font-bold">Статистика</h1>
    </Container>
  );
}
