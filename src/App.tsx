import React from "react";
import { ThemeProvider } from "antd-style";
import { ConfigProvider, theme } from "antd";
import { AppProvider } from "./contexts";

import { Router } from "./routes";

const App: React.FC = () => {
  const [read, setRead] = React.useState("");
  const [open, setOpen] = React.useState<string[]>([]);

  const onOpenChanged = async (path: string, remove = false) => {
    if (open.includes(path) && remove) {
      setOpen((_state) => _state.filter((p) => p !== path));
      setRead("");
    } else if (path && !open.includes(path)) {
      setOpen((_state) => _state.concat(path));
      const response = await fetch(`${import.meta.env.VITE_RAW_GITHUB_PATH}${path}`);
      setRead(await response.text());
    }
  };

  return (
    <AppProvider value={{ open, read, onOpenChaged: onOpenChanged }}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: { colorPrimary: "#908caa" } }}>
        <ThemeProvider appearance="dark">
          <Router />
        </ThemeProvider>
      </ConfigProvider>
    </AppProvider>
  );
};

export { App };
