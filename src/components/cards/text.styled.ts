import styled from "styled-components";
import { propOrElse } from "@netdata/netdata-ui";
import { TextCardProps } from "../../types";

type ToBePickedForText = "textSize" | "textColor" | "textType" | "textWeight";
type ToBePickedForBox = "textVerticalPosition" | "textHorizontalPosition";

export const TextCardBox = styled.div<Pick<TextCardProps, ToBePickedForBox>>`
  display: flex;
  align-items: ${propOrElse(["textVerticalPosition"], "center")};
  justify-content: ${propOrElse(["textHorizontalPosition"], "center")};
`;
export const TextHolder = styled.span<Pick<TextCardProps, ToBePickedForText>>`
  font-style: ${propOrElse(["textType"], "normal")};
  font-weight: ${propOrElse(["textWeight"], "normal")};
  font-size: ${propOrElse(["textSize"], 11)}px;
  color: ${propOrElse(["textColor"], "#35414a")};
`;
