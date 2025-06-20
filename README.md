# Codex Explorations Monorepo

This repository uses **npm workspaces** together with **Lerna** and **Nx** to manage multiple packages under the `packages/` directory.

## Getting started

Install dependencies for all workspaces and bootstrap Lerna:

```bash
npm install
npx lerna bootstrap
```

### Building

Run the build script across all packages using Lerna:

```bash
npm run build
```

### Testing

Execute tests for each workspace:

```bash
npm run test
```

You can run individual Nx targets or build packages directly:

```bash
cd packages/core
npm run build
```
