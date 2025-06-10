import { getLocale } from "@/api/locale";
import { RealtimeChart } from "@/components/features/realtimechart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import Link from "next/link";
import { DateRange } from "react-ts-tradingview-widgets";

interface MacroIndicatorsProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function MacroIndicators({
  searchParams,
}: MacroIndicatorsProps) {
  const locale = await getLocale();
  const resolvedSearchParams = await searchParams;

  return (
    <Container className="flex flex-col px-4">
      <PageTitle />
      <Tabs
        className="mb-4"
        defaultValue={`${resolvedSearchParams.symbol || "SWAPUSD"}-${resolvedSearchParams.range || "1D"}`}
      >
        <TabsList>
          <Link href="/statistics/macro-indicators?symbol=SWAPUSD&range=1D">
            <TabsTrigger value="SWAPUSD-1D">SWAP-1D</TabsTrigger>
          </Link>
          <Link href="/statistics/macro-indicators?symbol=SWAPUSD&range=5D">
            <TabsTrigger value="SWAPUSD-5D">SWAP-5D</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-1/2">
          <RealtimeChart
            allow_symbol_change={false}
            locale={locale as "ru" | "kk" | "en"}
            symbol={(resolvedSearchParams.symbol as string) || "SWAPUSD"}
            range={(resolvedSearchParams.range as DateRange) || "1D"}
          />
        </div>
      </div>
    </Container>
  );
}
