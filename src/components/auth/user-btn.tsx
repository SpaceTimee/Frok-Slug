import Image from "next/image";
import { buttonVariants } from "@/ui/button";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import Avatar from "boring-avatars";
import UserMenu from "./user-menu";
import { SignOut } from "./sign-out";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return null;

  const { name, email, image } = session.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        name={name ?? "User Menu"}
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
        })}
      >
        {image ? (
          <Image
            src={image}
            alt={name ?? "Avatar"}
            width={24}
            height={24}
            unoptimized
            className="h-6 w-6 rounded-full object-cover"
          />
        ) : (
          name && <Avatar size={22} name={name} variant="beam" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-neutral-400">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <UserMenu />
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
