import { Outlet, useLocation } from "react-router-dom";

import { Explorer, Sidebar } from "../components";

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <main className="bg-[#21252b] text-white h-screen w-screen p-10 flex items-center justify-center">
      <div className="bg-[#282c34] relative border border-[#181a1f] w-full h-full shadow-md shadow-black/20 rounded-xl grid grid-cols-12">
        <div className="col-span-3 flex">
          <Sidebar pathname={pathname} />

          <Explorer />
        </div>

        <div className="col-span-9 bg-[#282c34] rounded-r-xl overflow-hidden">
          <Outlet />
        </div>

        <div className="h-4 w-full bg-[#21252b] rounded-b-xl absolute bottom-0"></div>
      </div>
    </main>
  );
};

export { Layout };
