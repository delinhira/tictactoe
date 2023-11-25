export enum Player {
	X = 'x',
	O = 'o',
}

export type Winner = Player | 'draw' | null;

export interface GameState {
	isGameStarted: boolean;
	boardSize: number;
	winner: Winner;
	currentPlayer: Player;
	board: (Player | null)[][];
}
