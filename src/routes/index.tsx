import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "../layout";
import { Home } from "../pages/home";
import { Debug } from "../pages/debug";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="debug" element={<Debug />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
