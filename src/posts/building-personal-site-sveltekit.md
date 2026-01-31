---
title: "Building a Personal Site with SvelteKit and mdsvex"
description: "How I built this site using SvelteKit, Tailwind CSS, and mdsvex - turning a GitHub repository into a CMS for my blog."
date: "2026-01-30"
tags: ["sveltekit", "web-development", "tutorial"]
published: true
---

When I decided to build a personal site, I had a few requirements:

1. **Static site** - fast, cheap to host, SEO-friendly
2. **Markdown blog** - write posts in markdown, no CMS needed
3. **Modern stack** - TypeScript, Tailwind, component-based
4. **Simple deployment** - push to GitHub, site updates automatically

SvelteKit with mdsvex turned out to be the perfect solution.

## The Tech Stack

- **SvelteKit** - Full-stack framework with excellent DX
- **Svelte 5** - The latest version with runes and improved reactivity
- **mdsvex** - Markdown preprocessor that integrates seamlessly
- **Tailwind CSS** - Utility-first styling
- **GitHub Pages** - Free, reliable static hosting

## How It Works

The blog uses a simple but powerful pattern: markdown files in a `posts` folder become pages at build time. Each file's frontmatter contains metadata like title, date, and tags.

```typescript
// Load all posts
const modules = import.meta.glob('/src/posts/*.md');
```

GitHub Actions handles the build and deploy on every push. The repository itself becomes the CMS - create a new `.md` file, commit, and the site updates.

## Conclusion

This setup gives me the best of both worlds: the simplicity of static HTML with the power of a modern framework. No database, no CMS login, just git and markdown.
