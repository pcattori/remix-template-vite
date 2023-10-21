# remix-template-vite

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@nightly --template pcattori/remix-template-vite
```

## Minimal server

Spin up a minimal Vite dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

## Extensible server

🚨 Depends on [unmerged PR][extensible-server-pr]

Remix exposes APIs for integrating Vite with a custom server:

```ts
import {
  unstable_createViteServer,
  unstable_loadViteServerBuild,
} from "@remix-run/dev";
```

In this template, we'll use Express but remember that these APIs can be used with _any_ Node-compatible server setup that supports standard middleware.

---

Spin up the Express server as a dev server:

```shellscript
npm run dev:express
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start:express
```

[remix-vite-docs]: https://remix.run/docs/en/dev/future/vite
[extensible-server-pr]: https://github.com/remix-run/remix/pull/7682
