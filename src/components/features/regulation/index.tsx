import { getRegulations } from "@/api/regulation";
import { RegulationCards } from "./cards";

export async function Regulation() {
  const regulations = await getRegulations();

  return <RegulationCards cards={regulations} />;
}
