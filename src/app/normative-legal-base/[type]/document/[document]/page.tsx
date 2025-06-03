import { getDocumentByCode } from "@/api/legal";
import { getLocale } from "@/api/locale";
import { getLocalizedValue } from "@/utils/translations";
import Markdown from "@/components/ui/markdown";

type PageProps = {
  params: {
    type: string;
    document: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NormativeLegalBaseDocument({
  params,
}: PageProps) {
  const locale = await getLocale();
  const document = await getDocumentByCode(params.document);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl text-primary">
        {getLocalizedValue(document || {}, "name", locale) || ""}
      </h1>
      <Markdown content={document?.content || ""} />
    </div>
  );
}
