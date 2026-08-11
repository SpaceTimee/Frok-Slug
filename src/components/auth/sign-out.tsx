"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";

export function SignOut() {
  const iconSize = 15;

  return (
    <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/auth" })}>
      <LogOutIcon size={iconSize} />
      <span>Log Out</span>
    </DropdownMenuItem>
  );
}
