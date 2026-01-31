# blog2

Personal site and blog for Tóth Márk Zoltán, built with SvelteKit.

## Tech Stack

- **SvelteKit** - Full-stack framework
- **Svelte 5** - UI framework with runes
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **mdsvex** - Markdown processing for blog posts
- **adapter-static** - Static site generation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Blog Posts

1. Create a new `.md` file in `src/posts/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2026-01-31"
tags: ["tag1", "tag2"]
published: true
---

# Your Post Title

Content goes here...
```

3. Commit and push to `main` branch
4. GitHub Actions will automatically build and deploy

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte    # Base layout with nav/footer
│   ├── +page.svelte      # Homepage
│   ├── cv/               # CV page
│   └── blog/             # Blog pages
│       ├── +page.svelte  # Blog index
│       ├── [slug]/       # Individual posts
│       └── tag/[tag]/    # Posts by tag
├── lib/
│   ├── components/       # Reusable Svelte components
│   ├── data/cv.ts        # CV data
│   └── utils/posts.ts    # Blog post utilities
└── posts/                # Markdown blog posts
```

## Deployment

The site is deployed to GitHub Pages automatically on push to `main`. The workflow is defined in `.github/workflows/deploy.yml`.

To deploy manually:
1. Go to Actions tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## License

MIT
