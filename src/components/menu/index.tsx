import React from "react";
import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";

import { AppContext } from "../../contexts";
import { menu } from "../../constants";

const Menu: React.FC = () => {
  const { open, onOpenChaged } = React.useContext(AppContext);

  return (
    <div className="flex">
      {open.map((p) => (
        <Link
          key={p}
          to={menu[p].redirect}
          className="bg-[#817c9c14] font-medium text-xs px-2 py-2 rounded-t-md w-fit flex items-center gap-2 hover:bg-[#817c9c26] focus:bg-[#817c9c26] focus:shadow-md"
        >
          <div>{menu[p].icon}</div>
          <div>{menu[p].label}</div>
          <IconX
            size={20}
            onClick={() => onOpenChaged(p, true)}
            className="p-1 cursor-pointer rounded-md hover:bg-white/5"
          />
        </Link>
      ))}
    </div>
  );
};

export { Menu };
