import styled from "styled-components";
import { NavigationItemStyledProps } from "./types";

export const NavigationItemStyled = styled.button<NavigationItemStyledProps>`
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-block: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${({ theme }) => theme.palette.text.regular};

  ${({ $isContentShown, theme }) => {
    return (
      $isContentShown &&
      `
				background-color: ${theme.palette.background.light};
				border-radius: 4px;
				color: #32A8F8;
				font-weight: ${theme.font.weight.bold};
			`
    );
  }}
`;
