import React from "react";

const onOpenChaged = (a: string, b?: boolean) => console.log(a, b);

const App = React.createContext<{ open: string[]; read: string; onOpenChaged: (p: string, r?: boolean) => void }>({
  open: [],
  read: "",
  onOpenChaged,
});

const AppProvider = App.Provider;
const AppConsumer = App.Consumer;
const AppContext = App;

export { AppProvider, AppConsumer, AppContext };
