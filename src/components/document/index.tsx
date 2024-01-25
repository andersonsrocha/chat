import React from "react";

import { AppContext } from "../../contexts";

type ComponentProps = {
  icon?: React.ReactNode;
  title: string;
  src: string;
};

const Document: React.FC<ComponentProps> = ({ title, icon, src }) => {
  const { onOpenChaged } = React.useContext(AppContext);

  return (
    <div
      className="w-full cursor-pointer py-1 pr-1 flex items-center gap-1 text-sm hover:text-white hover:bg-white/5"
      onClick={() => onOpenChaged(src)}
    >
      <div>{icon && icon}</div>
      <div>{title}</div>
    </div>
  );
};

export { Document };
