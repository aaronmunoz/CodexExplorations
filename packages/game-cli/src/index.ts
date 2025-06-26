import { GameEngine } from "@codex/game-core";

export function runCli() {
  const engine = new GameEngine();
  engine.start();
}
