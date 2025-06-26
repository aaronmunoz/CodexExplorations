import { GameEngine } from "@codex/game-core";

export function launchWeb() {
  const engine = new GameEngine();
  engine.start();
}
