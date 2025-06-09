import { getInitiatives } from "@/api/initiatives";
import { InitiativeCards } from "./cards";

export async function Initiatives() {
  const { data } = await getInitiatives("1", 3);

  return <InitiativeCards cards={data} />;
}
