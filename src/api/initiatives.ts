import { Initiative } from "@/types/initiative";

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
];

export const getInitiatives = async (): Promise<Initiative[]> => {
  const response = await Promise.resolve(mockInitiatives);
  return response;
};
