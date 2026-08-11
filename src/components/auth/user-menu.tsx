"use client";

import { DropdownMenuItem } from "@/ui/dropdown-menu";
import {
  ArrowUpRight,
  BugIcon,
  Mail,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

const UserMenu = () => {
  const iconSize = 15;

  return (
    <>
      <DropdownMenuItem asChild>
        <Link href="/settings">
          <SettingsIcon size={iconSize} />
          <span>Settings</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem
        asChild
        className="flex w-full items-center justify-between"
      >
        <Link
          href="https://github.com/SpaceTimee/Frok-Slug/issues/new/choose"
          target="_blank"
        >
          <div className="flex items-center space-x-3">
            <BugIcon size={iconSize} />
            <span>Report a bug</span>
          </div>
          <ArrowUpRight size={iconSize} className="opacity-40" />
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem
        asChild
        className="flex w-full items-center justify-between"
      >
        <Link href="mailto:Zeus6_6@163.com" target="_blank">
          <div className="flex items-center space-x-3">
            <Mail size={iconSize} />
            <span>Contact</span>
          </div>
          <ArrowUpRight size={iconSize} className="opacity-40" />
        </Link>
      </DropdownMenuItem>
    </>
  );
};

export default UserMenu;
