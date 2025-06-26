export class GameEngine {
  start() {
    console.log("GameEngine stub start");
  }
}

export interface Card {
  name: string;
  effect(): void;
}
