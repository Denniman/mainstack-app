import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { FONTS, BREAK_POINTS, APP_COLORS } from "./theme/styles.ts";
import GlobalStyle from "./theme/reset.ts";
import "./index.css";

const theme: DefaultTheme = {
  fonts: FONTS,
  colors: APP_COLORS,
  breakpoints: BREAK_POINTS,
  isDarkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: function (): void {},
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
