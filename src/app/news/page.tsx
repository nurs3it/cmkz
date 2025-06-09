import { getNews } from "@/api/news";
import { NewsPanels } from "@/components/features/news/panels";
import { PageTitle } from "@/components/features/pagetitle";
import { Container } from "@/components/layout/container";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const page = (await searchParams).page || "1";
  const news = await getNews(page);

  return (
    <Container className="flex flex-col px-4">
      <PageTitle />
      <NewsPanels news={news.data} totalPages={news.totalPages} />
    </Container>
  );
}
