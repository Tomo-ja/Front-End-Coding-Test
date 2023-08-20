import styled from "styled-components";
import { ButtonWithTextStyledProps } from "./ButtonWithText.type";

export const ButtonWithTextStyled = styled.button<ButtonWithTextStyledProps>`
  width: ${({ size }) => {
    switch (size) {
      case "half":
        return "40px";
      case "regular":
        return "90px";
      default:
        return "100%";
    }
  }};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.minimum};
  transition: background-color 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ type, theme }) => {
    switch (type) {
      case "primary":
        return `
					color: ${theme.palette.text.white};
					background-color: ${theme.palette.primary};

					&:hover {
						background-color: #3C8EC4;
					}

					&:active {
						background-color: #347CAB;
					}
				`;
      case "secondary":
        return `
					color: ${theme.palette.text.blue};
					border: 2px solid ${theme.palette.button.secondary};

					&:hover {
						background-color: #CCCCCC;
					}

					&:active {
						background-color: #B3B3B3;
					}
				`;
      case "normal":
        return `
					color: ${theme.palette.text.white};
					background-color: ${theme.palette.button.normal};

					&:hover {
						background-color: #999999;
					}

					&:active {
						background-color: #808080;
					}
				`;
      default:
        return ``;
    }
  }}
`;
