import { getNews } from "@/api/news";
import { NewsCards } from "./cards";

export async function News() {
  const news = await getNews().then((res) => res.slice(0, 4));

  return <NewsCards cards={news} />;
}
