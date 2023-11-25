import { styled } from 'styled-components';
import Header from './Header';
import Board from './Board';

const TicTacToe = () => {
	return (
		<Container>
			<Header />
			<Board />
		</Container>
	);
};

export default TicTacToe;

const Container = styled.div`
	height: 100vh;
	width: 100%;
	min-width: 320px;
	max-width: 900px;
	overflow: auto;

	padding: 2rem;
`;
