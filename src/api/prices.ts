"use server";

import { Price } from "@/types/pirce";

const mockPrices: Price[] = [
  {
    code: "KZGB_CPm1m",
    date: "05.05.2025 17:30",
    trend: "+0.59",
    value: 917.84,
  },
  {
    code: "KZGB_DPm1m",
    date: "05.05.2025 17:30",
    trend: "+0.59",
    value: 1079.56,
  },
  { code: "KZGB_Ym1m", date: "05.05.2025 17:30", trend: "-0.62", value: 100.0 },
  {
    code: "KZGB_CPm1m",
    date: "05.05.2025 17:30",
    trend: "-1.51",
    value: 100.0,
  },
  { code: "KZGB_CPm1m", date: "05.05.2025 17:30", trend: "0.59", value: 100.0 },
  {
    code: "KZGB_DPm1m",
    date: "05.05.2025 17:30",
    trend: "+0.62",
    value: 100.0,
  },
  {
    code: "KZGB_CPm1m",
    date: "05.05.2025 17:30",
    trend: "-1.51",
    value: 100.0,
  },
];

export const getPrices = async () => {
  const response = await Promise.resolve(mockPrices);
  return response;
};
