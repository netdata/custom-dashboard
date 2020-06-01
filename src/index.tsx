import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "@netdata/netdata-ui"

import './index.css';
import { CustomDashboard } from './components/custom-dashboard';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <CustomDashboard />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
