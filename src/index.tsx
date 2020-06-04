import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "@netdata/netdata-ui";

import "./index.css";
import { CustomDashboard } from "./components";

const data: LayoutBindings<string, undefined> = {
  a: {
    cardType: "text",
    layout: { i: "a", x: 0, y: 0, w: 1, h: 2 },
    content: "This is A",
    key: "a",
  },
  b: {
    cardType: "text",
    layout: { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    content: "This is B",
    key: "b",
  },
  c: {
    cardType: "text",
    layout: { i: "c", x: 4, y: 0, w: 1, h: 2 },
    content: "This is C",
    key: "c",
  },
};
const Example = () => {
  const [isStatic, setStatic] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setStatic(!isStatic)}>Freeze</button>
      {String(isStatic)}
      <CustomDashboard layoutBindings={data} isLayoutFreezed={isStatic} />
    </>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <Example />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
