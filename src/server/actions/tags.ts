"use server";

import type { z } from "zod";
import type { CreateTagSchema } from "@/server/schemas";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

/**
 * Create a tag.
 * Return an object.
 * Authentication required.
 * @type {string()}
 */
export const createTag = async (values: z.infer<typeof CreateTagSchema>) => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  const result = await db.tags.create({
    data: {
      name: values.name,
      color: values.color,
      creatorId: currentUser.user?.id,
    },
  });

  revalidatePath("/");

  return result;
};

/**
 * Insert a tag to a link.
 * Authentication required.
 * @type {string()}
 */
export const insertTagToLink = async (linkId: string, tagId: string) => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  await db.linkTags.create({
    data: {
      linkId,
      tagId,
    },
  });

  revalidatePath("/");

  return;
};

/**
 * Remove a tag.
 * Authentication required.
 * @type {string()}
 */
export const removeTag = async (tagId: string) => {
  const currentUser = await auth();

  if (!currentUser?.user?.id) {
    console.error("Not authenticated.");
    return null;
  }

  const userId = currentUser.user.id;

  await db.$executeRaw`DELETE FROM "LinkTags" WHERE "tagId" = ${tagId}`;

  await db.$executeRaw`DELETE FROM "Tags" WHERE "id" = ${tagId} AND "creatorId" = ${userId}`;

  revalidatePath("/");

  return;
};