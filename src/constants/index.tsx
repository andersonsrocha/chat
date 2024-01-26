import React from "react";
import { IconFileCode, IconFileTypeTsx } from "@tabler/icons-react";

const menu: Record<string, { icon: React.ReactNode; label: string; redirect: string }> = {
  "/pages/debug/index.tsx": { icon: <IconFileTypeTsx size={16} />, label: "chat.tsx", redirect: "/" },
  ".env": { icon: <IconFileCode size={16} />, label: ".env", redirect: "/" },
};

export { menu };
