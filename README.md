# Statica Landing Page

This repository contains the current Next.js landing page implementation for Statica, along with archived static concept explorations used earlier in the design process.

## Project structure

- `src/app` - Next.js App Router entry files, layout, provider composition, and global styles.
- `src/features/landing` - Statica landing-page feature slice.
- `src/features/landing/sections` - page-level sections assembled in `src/app/page.tsx`.
- `src/features/landing/components` - landing-specific visual components that should not be treated as shared UI.
- `src/features/landing/content` - structured multilingual copy, language constants, and landing metadata.
- `src/shared/ui` - reusable UI primitives and small visual helpers.
- `src/shared/providers` - cross-feature React context providers.
- `src/shared/lib` - small framework-agnostic utilities.
- `prototypes/lumen` - standalone static Lumen concept files.
- `prototypes/resound` - standalone static Resound concept files.
- `prototypes/shared` - shared prototype helpers used by the archived static concepts.

## Development

```bash
npm install
npm run dev
```
