import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { env } from "./env.mjs";

const isProd = process.env.NODE_ENV === "production";
const cookiePrefix = isProd ? "__Secure-" : "";
const cookieDomain = isProd ? ".l.cd" : undefined;

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  secure: isProd,
  domain: cookieDomain,
};

const createCookie = (name: string, httpOnly = true) => ({
  name: `${cookiePrefix}${name}`,
  options: { ...cookieOptions, httpOnly },
});

export default {
  cookies: {
    sessionToken: createCookie("authjs.session-token"),
    callbackUrl: createCookie("authjs.callback-url", false),
    csrfToken: createCookie("authjs.csrf-token"),
  },
  providers: [
    Google({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
