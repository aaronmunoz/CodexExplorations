# Codex Explorations Monorepo

Welcome to **Codex Explorations**, a collection of small packages for trying out
ideas with OpenAI's Codex. This repository is organized as a monorepo using
**npm workspaces**, **Lerna**, and **Nx**. Each package lives under the
`packages/` directory and can be built and tested independently.

The goal of this project is to keep experiments isolated in their own packages
while still sharing a common toolchain and configuration. Currently the repo
contains two packages named `core` and `agent`, but new packages can be added as
the experiments grow.

## Getting Started

Install dependencies and bootstrap all workspaces with Lerna:

```bash
npm install
npx lerna bootstrap
```

### Creating a Package

You can create a new package by running Lerna's `create` command or by manually
adding a directory under `packages/` with its own `package.json`.

```bash
npx lerna create my-new-package packages/my-new-package
```

The scripts defined at the root will automatically pick up the new workspace.

### Building

Run the build script across all packages:

```bash
npm run build
```

You can also build a single package using Nx:

```bash
npx nx build core
```

### Testing

Execute tests for all workspaces:

```bash
npm run test
```

Individual packages can be tested by running the script from their directory:

```bash
cd packages/core
npm test
```

### Cleaning

Remove build artifacts and workspace caches (uses `rimraf` under the hood):

```bash
npm run clean:all
```

## Using the Agent Package

The `@codex/agent` workspace provides a small helper for requesting completions from OpenAI via Effect:

```ts
import { requestCompletion } from "@codex/agent"
import * as Effect from "effect/Effect"

const program = requestCompletion({
  apiKey: process.env.OPENAI_API_KEY!,
  prompt: "Hello, world!"
})

Effect.runPromise(program).then(console.log)
```

