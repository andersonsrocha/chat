import React from "react";
import { Link } from "react-router-dom";
import clx from "classnames";

import { AppContext } from "../../contexts";

type ComponentProps = {
  icon?: React.ReactNode;
  title: string;
  src: string;
  className?: string;
};

const Document: React.FC<ComponentProps> = ({ title, icon, src, className }) => {
  const { onOpenChaged } = React.useContext(AppContext);

  return (
    <Link
      to="/"
      className={clx(
        "w-full cursor-pointer py-1 pr-1 flex items-center gap-1 text-sm hover:text-white hover:bg-white/5 focus:text-white focus:bg-white/5",
        className
      )}
      onClick={() => onOpenChaged(src)}
    >
      <div>{icon && icon}</div>
      <div>{title}</div>
    </Link>
  );
};

export { Document };
