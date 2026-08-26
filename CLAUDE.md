# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page political campaign site for Dr. Marcos Adriano (pré-candidato a deputado estadual, PDT, Bahia — number 12999). Built with v0 (`generator: 'v0.app'` in metadata) and Next.js App Router. All content is in Portuguese (pt-BR).

## Commands

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- No lint, test, or typecheck scripts are defined in `package.json`. `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so the production build does not fail on type errors.

## Architecture

- **Single page, single file**: essentially the entire site lives in [app/page.tsx](app/page.tsx) as one large client component (`'use client'`). Sections (hero, story, timeline, quote, priorities, manifesto, support form, social CTA, footer) are inline JSX within one `<main>`, not split into separate components.
- **Content-as-data**: copy that repeats across markup (the `milestones` timeline array, the `priorities` cards, the `images` map of hero/portrait/street/etc.) is defined as plain JS objects/arrays at the top of `page.tsx` and mapped over. Edit content there rather than in the JSX for repeated sections.
- **Images are external URLs**: all images point to `hebbkx1anhila5yf.public.blob.vercel-storage.com` (Vercel Blob), not local files under `public/`. `next.config.mjs` sets `images.unoptimized: true`, so `next/image` optimization is bypassed — plain `<img>` tags are used directly in `page.tsx`.
- **Scroll-reveal animation**: the `useReveal()` hook in `page.tsx` wires an `IntersectionObserver` that toggles an `is-visible` class on elements with `.reveal` / `.reveal-section` when they enter the viewport; the actual transition (opacity/transform) is defined in `globals.css`. Any new animated section needs both the class on the element and the corresponding CSS rule.
- **Styling is hand-written CSS, not utility classes**: despite Tailwind v4 + shadcn being configured (`components.json`, `tailwind-merge`, `class-variance-authority`), the page markup uses bespoke, semantic class names (e.g. `.hero-section`, `.timeline-card`, `.priority-grid`) defined in [app/globals.css](app/globals.css) as long minified/dense CSS blocks organized by section, with responsive overrides grouped near the bottom (`@media(max-width:800px)`, `@media(max-width:420px)`) rather than inline per-rule. `lib/utils.ts` (`cn()`) and `components/ui/button.tsx` exist from the shadcn scaffold but are not used by `page.tsx`.
- **shadcn setup**: `components.json` uses style `base-nova`, base color `neutral`, no class prefix, icon library `lucide`. Path aliases (`@/components`, `@/lib`, `@/hooks`, `@/components/ui`) are configured in both `components.json` and `tsconfig.json` but only `@/lib/utils` style aliasing would apply if new shadcn components are added.
- **Analytics**: `@vercel/analytics` is mounted in [app/layout.tsx](app/layout.tsx), gated to `NODE_ENV === 'production'` only.
- **Legal/compliance placeholders**: the support form and footer contain explicit Portuguese notes that legal text, committee data, and CNPJ info still need to be reviewed/inserted by the campaign's legal team before publishing — do not remove these placeholders without confirming with the user.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
