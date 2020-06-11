import { Layout } from "react-grid-layout";

export type TextPosition = "start" | "center" | "end";

export type TextType = "normal" | "italic";

export type TextWeight = "normal" | "bold";

export interface TextCardProps {
  textSize?: number;
  textColor?: string;
  textType?: TextType;
  textWeight?: TextWeight;
  textVerticalPosition?: TextPosition;
  textHorizontalPosition?: TextPosition;
}

export type CardProps<T, CO> = {
  cardType: string;
  key: string;
  layout: Layout;
  content: T;
  options?: CO;
};

export type LayoutBindings<T, CO> = {
  [i: string]: CardProps<T, CO>;
};

export type CustomDashboardT<T, CO> = {
  layoutBindings: LayoutBindings<T, CO>;
  handleLayoutChanges?: (bindings: LayoutBindings<T, CO>) => void;
  isLayoutFreezed?: boolean;
  cols?: number;
  rowHeight?: number;
  width?: number;
};
