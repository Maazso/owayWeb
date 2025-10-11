# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Oway" - an AI-powered email assistant/productivity accelerator website built with Astro. The project is based on the Astroship template but has been customized for the Oway product (oway.live).

## Development Commands

```bash
# Install dependencies (pnpm is recommended)
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Preview production build (uses Deno)
npm run preview
# or
deno run --allow-net --allow-read --allow-env ./dist/server/entry.mjs
```

## Architecture

### Framework & Stack
- **Astro v3.5+** - Static Site Generator with islands architecture
- **TailwindCSS** - Utility-first CSS framework (configured in `tailwind.config.cjs`)
- **TypeScript** - Type safety enabled with path aliases
- **MDX** - Markdown with JSX support for blog content

### Path Aliases
The project uses TypeScript path aliases configured in `tsconfig.json`:
- `@lib/*` → `src/lib/*`
- `@utils/*` → `src/utils/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@assets/*` → `src/assets/*`
- `@pages/*` → `src/pages/*`

### Directory Structure

**`src/pages/`** - File-based routing
- Each `.astro` file becomes a route based on filename
- Dynamic routes use `[slug].astro` pattern
- Main pages: `index.astro`, `pricing.astro`, `contact.astro`, `about.astro`, `blog.astro`

**`src/components/`** - Reusable Astro components
- Main components: `hero.astro`, `features.astro`, `footer.astro`, `navbar/`, `pricing.astro`, `contactform.astro`
- UI primitives in `ui/` subdirectory (buttons, links, icons)

**`src/layouts/`** - Layout templates
- `Layout.astro` - Main layout with SEO, navbar, footer
- `BlogLayout.astro` - Blog post layout

**`src/content/`** - Content Collections
- `blog/` - Blog posts in MDX/MD format
- `team/` - Team member profiles
- `config.ts` - Defines collection schemas using Zod

**`src/assets/`** - Images and static assets for the site

**`src/utils/`** - Utility functions
- `all.js` - Contains `getFormattedDate()` for date formatting

### Content Collections

The site uses Astro Content Collections for type-safe content management:

**Blog Collection Schema:**
- `draft`: boolean
- `title`, `snippet`: strings
- `image`: object with `src` and `alt`
- `publishDate`: string (transformed to Date)
- `author`: string (defaults to "Astroship")
- `category`: string
- `tags`: string array

**Team Collection Schema:**
- `draft`: boolean
- `name`, `title`: strings
- `avatar`: object with `src` and `alt`
- `publishDate`: string (transformed to Date)

### Site Configuration

**`astro.config.mjs`**
- Site URL: `https://oway.live`
- Integrations: Tailwind, MDX, Sitemap
- No custom output configuration (defaults to static)

**Layout (`src/layouts/Layout.astro`)**
- Uses `astro-seo` for SEO/OpenGraph tags
- Default title: "Oway - Productivity Accelerator"
- Background color: `#EDE6DC`
- Font: Inter Variable

### Styling

- TailwindCSS with `@tailwindcss/typography` plugin
- Inter Variable font loaded via `@fontsource-variable/inter`
- Custom background color set inline on body
- Global optimization: `content-visibility: auto` on images for performance

### Deployment

The project includes configuration for:
- AWS Amplify (`astro-aws-amplify` dependency)
- Deno runtime for preview (see preview command)
- Static output suitable for Vercel/Netlify

## Notes

- Images use Cloudinary integration (`cloudinary` package in dependencies)
- Sharp is used for image optimization
- Icon system powered by `astro-icon`
- Navbar component uses `astro-navbar` package
