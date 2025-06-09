import { Initiative } from "@/types/initiative";
import { Response } from "@/types/response";

const mockInitiatives: Initiative[] = [
  {
    id: "1",
    title: "Инициатива 1",
    description: "Описание инициативы 1",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "2",
    title: "Инициатива 2",
    description: "Описание инициативы 2",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "3",
    title: "Инициатива 3",
    description: "Описание инициативы 3",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "4",
    title: "Инициатива 4",
    description: "Описание инициативы 4",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "5",
    title: "Инициатива 5",
    description: "Описание инициативы 5",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "6",
    title: "Инициатива 6",
    description: "Описание инициативы 6",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "7",
    title: "Инициатива 7",
    description: "Описание инициативы 7",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "8",
    title: "Инициатива 8",
    description: "Описание инициативы 8",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "9",
    title: "Инициатива 9",
    description: "Описание инициативы 9",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "10",
    title: "Инициатива 10",
    description: "Описание инициативы 10",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "11",
    title: "Инициатива 11",
    description: "Описание инициативы 11",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "12",
    title: "Инициатива 12",
    description: "Описание инициативы 12",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "13",
    title: "Инициатива 13",
    description: "Описание инициативы 13",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "14",
    title: "Инициатива 14",
    description: "Описание инициативы 14",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "15",
    title: "Инициатива 15",
    description: "Описание инициативы 15",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
  {
    id: "16",
    title: "Инициатива 16",
    description: "Описание инициативы 16",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
  },
];

export const getInitiatives = async (
  page: string,
  pageSize = 10,
): Promise<Response<Initiative>> => {
  const response = await Promise.resolve(mockInitiatives);
  const start = (Number(page) - 1) * pageSize;
  const end = start + pageSize;
  const initiatives = response.slice(start, end);
  return {
    data: initiatives,
    totalItems: response.length,
    totalPages: Math.ceil(response.length / pageSize),
  };
};
