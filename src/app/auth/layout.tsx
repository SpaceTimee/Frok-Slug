import { cn } from "@/utils";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <main
      className={cn(
        "relative flex min-h-[calc(100vh-4.5rem)] w-full flex-col items-center justify-center",
      )}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-neutral-900"></div>
      <div className="flex w-full flex-col items-center justify-center">
        {props.children}
      </div>
    </main>
  );
};

export default AuthLayout;
