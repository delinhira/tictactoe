import { styled } from 'styled-components';
import { beige, brown } from '../../theme';

const Input = styled.input`
	height: 32px;
	border: none;
	border-radius: 0.25rem;
	background: ${beige};
	color: ${brown};
	padding: 0.5rem 1rem;

	&:focus {
		outline: 2px solid ${brown};
	}
`;

export default Input;
