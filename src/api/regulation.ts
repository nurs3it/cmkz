import { Regulation } from "@/types/regulation";

const mockRegulations: Regulation[] = [
  {
    title: "Законы",
    description:
      "Основные законы Республики Казахстан, регулирующие рынок ценных бумаг и деятельность его участников.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Нормативно-правовые акты",
    description:
      "Подзаконные акты, постановления и приказы уполномоченных органов и учет ценных бумаг.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Правила КФБ (KASE)",
    description:
      "Документы, определяющие порядок допуска ценных бумаг к торгам, требования к эмитентам и участников рынка на бирже KASE.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Правила Центрального депозитария",
    description:
      "Регламенты, стандарты и процедуры учета прав на ценные бумаги, проведения расчетов и хранения активов.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Министерство финансов Республики Казахстан",
    description: "Постановления, приказы и учет ценных бумаг.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Astana International Exchange ",
    description:
      "Биржа, образованная в 2017 году в рамках развития Международного финансового центра «Астана».",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Министерство национальной экономики Республики Казахстан",
    description: "Нормативные акты и приказы органов регулирования.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
  {
    title: "Налоги",
    description:
      "Предоставляет информацию о налоговых обязательствах, процедурах и сроках, а также о возможных налоговых льготах и вычетах.",
    image: "https://dummyimage.com/600x400/000/fff&text=fakeimage+600x400",
    files: [
      {
        title: "Закон о рынке ценных бумаг",
      },
      {
        title: "Закон 2",
      },
    ],
  },
];

export const getRegulations = async (): Promise<Regulation[]> => {
  const response = await Promise.resolve(mockRegulations);
  return response;
};
