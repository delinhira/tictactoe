import { styled, css } from 'styled-components';
import { Color, Size, brown, darkPink, darkGreen } from '../../theme';

const Text = styled.p<{ color?: Color; bold?: boolean; size?: Size }>`
	margin: 0;
	font-weight: ${({ bold }) => (bold ? 600 : 400)};

	color: ${({ color }) => {
		switch (color) {
			case 'pink':
				return darkPink;
			case 'green':
				return darkGreen;
			default:
				return brown;
		}
	}};

	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					font-size: 12px;
					line-height: 18px;
				`;
			case 'large':
				return css`
					font-size: 16px;
					line-height: 21px;
				`;
			case 'medium':
			default:
				return css`
					font-size: 14px;
					line-height: 19px;
				`;
		}
	}};
`;

export default Text;
