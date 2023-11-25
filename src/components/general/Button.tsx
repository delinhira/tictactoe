import { css, styled } from "styled-components";
import { green, darkGreen, pink, darkPink, white, Color } from "../../theme";

const Button = styled.button<{ color?: Color; disabled?: boolean }>`
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;

  &:hover {
    color: ${white};
  }

  ${({ color, disabled }) => {
    switch (color) {
      case "pink":
        return css`
          background: ${pink};
          color: ${darkPink};

          &:hover {
            background: ${disabled ? pink : darkPink};
          }
        `;
      case "green":
      default:
        return css`
          background: ${green};
          color: ${darkGreen};

          &:hover {
            background: ${disabled ? green : darkGreen};
          }
        `;
    }
  }}
`;

export default Button;
