import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactInformation } from "@/types/contact";
import ContactInformationMap from "./map";

interface Props {
  contactInformation: ContactInformation;
}

export function ContactInformationCard({ contactInformation }: Props) {
  const pointName = `${contactInformation.buildingName}; ${contactInformation.address}; ${contactInformation.phone}`;

  return (
    <Card className="p-0 gap-4 shadow-none rounded border-none">
      <CardHeader className="px-0">
        <CardTitle className="text-xl font-normal">
          {contactInformation.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <p className="text-base font-[500]">
              {contactInformation.buildingName}
            </p>
            <LabelValue label="Адрес" value={contactInformation.address} />
            <LabelValue label="Телефон" value={contactInformation.phone} />
            <LabelValue
              label="Режим работы"
              value={contactInformation.mode.join(", ")}
            />
            <LabelValue label="Эл. почта" value={contactInformation.email} />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base font-[500]">Схема проезда</p>
            <ContactInformationMap
              pointName={pointName}
              coordinates={contactInformation.coordinates}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const LabelValue = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between items-start">
      <p className="text-base font-[500]">{label}</p>
      <p className="text-sm text-gray-500 w-full md:w-1/2 text-left font-[500] md:text-right">
        {value}
      </p>
    </div>
  );
};
