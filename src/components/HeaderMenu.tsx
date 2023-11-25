import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import useGame from '../hooks/useGame';
import { RootState } from '../store/rootReducer';
import Button from './general/Button';
import Input from './general/Input';
import Text from './general/Text';

const HeaderMenu = () => {
	const [inputValue, setInputValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { isGameStarted } = useSelector((state: RootState) => state.game);

	const { startGame, resetGame, newGame } = useGame();

	const handleClickReset = () => {
		resetGame();
	};

	const handleClickNewGame = () => {
		newGame();
	};

	const handleClickStart = () => {
		if (errorMessage) {
			setErrorMessage('');
		}

		const numberValue = Number(inputValue);

		if (isNaN(numberValue)) return;

		if (numberValue < 3) {
			setErrorMessage('Board size must 3 or more');
			return;
		}

		startGame(numberValue);
		setInputValue('');
	};

	const renderMenu = () => {
		if (isGameStarted) {
			return (
				<>
					<Button color="pink" onClick={handleClickReset}>
						Reset
					</Button>
					<Button onClick={handleClickNewGame}>New Game</Button>
				</>
			);
		}

		return (
			<>
				<Text bold className="label">
					Board size
				</Text>
				<InputContainer>
					<Input
						value={inputValue}
						placeholder="Enter a number"
						disabled={isGameStarted}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value.replace(/[^0-9]/g, ''))}
					/>
					<Text color="pink">{errorMessage}</Text>
				</InputContainer>
				<Button onClick={handleClickStart}>Start</Button>
			</>
		);
	};

	const render = () => {
		return <MenuContainer>{renderMenu()}</MenuContainer>;
	};

	return render();
};

export default HeaderMenu;

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;

	.label {
		line-height: 32px;
	}
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
