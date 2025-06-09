import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

interface NewsPanelProps {
  item: News;
}

export function NewsPanel({ item }: NewsPanelProps) {
  return (
    <div className="flex flex-col gap-0 md:flex-row md:gap-2 border rounded-md overflow-hidden">
      <Link
        href={`/news/${item.id}`}
        className="w-full md:w-[300px] relative h-[200px]"
      >
        <Image
          fill
          src={item.image}
          alt={item.title}
          objectFit="cover"
          objectPosition="center"
          className="object-cover"
        />
      </Link>
      <div className="w-full p-4 flex flex-col gap-4">
        <Link href={`/news/${item.id}`}>
          <h3 className="text-lg font-bold text-primary hover:underline">
            {item.title}
          </h3>
        </Link>
        <p className="text-sm line-clamp-5">{item.content}</p>
      </div>
    </div>
  );
}
