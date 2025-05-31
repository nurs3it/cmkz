import { getRegulations } from "@/api/regulation";
import { RegulationCards } from "./cards";

export async function Regulation() {
  const regulations = await getRegulations().then((res) => res.slice(0, 8));

  return <RegulationCards cards={regulations} />;
}
