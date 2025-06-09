"use client";

import {
  AdvancedRealTimeChart,
  AdvancedRealTimeChartProps,
  Locales,
} from "react-ts-tradingview-widgets";
import { useEffect, useState } from "react";

interface RealtimeChartProps
  extends Omit<AdvancedRealTimeChartProps, "locale"> {
  locale: "ru" | "kk" | "en";
}

export function RealtimeChart({ locale, ...props }: RealtimeChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-gray-100 animate-pulse rounded" />;
  }

  return (
    <AdvancedRealTimeChart
      locale={locale as Locales}
      autosize
      timezone="Asia/Almaty"
      {...props}
      copyrightStyles={{
        parent: {
          display: "none",
          backgroundColor: "transparent",
        },
      }}
    ></AdvancedRealTimeChart>
  );
}
