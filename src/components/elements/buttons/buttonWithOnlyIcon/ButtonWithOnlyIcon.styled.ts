import styled from "styled-components";

export const ButtonWithOnlyIconStyled = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 4px;

  &:hover {
    background-color: #e6e6e6;
  }

  &:active {
    background-color: #cccccc;
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
