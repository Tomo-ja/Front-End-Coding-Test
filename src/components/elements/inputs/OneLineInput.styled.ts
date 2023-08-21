import styled from "styled-components";

export const OneLineInputStyled = styled.input`
  height: 40px;
  padding: 0 30px;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.background.light};
  font-size: ${(props) => props.theme.font.size.title};
  font-weight: ${(props) => props.theme.font.weight.bold};
  background-color: ${(props) => props.theme.palette.background.light};

  &:disabled {
    color: inherit;
  }

  &:focus {
    border-color: ${(props) => props.theme.palette.primary};
    background-color: ${(props) => props.theme.palette.background.white};
    caret-color: ${(props) => props.theme.palette.primary};
  }
`;
