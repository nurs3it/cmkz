"use client";

import React, { useEffect, useState } from "react";
import { getPrices } from "@/api/prices";
import { cn } from "@/lib/utils";
import { Price } from "@/types/pirce";

export function LiveMarketTicker() {
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    getPrices().then(setPrices);
  }, []);

  if (!prices.length) return null;

  return (
    <div className="w-full overflow-hidden rounded">
      <div className="flex items-center animate-ticker whitespace-nowrap gap-8">
        {prices.map((price, idx) => (
          <div
            key={idx}
            className={cn(
              "items-center px-6 py-2 justify-center border rounded border-l-3 rounded-l-none",
              price.trend.startsWith("-")
                ? "border-l-red-500"
                : price.trend.startsWith("+")
                  ? "border-l-green-500"
                  : "border-l-foreground",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <span className="text-base">{price.code}</span>
              <span
                className={cn(
                  "text-base",
                  price.trend.startsWith("-")
                    ? "text-red-500"
                    : price.trend.startsWith("+")
                      ? "text-green-500"
                      : "text-foreground",
                )}
              >
                {price.trend.startsWith("-") ? price.trend : `${price.trend}`}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
