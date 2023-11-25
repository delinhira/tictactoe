import { styled } from 'styled-components';
import { brown } from '../theme';
import Text from './general/Text';
import HeaderMenu from './HeaderMenu';

const Header = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>Tic Tac Toe</Title>
				<Text bold color="green" size="large">
					Plot, block, win the spot!
				</Text>
			</TitleContainer>
			<HeaderMenu />
		</Container>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;

const Title = styled.h1`
	color: ${brown};
	margin: 0;
`;
