import React, { useState, useEffect } from "react";
import RGL, { WidthProvider, Layout } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';

import { cardSwitch } from "./card-switch";
import { createInternalLayout, updateIntenalLayout } from "./helpers";
import { CustomDashboardT } from "../../types";

const ReactGridLayout = WidthProvider(RGL);

export function CustomDashboard<T, CO>({
  layoutBindings,
  handleLayoutChanges,
  isLayoutFreezed = false,
  cols = 12,
  rowHeight = 20,
  width = 1200,
}: CustomDashboardT<T, CO>) {
  const [dLayout, setdLayout] = useState<Layout[]>(
    createInternalLayout(layoutBindings, isLayoutFreezed)
  );

  useEffect(() => {
    setdLayout(updateIntenalLayout(dLayout, isLayoutFreezed));
    // eslint-disable-next-line
  }, [isLayoutFreezed]);

  const bindedCardSwitch = cardSwitch(layoutBindings);

  return (
    <ReactGridLayout
      className="layout"
      autoSize={true}
      layout={dLayout}
      cols={cols}
      rowHeight={rowHeight}
      width={width}
      onLayoutChange={(newLayout: Layout[]) => {
        setdLayout(updateIntenalLayout(newLayout, isLayoutFreezed));
        if (handleLayoutChanges) {
          const newBindings = { ...layoutBindings };
          newLayout.forEach((current) => {
            newBindings[current.i].layout = current;
          });
          handleLayoutChanges(newBindings);
        }
      }}
    >
      {dLayout?.map(bindedCardSwitch)}
    </ReactGridLayout>
  );
}
