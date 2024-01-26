import React from "react";
import { IconDots, IconFileTypeTsx, IconX } from "@tabler/icons-react";

import { Document, Folder } from "..";
import { AppContext } from "../../contexts";
import { menu } from "../../constants";

const Explorer: React.FunctionComponent = () => {
  const { open, onOpenChaged } = React.useContext(AppContext);

  return (
    <div className="bg-[#21252b] text-[#908caa] flex-1 py-2 px-4">
      <div className="font-medium text-xs pl-2 flex items-center justify-between">
        <div>EXPLORER</div>
        <div className="p-1 rounded-md cursor-pointer hover:bg-[#282c34]">
          <IconDots size={16} />
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <Folder title="Open editors" isSub defaultOpen>
          {open.map((p) => (
            <div
              key={p}
              className="font-medium w-full cursor-pointer py-1 px-1 flex items-center gap-1 text-sm hover:text-white hover:bg-white/5 focus:text-white focus:bg-white/5"
            >
              <IconX
                size={20}
                onClick={() => onOpenChaged(p, true)}
                className="p-1 cursor-pointer rounded-md hover:bg-white/5"
              />
              {menu[p].icon}
              <span className="px-1">{menu[p].label}</span>
            </div>
          ))}
        </Folder>

        <Folder title="Chat" isSub defaultOpen>
          <div className="flex flex-col">
            <Folder title="Public" icon className="px-2" />
            <Folder title="App" defaultOpen icon className="px-2">
              <Document
                title="chat.tsx"
                src="/pages/debug/index.tsx"
                icon={<IconFileTypeTsx size={16} />}
                className="px-7"
              />
            </Folder>
          </div>
        </Folder>
      </div>
    </div>
  );
};

export { Explorer };
