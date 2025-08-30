export interface SimulationRequest {
  numberOfSimulations: number;
  changeDoor: boolean;
}

export interface GameResult {
  win: boolean;
  selectedDoor: number;
  winningDoor: number;
  revealedDoor: number;
  finalDoor: number;
}

export interface SimulationResult {
  totalGames: number;
  wins: number;
  losses: number;
  winPercentage: number;
  gameResults: GameResult[];
  changeDoor: boolean;
}