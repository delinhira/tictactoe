import { styled, css } from 'styled-components';
import { beige, brown } from '../theme';
import Text from './general/Text';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import useGame from '../hooks/useGame';

const Board = () => {
	const { isGameStarted, winner, currentPlayer, board, boardSize } = useSelector((state: RootState) => state.game);
	const { handlePlayerMove } = useGame();

	const renderBoard = () => {
		const renderedBoard: JSX.Element[] = [];

		for (let i = 0; i < boardSize; i++) {
			const row = board[i]?.slice(0, boardSize);
			renderedBoard.push(
				<div key={i} className="row">
					{row?.map((cell, j) => (
						<Cell key={`${i}-${j}`} isDisabled={!!winner} onClick={() => handlePlayerMove(i, j)}>
							<Text bold color="green" size="large">
								{cell?.toUpperCase()}
							</Text>
						</Cell>
					))}
				</div>,
			);
		}

		return renderedBoard;
	};

	const renderText = () => {
		if (winner) {
			return `Player ${winner} wins!`;
		}

		if (winner === 'draw') {
			return "It's a Draw!";
		}

		return `Current player: ${currentPlayer?.toUpperCase()}`;
	};

	const render = () => {
		if (!isGameStarted) {
			return null;
		}

		return (
			<Container>
				<Text bold size="large">
					{renderText()}
				</Text>
				<div className="board">{renderBoard()}</div>
			</Container>
		);
	};

	return render();
};

export default Board;

const Container = styled.div`
	margin-top: 1.5rem;

	.board {
		display: inline-block;
		border: 2px solid ${brown};
		margin-top: 1rem;

		.row {
			display: flex;
		}
	}
`;

const Cell = styled.div<{ isDisabled: boolean }>`
	width: 50px;
	height: 50px;
	border: 1px solid ${beige};

	display: flex;
	align-items: center;
	justify-content: center;

	${({ isDisabled }) =>
		isDisabled
			? css`
					cursor: auto;
			  `
			: css`
					cursor: pointer;

					&:hover {
						background-color: #f0f0f0;
					}
			  `}
`;
