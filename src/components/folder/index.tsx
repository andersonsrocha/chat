"use client";

import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { IconChevronRight, IconFolder } from "@tabler/icons-react";
import { motion } from "framer-motion";
import clx from "classnames";

type ComponentProps = React.PropsWithChildren<{
  defaultOpen?: boolean;
  title: string;
  isSub?: boolean;
  icon?: boolean;
  className?: string;
}>;

const Folder: React.FunctionComponent<ComponentProps> = ({ defaultOpen = false, isSub = false, ...rest }) => {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger
        className={clx("w-full py-1 flex items-center gap-1 hover:text-white focus:text-white", rest.className, {
          "hover:bg-white/5 focus:bg-white/5": rest.icon,
        })}
      >
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ type: "spring", duration: 0.5 }}>
          <IconChevronRight size={16} />
        </motion.div>

        <div hidden={!rest.icon}>
          <IconFolder size={16} />
        </div>

        <div className={clx({ "uppercase font-semibold text-xs": isSub, "text-sm": !isSub })}>{rest.title}</div>
      </Collapsible.Trigger>
      <Collapsible.Content>{rest.children}</Collapsible.Content>
    </Collapsible.Root>
  );
};

export { Folder };
