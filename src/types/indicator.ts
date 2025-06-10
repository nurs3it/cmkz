export interface IndicatorData {
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  lastUpdate: string;
  openPrice: number;
  dayMin: number;
  dayMax: number;
  monthChange: number;
  monthChangePercent: number;
  yearChange: number;
  yearChangePercent: number;
  weekMax52: number;
  weekMin52: number;
  historicalMax: number;
  historicalMin: number;
  volumeKZT: number;
  volumeUSD: number;
}

export interface IndicatorMetadataProps {
  data?: IndicatorData;
}
