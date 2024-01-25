import React from "react";
import { IconDots, IconFileTypeTsx } from "@tabler/icons-react";

import { Document, Folder } from "..";

const Explorer: React.FunctionComponent = () => (
  <div className="bg-[#21252b] text-[#908caa] flex-1 py-2 px-4">
    <div className="font-medium text-xs pl-2 flex items-center justify-between">
      <div>EXPLORER</div>
      <div className="p-1 rounded-md cursor-pointer hover:bg-[#282c34]">
        <IconDots size={16} />
      </div>
    </div>

    <div className="mt-4 flex flex-col">
      <Folder title="Open editors" isSub></Folder>

      <Folder title="Chat" isSub defaultOpen className="flex flex-col">
        <Folder title="Public" icon />
        <Folder title="App" defaultOpen icon>
          <Document title="chat.tsx" src="/pages/debug/index.tsx" icon={<IconFileTypeTsx size={16} />} />
        </Folder>
      </Folder>
    </div>
  </div>
);

export { Explorer };
