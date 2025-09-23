# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HumansConnect.ai is a SvelteKit 5.0 application for an AI-powered matching platform that connects like-minded people across romance, business, creative, and athletic domains. The project is configured as a static site with comprehensive SEO optimization and structured data.

## Technology Stack

- **Framework**: SvelteKit 5.0 with runes and reactive components
- **Styling**: TailwindCSS v4 with Typography plugin
- **TypeScript**: Strict type checking with Svelte integration
- **Build Tool**: Vite 7.0 with SvelteKit adapter-static
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **Linting**: ESLint 9.x with TypeScript and Svelte support
- **Formatting**: Prettier with Svelte and Tailwind plugins
- **Package Manager**: pnpm

## Development Commands

### Development
```bash
pnpm install            # Install dependencies
pnpm dev                # Start development server
pnpm build              # Build for production
pnpm preview            # Preview production build
```

### Code Quality
```bash
pnpm check              # Type checking with svelte-check
pnpm check:watch        # Type checking in watch mode
pnpm format             # Format code with Prettier
pnpm lint               # Run ESLint and Prettier checks
```

### Testing
```bash
pnpm test:unit          # Run unit tests with Vitest
pnpm test:e2e           # Run E2E tests with Playwright
pnpm test               # Run both unit and E2E tests
```

### SvelteKit Specific
```bash
pnpm prepare            # Sync SvelteKit types
```

## Project Structure

```
src/
├── app.css             # Global styles with TailwindCSS
├── app.d.ts            # SvelteKit type definitions
├── app.html            # Main HTML template
├── lib/                # Shared utilities and constants
│   ├── assets/         # Static assets (favicon, etc.)
│   ├── constants.ts    # All application constants and metadata
│   └── index.ts        # Library exports
└── routes/             # SvelteKit file-based routing
    ├── +layout.svelte  # Root layout with favicon setup
    ├── +layout.ts     # Layout server logic
    ├── +page.svelte   # Homepage with comprehensive SEO
    ├── sitemap.xml/    # Dynamic sitemap generation
    └── *.spec.ts      # Component tests
```

## Key Architecture Patterns

### 1. Constants-Driven Architecture
All application metadata, SEO content, and configuration is centralized in `src/lib/constants.ts`:
- App metadata (name, description, version)
- URL constants and file paths
- Meta properties and content for SEO
- Schema.org structured data
- Feature descriptions and hero content
- Performance optimization settings

### 2. Comprehensive SEO Implementation
The homepage includes extensive SEO optimization:
- JSON-LD structured data for SoftwareApplication, Organization, WebSite, and WebPage
- Open Graph and Twitter Card meta tags
- Performance optimizations (DNS prefetching, font preloading)
- Comprehensive accessibility features
- Semantic HTML with ARIA labels

### 3. Static Site Configuration
- Uses `@sveltejs/adapter-static` for static site generation
- Configured for deployment to static hosting via rsync
- Sitemap auto-generation at `/sitemap.xml`
- No server-side rendering or API routes

### 4. Testing Strategy
- Unit tests with Vitest (browser and node environments)
- E2E tests with Playwright
- Component testing with Svelte integration
- Tests located alongside components (`*.spec.ts`)

### 5. Styling Approach
- TailwindCSS v4 with plugin system
- Typography plugin for content styling
- Inter font from Google Fonts
- Responsive design with mobile-first approach
- Neutral color palette with semantic naming

## Development Guidelines

### TypeScript Usage
- Strict mode enabled with all type checking
- Svelte 5 runes syntax for reactive components
- Type-safe imports and exports
- Comprehensive type definitions in `app.d.ts`

### Code Quality
- ESLint with TypeScript, Svelte, and Prettier integration
- Conventional commits (max 50 chars)
- Formatting enforced with Prettier and Tailwind plugins
- No linting errors allowed in commits

### Performance Considerations
- DNS prefetching for external domains
- Font preloading and optimization
- Static asset optimization
- Lazy loading and code splitting ready

### SEO Best Practices
- Comprehensive meta tags and structured data
- Semantic HTML5 structure
- Accessibility-first approach
- Mobile-responsive design
- Fast loading times

## Deployment

The project is configured for automatic deployment via GitHub Actions:
- Builds on push to master branch
- Uses pnpm for dependency management
- Deploys static files via rsync to remote server
- SSH key authentication for secure deployment

## Important Notes

- This is a static site - no server-side functionality
- All content is managed through constants and components
- SEO is a primary focus with extensive structured data
- The platform is in private beta (Q4 2025 launch planned)
- Uses modern Svelte 5 features with runes syntax