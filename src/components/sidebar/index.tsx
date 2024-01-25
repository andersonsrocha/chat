import { Link } from "react-router-dom";
import {
  IconBug,
  IconFileFilled,
  IconGitBranch,
  IconPuzzle,
  IconSearch,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import clx from "classnames";

const Sidebar: React.FunctionComponent<{ pathname: string }> = ({ pathname }) => (
  <div className="bg-[#282c34] rounded-l-xl flex flex-col justify-between px-3 pt-4 pb-6">
    <div className="flex flex-col items-center gap-6">
      <Link to="/">
        <IconFileFilled size={20} className={clx({ "opacity-50": pathname !== "/" })} />
      </Link>
      <IconSearch size={20} className="opacity-50" />
      <IconGitBranch size={20} className="opacity-50" />
      <Link to="/debug">
        <IconBug size={20} className={clx({ "opacity-50": pathname !== "/debug" })} />
      </Link>
      <IconPuzzle size={20} className="opacity-50" />
    </div>

    <div className="flex flex-col items-center gap-6">
      <IconUserCircle size={20} className="opacity-50" />
      <IconSettings size={20} className="opacity-50" />
    </div>
  </div>
);

export { Sidebar };
