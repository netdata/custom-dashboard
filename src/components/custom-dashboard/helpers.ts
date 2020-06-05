import { Layout } from "react-grid-layout";

export function createInternalLayout<T = string, OC = unknown>(
  layoutBindings: LayoutBindings<T, OC>,
  isLayoutFreezed: boolean
) {
  const staticOption = {
    static: isLayoutFreezed,
    isDragable: !isLayoutFreezed,
    isResizable: !isLayoutFreezed,
  };
  const layout = Object.values(layoutBindings).map((binding) => ({
    ...binding.layout,
    ...staticOption,
  }));
  return layout;
}

export function updateIntenalLayout(
  layoutList: Layout[],
  isLayoutFreezed: boolean
) {
  const staticOption = {
    static: isLayoutFreezed,
    isDragable: !isLayoutFreezed,
    isResizable: !isLayoutFreezed,
  };

  return layoutList.map((binding) => ({
    ...binding,
    ...staticOption,
  }));
}
