import { News } from "@/types/news";
import { NewsPanel } from "./panel";
import { QueryPagination } from "@/components/ui/pagination";

interface NewsPanelsProps {
  news: News[];
  totalPages: number;
}

export function NewsPanels({ news, totalPages }: NewsPanelsProps) {
  return (
    <div className="flex flex-col gap-4">
      {news.map((item) => (
        <NewsPanel key={item.id} item={item} />
      ))}
      <QueryPagination totalPages={totalPages} />
    </div>
  );
}
