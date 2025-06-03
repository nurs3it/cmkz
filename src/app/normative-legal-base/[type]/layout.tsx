import { Container } from "@/components/layout/container";
import { getGroupedDocumentsByType } from "@/api/legal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { getLocalizedValue, getNestedTranslation } from "@/utils/translations";
import { getLocale } from "@/api/locale";
import { Icon } from "@/components/ui/icon";
import { ChevronDown, Info } from "lucide-react";
import NormativeLegalBaseLink from "./link";
import { getMessages } from "next-intl/server";

export default async function NormativeLegalBaseLayout({
  params,
  children,
}: {
  params: { type: string };
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const type = params.type as string;
  const groupes = await getGroupedDocumentsByType(type);
  const messages = await getMessages();

  if (groupes.length === 0) {
    return (
      <Container className="flex flex-col gap-4 pt-10 px-4">
        <div className="flex gap-2 items-center">
          <Icon icon={Info} size={20} />
          <p className="text-sm">
            {getNestedTranslation(messages, "normativeLegalBase.noDocuments")}
          </p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="flex flex-col gap-4 py-10 px-4">
      <div className="flex gap-10">
        <div className="w-1/4">
          {groupes.map((group) => (
            <Collapsible key={group.group}>
              <CollapsibleTrigger className="text-lg flex gap-2 items-center justify-between cursor-pointer">
                <Icon icon={ChevronDown} size={20} />
                {getLocalizedValue(group, "name", locale)}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-8 py-4 gap-2 flex items-start justify-start flex-col">
                {group.documents.map((document) => (
                  <NormativeLegalBaseLink
                    key={document.code}
                    href={`/normative-legal-base/${type}/document/${document.code}`}
                  >
                    {getLocalizedValue(document, "name", locale)}
                  </NormativeLegalBaseLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </Container>
  );
}

export const dynamic = "force-dynamic";
