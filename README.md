# Sandwich™ Pro — DMaaS Pricing Portal

**Deli Meat-as-a-Service** — pronounced **DUM-ass**.

A refrigerated enterprise SaaS parody built with React, Vite, Tailwind CSS, and lucide-react. Includes the four-tier procurement monstrosity, Deploy Ham button, console boot sequence, legal memo, architectural comparison table, and local Sandwich™ promo image.

## Run locally

Prerequisites: Node.js 20+

```bash
npm ci
npm run dev
```

Open the local URL Vite prints in the terminal, usually:

```text
http://localhost:3000
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

This zip is ready for GitHub Pages using GitHub Actions.

1. Create a new GitHub repository.
2. Upload or commit the **contents of this folder** to the repository root. Do not nest everything inside an extra folder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` or `master`, or run the workflow manually from the **Actions** tab.
6. After the workflow finishes, GitHub will show the live Pages URL.

## Notes

- No Gemini API key is required; this is a static web app.
- `vite.config.ts` uses `base: './'` so the built assets work on project pages, user pages, and custom domains.
- `public/.nojekyll` is included so GitHub Pages serves Vite assets plainly.
- The sandwich hero image is bundled locally at `public/sandwich-pro-promo.png`, so the page does not depend on the temporary AI Studio image URL.

## Scripts

```bash
npm run dev       # start dev server
npm run build     # build static site into dist/
npm run preview   # preview built site
npm run typecheck # TypeScript check
npm run clean     # remove dist/
```
