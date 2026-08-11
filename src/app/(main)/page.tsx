import type { Metadata } from "next";

import { auth } from "@/auth";
import { getLinksAndTagsByUser, type LinkWithTags } from "@/server/queries";

import CardLink from "@/components/links/card-link";
import SearchLinks from "@/components/links/search-link";
import { CreateLink } from "@/components/links/create-link";
import { Button } from "@/ui/button";
import { PackageOpenIcon, PlusIcon, SparklesIcon } from "lucide-react";
import SearchTag from "@/components/tags/search-tags";
import LinksLimit from "@/components/links/links-limit";
import UserBlocked from "@/components/settings/userBlocked";
import IntroHero from "@/components/home/intro-hero";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    tag?: string;
  };
}) => {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  const data = isLoggedIn ? await getLinksAndTagsByUser() : null;
  const searchLink = searchParams?.search;
  const searchTag = searchParams?.tag;

  const filteredLinks = (data?.links ?? []).filter((link: LinkWithTags) => {
    if (!searchLink && !searchTag) return true;

    // Filter links by search slug
    const matchSlug =
      !searchLink || link.slug.toLowerCase().includes(searchLink.toLowerCase());

    // Filter links by search tag
    const matchTag =
      !searchTag || link.tags.some((tag: { tagId: string }) => tag.tagId === searchTag);

    return matchSlug && matchTag;
  });

  return (
    <>
      <IntroHero isLoggedIn={isLoggedIn} />
      {isLoggedIn && data && (
        <main className="w-full duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
        {data.userData?.blocked && <UserBlocked className="mb-3" />}
        <header className="mb-3 flex w-full items-center space-x-2 md:justify-between">
          <SearchLinks className="w-full md:w-72 md:max-w-72" />
          <div className="flex items-center space-x-2">
            <LinksLimit userLinks={data.links.length} maxLinks={data.limit ?? 30} />
            <SearchTag
              tags={data.tags}
              tagSelected={searchTag!}
              tagName={searchTag}
            />
            <CreateLink tags={data.tags}>
              <Button size="sm">
                <PlusIcon size={14} />
                <span className="hidden sm:inline">Create Link</span>
              </Button>
            </CreateLink>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2">
          {filteredLinks
            .sort((a: LinkWithTags, b: LinkWithTags) => {
              return (
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              );
            })
            .map((link: LinkWithTags) => {
              return (
                <CardLink
                  key={link.id}
                  linkInfo={link}
                  linkTags={link.tags}
                  tagsInfo={data.tags}
                />
              );
            })}
        </div>
        {filteredLinks.length === 0 && (
          <div className="mt-4 flex flex-col items-center justify-center space-y-3 text-center">
            {searchLink ? (
              <PackageOpenIcon size={48} strokeWidth={0.5} />
            ) : (
              <SparklesIcon size={48} strokeWidth={0.5} />
            )}
            {searchLink ? (
              <p>
                No links found with{" "}
                <span className="font-mono">{searchLink}</span> slug
              </p>
            ) : (
              <p>
                {searchTag ? "No links found with this tag" : "No links found"}
              </p>
            )}
            <CreateLink tags={data.tags} slug={searchLink}>
              <Button variant="outline">
                <PlusIcon size={14} />
                <span>
                  {searchLink
                    ? `Create a link with ${searchLink} slug`
                    : "Create a new link"}
                </span>
              </Button>
            </CreateLink>
          </div>
        )}
      </main>
      )}
    </>
  );
};

export default DashboardPage;
