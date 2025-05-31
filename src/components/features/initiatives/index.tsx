import { getInitiatives } from "@/api/initiatives";
import { InitiativeCards } from "./cards";

export async function Initiatives() {
  const initiatives = await getInitiatives().then((res) => res.slice(0, 3));

  return <InitiativeCards cards={initiatives} />;
}
