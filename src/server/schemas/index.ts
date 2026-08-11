import z from "zod";
import {
  publicRoutes,
  authRoutes,
  protectedRoutes,
  apiAuthPrefix,
  checkRoutesPrefix,
} from "@/routes";

export const LinkSchema = z.object({
  id: z.number(),
  url: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  tagId: z.number().optional(),
});

const isSystemReservedSlug = (slug: string) =>
  [
    ...publicRoutes,
    ...authRoutes,
    ...protectedRoutes,
    apiAuthPrefix,
    checkRoutesPrefix,
  ].some((r) => r.split("/")[1]?.toLowerCase() === slug.toLowerCase().trim());

export const CreateLinkSchema = z.object({
  url: z
    .string()
    .min(1, { message: "URL is required." })
    .url({
      message: "Please enter a valid URL (e.g. https://example.com).",
    })
    .regex(/^(?!.*(?:http|https):\/\/(?:lnk\.l\.cd|0k\.l\.cd)).*$/, {
      message: "Cannot redirect to a Frok Slug URL.",
    })
    .regex(/^\S+$/, {
      message: "URL cannot contain spaces.",
    }),
  slug: z
    .string()
    .min(4, {
      message: "Short link must be at least 4 characters.",
    })
    .regex(/^[a-zA-Z0-9_-]*$/, {
      message:
        "Short link can only contain letters, numbers, hyphens, and underscores.",
    })
    .regex(/^(?!.*&c$)/, {
      message: "Short link cannot end with &c.",
    })
    .refine((val) => !isSystemReservedSlug(val), {
      message: "This short link is reserved by the system.",
    }),

  description: z
    .string()
    .max(100, { message: "Description cannot exceed 100 characters." }),
});

export const EditLinkSchema = z.object({
  id: z.string(),
  url: z
    .string()
    .min(1, { message: "URL is required." })
    .regex(/^(?!.*(?:http|https):\/\/(?:lnk\.l\.cd|0k\.l\.cd)).*$/, {
      message: "Cannot redirect to a Frok Slug URL.",
    })
    .regex(/^\S+$/, {
      message: "URL cannot contain spaces.",
    }),
  slug: z
    .string()
    .min(4, {
      message: "Short link must be at least 4 characters.",
    })
    .regex(/^[a-zA-Z0-9_-]*$/, {
      message:
        "Short link can only contain letters, numbers, hyphens, and underscores.",
    })
    .regex(/^(?!.*&c$)/, {
      message: "Short link cannot end with &c.",
    })
    .refine((val) => !isSystemReservedSlug(val), {
      message: "This short link is reserved by the system.",
    }),
  description: z
    .string()
    .max(100, { message: "Description cannot exceed 100 characters." }),
});

export const DeleteLinkSchema = z.object({
  slug: z.string().min(1, { message: "Short link is required." }),
});

export const getSingleLinkSchema = z.object({
  linkId: z.number(),
});

export const CreateTagSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Tag name is required." })
    .max(15, { message: "Tag name cannot exceed 15 characters." }),
  color: z.string().min(1, { message: "Tag color is required." }),
});

export const UpdateProfileSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(40, { message: "Name cannot exceed 40 characters." }),
  username: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type LinkSchema = z.TypeOf<typeof LinkSchema>;
export type CreateLinkInput = z.TypeOf<typeof CreateLinkSchema>;
export type EditLinkInput = z.TypeOf<typeof EditLinkSchema>;
export type UpdateProfileInput = z.TypeOf<typeof UpdateProfileSchema>;
