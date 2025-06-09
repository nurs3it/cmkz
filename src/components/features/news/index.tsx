import { getNews } from "@/api/news";
import { NewsCards } from "./cards";

export async function News() {
  const news = await getNews("1", 4);

  return <NewsCards cards={news.data} />;
}
