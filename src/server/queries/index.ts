import { cache } from "react";
import { auth } from "@/auth";
import { db } from "@/server/db";
import type { Prisma, User } from "@prisma/client";

export type LinkWithTags = Prisma.LinksGetPayload<{
  include: { tags: true };
}>;

export interface LinksAndTagsResult {
  limit?: number;
  links: LinkWithTags[];
  tags: Prisma.TagsGetPayload<object>[];
  userData?: Partial<User>;
}

/**
 * Get links with tags by user.
 * Authentication required.
 */
export const getLinksAndTagsByUser = cache(async (): Promise<LinksAndTagsResult | null> => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  try {
    
    const linkData = await db.links.findMany({
      where: {
        creatorId: currentUser.user?.id,
      },
      include: {
        tags: true,
      },
    });

    const tagsData = await db.tags.findMany({
      where: {
        creatorId: currentUser.user?.id,
      },
    });

    return {
      limit: currentUser.user?.limitLinks,
      links: linkData,
      tags: tagsData,
      userData: currentUser.user,
    };
  } catch (error) {
    console.error("🚧 Error while fetching links and tags:", error);
    throw error;
  }
});

/**
 * Get only tags by user.
 * Authentication required.
 */
export const getTagsByUser = cache(async () => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  const tagsData = await db.tags.findMany({
    where: {
      creatorId: currentUser.user?.id,
    },
  });

  return tagsData;
});
