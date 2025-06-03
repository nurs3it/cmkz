import { Skeleton } from "@/components/ui/skeleton";

export default function NormativeLegalBaseDocumentLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-2/3 h-10" />
      <Skeleton className="w-1/4 h-5" />
      <Skeleton className="w-4/5 h-5" />
      <Skeleton className="w-3/4 h-5" />
      <Skeleton className="w-2/3 h-5" />
      <Skeleton className="w-1/4 h-5" />
      <Skeleton className="w-4/5 h-5" />
      <Skeleton className="w-3/4 h-5" />
      <Skeleton className="w-2/3 h-5" />
    </div>
  );
}
