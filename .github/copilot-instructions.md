# Copilot Instructions

Personal blog built with SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, and mdsvex. Static site deployed to GitHub Pages.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run check        # Type check with svelte-check
```

## Architecture

### Blog Post System
- Posts are markdown files in `src/posts/` with frontmatter (title, description, date, tags, published)
- mdsvex processes `.md` files as Svelte components (configured in `svelte.config.js`)
- `$lib/utils/posts.ts` provides utilities: `getPosts()`, `getPostsByTag()`, `getAllTags()`
- Dynamic routes: `/blog/[slug]` loads posts, `/blog/tag/[tag]` filters by tag

### Static Generation
- `adapter-static` prerenders all routes (`prerender: true` in root layout)
- Base path is `/personal-site` in production (configured in `svelte.config.js`)
- Always use `{base}` from `$app/paths` for internal links

### Styling
- Tailwind 4 with CSS-based theme in `src/app.css` (uses `@theme` block)
- Custom colors: `dark`, `light`, `accent-green`, `accent-blue`, `accent-amber`, `muted`
- Blog content uses `.prose` classes with custom typography styles

## Conventions

### Svelte 5 Runes
This project uses Svelte 5 runes syntax:
- `$props()` for component props
- `$state()` for reactive state
- `{@render children()}` for slot content

### Component Organization
- Reusable components in `$lib/components/` with barrel export via `index.ts`
- Import pattern: `import { Header, Footer } from '$lib/components'`

### Adding Blog Posts
Create `src/posts/your-post.md` with frontmatter:
```markdown
---
title: "Post Title"
description: "Brief description"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
published: true
---
```
Set `published: false` to hide a draft.
