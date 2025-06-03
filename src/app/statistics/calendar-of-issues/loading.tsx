import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <Container className="flex flex-col gap-4 pt-10 px-4">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-1/4 h-10" />
        <Skeleton className="w-4/5 h-5" />
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-2/3 h-5" />
        <Skeleton className="w-1/4 h-5" />
        <Skeleton className="w-4/5 h-5" />
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-2/3 h-5" />
      </div>
    </Container>
  );
}
