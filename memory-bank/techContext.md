# Tech Context

- **Language**: TypeScript targeting Node.js
- **Framework**: Effect-TS for effect management and concurrency
- **Tooling**: Nx and Lerna manage the monorepo, while ts-node/tsc handle builds
- **Packages**: current workspaces include `core` (utility code) and `agent` (OpenAI helpers); new experiments add their own packages such as the upcoming `game`
- **Interface**: MVP delivered as a CLI; potential web UI later
- **Dependencies**: OpenAI client libraries via `@effect/ai` and `@effect/ai-openai`
