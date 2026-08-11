<div align="center">
  <a href="https://lnk.l.cd">
    <img
      src="https://raw.githubusercontent.com/SpaceTimee/Frok-Slug/refs/heads/main/public/images/logo_svg.svg"
      alt="Frok Slug Logo"
      height="64"
    />
  </a>
  <p></p>
  <p>
    <b>
      - A Fork from Slug -
    </b>
  </p>

<a href="https://lnk.l.cd">Dashboard</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="https://github.com/SpaceTimee/Frok-Slug/issues/new/choose">Create issue</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="mailto:Zeus6_6@163.com">Contact</a>

  <div align="center">
  <a href="https://lnk.l.cd">
  <img src="public/images/screenshot_png.png">
  </a>
  <p></p>
  </div>
</div>

## 👨‍🚀 Introduction

[**Frok Slug**](https://lnk.l.cd) is a service that offers to shorten urls in a simple, fast and secure way. It's built with [**T3 Stack**](https://create.t3.gg/), a web development stack made by [**Theo**](https://twitter.com/t3dotgg) focused on simplicity, modularity, and full-stack **typesafety**

This project uses the following technologies:

- [**create-t3-app**](https://create.t3.gg) - The best way to start a full-stack, typesafe Next.js app
- [**Next.js 14 App Router**](https://nextjs.org/) - The React Framework for the Web
- [**Auth.js v5**](https://authjs.dev/) - Authentication for the Web
- [**Prisma**](https://prisma.io) - A next-generation Node.js and TypeScript ORM
- [**Turso**](https://turso.tech/) (SQLite) + [**libSQL**](https://github.com/tursodatabase/libsql) - SQLite for Production
- [**Next.js Server Actions**](https://nextjs.org/docs/api-reference/server-actions) - Asynchronous functions that are executed on the server
- [**TailwindCSS**](https://tailwindcss.com) + [**shadcn/ui**](https://ui.shadcn.com) & [**Radix Primitives**](https://www.radix-ui.com) - Design System
- [**Prettier**](https://prettier.io) with [**prettier-plugin-tailwindcss**](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - Code Formatter
- [**Lucide Icons**](https://lucide.dev) + [**svgl**](https://svgl.app) - Beautiful SVG icons & logos for the web

> ⚠️ This is a community project, not associated with [Vercel](https://vercel.com/)

## 🚀 Getting Started

**Requirements:**

- [x] [Node.js](https://nodejs.org) (+v18.x) installed
- [x] [pnpm](https://pnpm.io) (v8+) installed
- [x] [Turso CLI](https://docs.turso.tech/cli/install) installed (for Windows users, it's necessary to [activate WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install))
- [x] [Visual Studio Code](https://code.visualstudio.com) with the recommended extensions installed (ESLint, Prettier, Tailwind CSS IntelliSense)

**Steps:**

1. Fork this project:

- [Click here](https://github.com/SpaceTimee/Frok-Slug/fork)

2. Clone the repository:

```bash
git clone git@github.com:YOU_USER/Frok-Slug.git
```

3. Install dependencies:

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# and install dependencies:
pnpm install
```

4. Create a **.env** file with the following content:

> 🚧 The environment variables must match the following [schema](https://github.com/SpaceTimee/Frok-Slug/blob/main/src/env.mjs#L8)

```bash
# Database:
DATABASE_URL= # "file:./dev.db"
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=

# Auth.js =>
AUTH_SECRET=

# Github Provider =>
GITHUB_ID=
GITHUB_CLIENT_SECRET=

# Google Provider =>
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

**Database:**

- [**Create** a new database with Turso](https://docs.turso.tech/cli/db/create)
- [Get Turso **Auth Token**](https://docs.turso.tech/cli/auth/token)
- [Get Turso **Database URL**](https://docs.turso.tech/cli/db/show)

**Auth.js:**

- [Get Auth.js **Secret**](https://authjs.dev/getting-started/installation#setup-environment)
- `AUTH_URL` is the URL of your Auth.js API, for example, `/api/auth`. You can change it in the [**`auth.ts` file**](https://github.com/SpaceTimee/Frok-Slug/blob/main/src/auth.ts#L20)

**Github Credentials:**

- [Create a new OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

**Google Credentials:**

- [Create a new OAuth 2.0 App from Google API Console](https://developers.google.com/identity/protocols/oauth2#1.-obtain-oauth-2.0-credentials-from-the-dynamic_data.setvar.console_name-)

5. Generate a new migration file with Prisma:

```bash
pnpm db:migrate
```

6. Insert the migration data into the Turso database. To do this, go to `package.json`, modify the `db:push` command with the name of the migration folder (2024**_xxxxxxxxxx_**\_init) and run it in your terminal:

```bash
pnpm db:push
```

7. Run:

- Development server:

```bash
pnpm dev
```

and open [http://localhost:3000](http://localhost:3000) with your browser 🚀

- Prisma Studio:

```bash
pnpm db:studio
```

and open [http://localhost:5555](http://localhost:5555) with your browser ✨

## 🌿 Upstream Repository

- 🔗 [pheralb/slug](https://github.com/pheralb/slug)

## ☁️ Deploy on Vercel

- ✅ [lnk.l.cd](https://lnk.l.cd/)
- ✅ [0k.l.cd](https://0k.l.cd/)

## 🔑 License

- [GPL-3.0 license](https://github.com/SpaceTimee/Frok-Slug/blob/main/LICENSE)
