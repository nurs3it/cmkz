import { getDocumentByCode } from "@/api/legal";
import { getLocale } from "@/api/locale";
import { getLocalizedValue } from "@/utils/translations";
import Markdown from "@/components/ui/markdown";

type Props = {
  params: Promise<{
    type: string;
    document: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NormativeLegalBaseDocument({ params }: Props) {
  const resolvedParams = await params;
  const locale = await getLocale();
  const document = await getDocumentByCode(resolvedParams.document);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl text-primary">
        {getLocalizedValue(document || {}, "name", locale) || ""}
      </h1>
      <Markdown content={document?.content || ""} />
    </div>
  );
}
