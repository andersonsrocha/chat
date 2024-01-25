import React from "react";
import { ThemeProvider } from "antd-style";

import { Router } from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider appearance="dark">
      <Router />
    </ThemeProvider>
  );
};

export { App };
