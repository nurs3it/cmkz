import { getPageMetadata } from "@/lib/breadcrumbs";
import { headers } from "next/headers";

export async function PageTitle() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  const page = getPageMetadata(pathname);

  return (
    <h1 className="text-2xl font-bold text-primary py-4">{page?.title}</h1>
  );
}
