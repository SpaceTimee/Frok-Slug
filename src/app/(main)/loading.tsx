import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="my-10 flex w-full items-center justify-center">
      <LoaderIcon className="animate-spin" size={24} />
    </div>
  );
}
