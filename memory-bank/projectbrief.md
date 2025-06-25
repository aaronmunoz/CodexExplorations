# Project Brief

This repository acts as a general playground for experimenting with OpenAI Codex in TypeScript. One key effort is a small **roguelike deck‑builder** game implemented with **Effect‑TS**. The monorepo is managed with **npm workspaces**, **Lerna**, and **Nx** so multiple packages (like `core` and `agent`) can evolve independently. The first game milestone is a playable command‑line prototype that could later become a web experience.

## Scope
- Basic deck‑builder mechanics (drawing, playing, discarding cards)
- Procedural roguelike encounters
- Command‑line interface to keep the MVP simple
- Modular design so new cards and encounters can be added easily

The project serves as a playground for Effect‑TS patterns and for experimenting with AI driven workflows.
