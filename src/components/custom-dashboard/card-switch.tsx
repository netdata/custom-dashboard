import React from "react";
import { setCardType } from "../cards";
import { Layout } from "react-grid-layout";

export function cardSwitch<T, CO>(layoutBindings: LayoutBindings<T, CO>) {
  return ({ i }: Layout) => {
    const Card = setCardType(layoutBindings[i].cardType);
    return (
      <div key={i}>
        <Card {...layoutBindings[i].options}>{layoutBindings[i].content}</Card>
      </div>
    );
  };
}
