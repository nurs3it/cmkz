import { Security } from "@features/security";
import { LiveMarket } from "@features/livemarket";

export default function Home() {
  return (
    <div className="container px-4 mx-auto py-10 flex flex-col gap-10">
      <LiveMarket />
      <Security />
    </div>
  );
}
