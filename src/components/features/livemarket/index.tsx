import { LiveMarketBanner } from "./banner";
import { LiveMarketPrices } from "./prices";
import { LiveMarketTicker } from "./ticker";

export function LiveMarket() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full md:w-8/12 lg:w-8/12">
          <LiveMarketBanner />
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12">
          <LiveMarketPrices />
        </div>
      </div>
      <div className="w-full">
        <LiveMarketTicker />
      </div>
    </div>
  );
}
