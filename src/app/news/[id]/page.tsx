import { PageTitle } from "@/components/features/pagetitle";
import { Container } from "@/components/layout/container";
import { getNewsById } from "@/api/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Markdown from "@/components/ui/markdown";

export default async function NewsPage({ params }: { params: { id: string } }) {
  const news = await getNewsById(params.id);

  if (!news) {
    return notFound();
  }

  return (
    <Container className="flex flex-col gap-4 px-4">
      <PageTitle title={news.title} />
      <small className="text-sm text-gray-500">
        {news.createdAt
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, ".")}
        ,{" "}
        {news.createdAt.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </small>
      <div className="flex flex-col gap-4 w-full h-[300px]  md:h-[500px] max-h-[300px] md:max-h-[500px] relative">
        <Image
          src={news.image}
          alt={news.title}
          fill
          objectFit="cover"
          objectPosition="center"
          className="object-cover"
        />
      </div>
      <Markdown content={news.content || ""} />
    </Container>
  );
}
