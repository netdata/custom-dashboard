import React, { PropsWithChildren } from "react";
import { CardContainer } from "./generic.styled";

export const GenericCard = ({ children }: PropsWithChildren<{}>) => (
  <CardContainer>{children}</CardContainer>
);
