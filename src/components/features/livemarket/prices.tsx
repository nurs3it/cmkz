import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";
import { Card } from "@ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { getPrices } from "@/api/prices";
import { getId } from "@/lib/id";
import { cn } from "@/lib/utils";
import { Button } from "@ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Price } from "@/types/pirce";

const tabs = [
  {
    label: "ГЦБ",
    value: "gcb",
  },
  {
    label: "Корпоративные",
    value: "corp",
  },
  {
    label: "Индексы",
    value: "index",
  },
];

export function LiveMarketPrices() {
  return (
    <Card className="rounded h-full shadow-none p-4">
      <Tabs defaultValue="gcb" className="w-full">
        <TabsList className="w-full bg-transparent flex gap-3 justify-start flex-nowrap overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-base font-normal cursor-pointer transition-colors bg-transparent border-none outline-none px-0 pb-1 hover:text-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none max-w-max data-[state=active]:border-b-primary"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="gcb">
          <PricesTable />
        </TabsContent>
        <TabsContent value="corp">
          <PricesTable />
        </TabsContent>
        <TabsContent value="index">
          <PricesTable />
        </TabsContent>
      </Tabs>
      <div className="flex justify-end">
        <Button
          asChild
          variant="link"
          className="text-sm w-max text-primary p-1"
        >
          <Link href="/market">
            Перейти к рынку
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}

const PricesTable = async () => {
  const prices: Price[] = await getPrices();

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-base border-none">
          <TableHead className="w-[100px] font-normal">Код</TableHead>
          <TableHead className="font-normal">Значение</TableHead>
          <TableHead className="text-right font-normal">Тренд,%</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prices.map((price) => (
          <TableRow key={getId()} className="border-b">
            <TableCell className="font-medium">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-normal underline">
                  {price.code}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {price.date}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-base font-normal text-center">
              {price.value}
            </TableCell>
            <TableCell
              className={cn(
                "text-right text-base font-normal",
                price.trend.startsWith("-")
                  ? "text-red-500"
                  : price.trend.startsWith("+")
                    ? "text-green-500"
                    : "text-foreground",
              )}
            >
              {price.trend}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
