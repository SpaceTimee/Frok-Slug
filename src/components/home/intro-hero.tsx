"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TypographyH1, TypographyP } from "@/ui/typography";

interface IntroHeroProps {
  isLoggedIn: boolean;
}

export default function IntroHero({ isLoggedIn }: IntroHeroProps) {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    const timer = setTimeout(() => {
      router.replace("/auth");
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, router]);

  const handleSkip = () => {
    if (isLoggedIn) return;
    router.replace("/auth");
  };

  if (isLoggedIn) return null;

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[999] flex w-full min-h-screen cursor-pointer flex-col items-center justify-center bg-white dark:bg-neutral-900"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-neutral-900"></div>
      <section
        id="hero"
        className="flex flex-col items-center px-6 text-center"
      >
        <TypographyH1 className="max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
          Short Links Unite Globally
        </TypographyH1>
        <TypographyP className="max-w-[75ch] text-sm duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6">
          Create, manage, and share short links with a fast, secure, and easy way
        </TypographyP>
      </section>
    </div>
  );
}
