/**
 * 🌱 These routes are public.
 * 🔓 Not required for authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/check"];

export const authRoutes = [
  "/auth",
];

/**
 * 🌱 These routes are protected.
 * 🔒 Required authentication.
 * @type {string[]}
 */
export const protectedRoutes = ["/settings"];

/**
 * 🌱 These routes are used for the check slug.
 * ✍️ Only type the prefix, with "/".
 * 🔓 Not required for authentication.
 * @type {string[]}
 */
export const checkRoutesPrefix = "/check";

/**
 * 🌱 These prefix for API authentication routes.
 * ✍️ Routes that start with this prefix are used for API authentication purposes.
 * 🔓 Not required for authentication.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * 🌱 The default redirect URL after logging in.
 * 🔓 Not required for authentication.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT_URL = "/";
