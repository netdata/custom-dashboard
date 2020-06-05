type Layout = import("react-grid-layout").Layout;

type CardProps<T, CO> = {
  cardType: string;
  key: string;
  layout: Layout;
  content: T;
  options?: CO;
};

type LayoutBindings<T, CO> = {
  [i: string]: CardProps<T, CO>;
};

type CustomDashboardT<T = string, CO = unknown> = {
  layoutBindings: LayoutBindings<T, CO>;
  handleLayoutChanges?: (bindings: LayoutBindings<T, CO>) => void;
  isLayoutFreezed?: boolean;
  cols?: number;
  rowHeight?: number;
  width?: number;
};
