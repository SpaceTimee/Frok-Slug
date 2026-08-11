import { TypographyH4 } from "@/ui/typography";
import type { ReactNode } from "react";

interface SettingsCardProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const SettingsCard = (props: SettingsCardProps) => {
  return (
    <div className="flex w-full flex-col rounded-md border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-6 flex flex-col space-y-1 rounded-md">
        <div className="flex items-center space-x-2">
          <TypographyH4 className="my-0">{props.title}</TypographyH4>
        </div>
        <p className="text-sm opacity-70">{props.description}</p>
      </div>
      {props.children}
    </div>
  );
};

export default SettingsCard;
