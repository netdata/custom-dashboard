import { TextCard } from "./text";
import { GenericCard } from "./generic";

const CardDict = new Map([
  ["default", GenericCard],
  ["text", TextCard],
]);

export function setCardType(cardType: string) {
  return (CardDict.has(cardType)
    ? CardDict.get(cardType)
    : CardDict.get("default")) as (p: any) => JSX.Element;
}
