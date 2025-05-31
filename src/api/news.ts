import { News } from "@/types/news";

const mockNews: News[] = [
  {
    id: "1",
    title: "ИЗМЕНЕНИЯ В РЕГЛАМЕНТЕ ТОРГОВ НА KASE В АПРЕЛЕ 2025 ГОДА ",
    description: "Description 1",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "2",
    title: 'Извещение о проведении собрания акционеров АО "АстанаГаз КМГ"',
    description: "Description 2",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "3",
    title: 'Облигации ТОО "Birinshi Lombard" исключены из списка KASE',
    description: "Description 3",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "4",
    title: 'Облигации "Отбасы банк" включены в официальный список KASE',
    description: "Description 4",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
];

export const getNews = async (): Promise<News[]> => {
  const response = await Promise.resolve(mockNews);
  return response;
};
