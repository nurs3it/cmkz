import { RealtimeChart } from "@/components/features/realtimechart";
import { PageTitle } from "@features/pagetitle";
import { Container } from "@layout/container";
import { getLocale } from "@/api/locale";
import { DateRange } from "react-ts-tradingview-widgets";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface BondsRealtimeProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function BondsRealtime({
  searchParams,
}: BondsRealtimeProps) {
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
          <Link href="/statistics/bonds-realtime?symbol=SWAPUSD&range=1D">
            <TabsTrigger value="SWAPUSD-1D">SWAP-1D</TabsTrigger>
          </Link>
          <Link href="/statistics/bonds-realtime?symbol=SWAPUSD&range=5D">
            <TabsTrigger value="SWAPUSD-5D">SWAP-5D</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      <div className="w-full h-[500px]">
        <RealtimeChart
          allow_symbol_change={false}
          locale={locale as "ru" | "kk" | "en"}
          symbol={(resolvedSearchParams.symbol as string) || "SWAPUSD"}
          range={(resolvedSearchParams.range as DateRange) || "1D"}
        />
      </div>
    </Container>
  );
}
