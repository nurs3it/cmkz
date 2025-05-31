import { Security } from "@features/security";
import { LiveMarket } from "@features/livemarket";
import { Regulation } from "@features/regulation";
import { Container } from "@layout/container";
import { Review } from "@features/review";

export default function Home() {
  return (
    <div className="py-10 flex flex-col gap-10">
      <Container className="flex flex-col gap-10 px-4">
        <LiveMarket />
        <Security />
        <Regulation />
      </Container>
      <Review />
    </div>
  );
}
