"use client";

import React from "react";
import { IconDots } from "@tabler/icons-react";

import { Folder } from "..";

type ComponentProps = {};

const Explorer: React.FunctionComponent<ComponentProps> = () => {
  return (
    <div className="bg-[#21252b] flex-1 py-4">
      <div className="flex flex-col gap-2 px-2">
        <div className="flex justify-between items-center px-5 text-xs">
          <div>EXPLORER</div>
          <div className="p-1 rounded-md cursor-pointer hover:bg-[#282c34]">
            <IconDots size={14} />
          </div>
        </div>

        <Folder title="Open editors" isSub></Folder>

        <Folder title="Chat" isSub className="flex flex-col gap-1">
          <Folder title="public" icon />
          <Folder title="src" icon>
            <Folder title="chat" icon></Folder>
          </Folder>
        </Folder>
      </div>
    </div>
  );
};

export { Explorer };
