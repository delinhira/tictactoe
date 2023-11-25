import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setBoardSize, setCurrentPlayer, setIsGameStarted, setWinner } from '../store/game/game.action';
import { Player } from '../store/game/game.types';
import { RootState } from '../store/rootReducer';

const useGame = () => {
	const dispatch = useDispatch();
	const { boardSize, currentPlayer, winner, board } = useSelector((state: RootState) => state.game);

	const startGame = (size: number) => {
		dispatch(setBoardSize(size));
		dispatch(setIsGameStarted(true));
		initializeBoard(size);
	};

	const resetGame = () => {
		initializeBoard(boardSize);
		dispatch(setWinner(null));
		togglePlayer(Player.X);
	};

	const newGame = () => {
		dispatch(setIsGameStarted(false));
		dispatch(setWinner(null));
		togglePlayer(Player.X);
	};

	const initializeBoard = (size: number) => {
		const board: Player[][] = [];
		for (let i = 0; i < size; i++) {
			board.push(new Array(size).fill(null));
		}

		dispatch(setBoard(board));
	};

	const togglePlayer = (player?: Player) => {
		if (player) {
			dispatch(setCurrentPlayer(player));
			return;
		}

		dispatch(setCurrentPlayer(currentPlayer === Player.X ? Player.O : Player.X));
	};

	const checkWinner = (row: number, col: number, currentBoard: (Player | null)[][]): boolean => {
		let won = currentBoard[row].every((cell) => cell === currentPlayer);

		if (won) {
			return won;
		}

		if (row === col) {
			return currentBoard.every((row, index) => row[index] === currentPlayer);
		}

		if (row + col === boardSize - 1) {
			return currentBoard.every((row, index) => row[boardSize - 1 - index] === currentPlayer);
		}

		return currentBoard.every((row) => row[col] === currentPlayer);
	};

	const handlePlayerMove = (row: number, col: number): void => {
		if (winner || board[row][col]) return;

		const updatedBoard = board.slice();
		updatedBoard[row][col] = currentPlayer;
		dispatch(setBoard(updatedBoard));

		const hasWinner = checkWinner(row, col, updatedBoard);

		if (hasWinner) {
			dispatch(setWinner(currentPlayer));
			return;
		}

		const isDraw = !updatedBoard.some((row) => row.includes(null));

		if (isDraw) {
			dispatch(setWinner('draw'));
			return;
		}

		togglePlayer();
	};

	return {
		startGame,
		resetGame,
		newGame,
		handlePlayerMove,
	};
};

export default useGame;
