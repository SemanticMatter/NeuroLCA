# NeuroLCA

NeuroLCA is a Vite + React + TypeScript demonstration interface for a neurosymbolic life cycle assessment workflow. The application walks through a product scenario, then presents a set of explainable LCA views built from static mock data for an electric bicycle example.

The current codebase is a frontend-only demo. It does not call a live LLM, graph database, or backend API at runtime.

## What the application contains

The UI is organized into four main parts:

- A landing page introducing the concept of auditable, knowledge-graph-based LCA.
- A scenario builder where the user edits a natural-language product description and constraint inputs.
- A dashboard with six analysis panels: lifecycle model, knowledge graph explorer, GraphRAG retrieval trace, SHACL constraint validation, dataset provenance, and impact results.
- An executive summary screen describing the intended production architecture and product positioning.

All displayed results currently come from mock data in `src/data/mockData.ts`.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion
- Recharts
- React Flow (`@xyflow/react`)
- Lucide React

## Project structure

```text
src/
  App.tsx                         App-level navigation between screens
  data/mockData.ts                Demo graph, dataset, constraint, retrieval, and impact data
  types/lca.ts                    Shared LCA domain types
  components/
    screens/                      Top-level screens
    panels/                       Dashboard sub-views
    ui/                           Reusable UI primitives
```

## Prerequisites

- Node.js 20+ recommended
- npm

## Install

```bash
npm install
```

## Run locally

Start the Vite development server:

```bash
npm run dev
```

The app listens on `0.0.0.0:3000`, so you can open `http://localhost:3000`.

## Build for production

Create a production build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available scripts

- `npm run dev` starts the development server on port `3000`
- `npm run build` creates the production bundle
- `npm run preview` serves the built app locally
- `npm run lint` runs TypeScript type-checking with `tsc --noEmit`
- `npm run clean` removes `dist/`

## Notes on configuration

- No environment variables are required for the current implementation.
- The existing app state is local to the client and is not persisted.
- The scenario builder inputs are currently presentational; dashboard outputs are driven by static demo data rather than live analysis.

## Current implementation summary

This repository is best understood as a polished frontend prototype for an explainable LCA platform. The executive summary screen outlines a possible future production stack, but the checked-in app today is a static interactive demo with no active Google tooling and no backend integration.
