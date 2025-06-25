# System Patterns

The repository follows a monorepo structure using npm workspaces, Lerna and Nx. Each package encapsulates specific functionality—for example `core` exposes shared utilities and `agent` wraps the OpenAI APIs. Experiments like the deck‑builder live in their own packages while reusing these utilities.

Effect‑TS provides the runtime environment and effect system. The CLI interface will use Node streams. A future web interface can reuse the same core logic by exposing Effect‑TS programs through an HTTP server or client bundle.

Key patterns:
- **Layered effects**: dependencies such as RNG or persistence are provided via Effect layers.
- **Pure logic** in core modules, separated from interfaces.
- **Incremental build** using Nx for per‑package tasks.
