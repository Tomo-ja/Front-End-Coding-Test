import styled from "styled-components";

export const MultipleLineInput = styled.textarea`
  height: 100%;
  padding: 30px;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.background.white};
  font-size: ${(props) => props.theme.font.size.body};
  color: ${(props) => props.theme.palette.text.regular};
  line-height: 1.3;
  white-space: pre-wrap;
  overflow-y: scroll;

  &:disabled {
    color: inherit;
    background-color: ${(props) => props.theme.palette.background.white};
  }

  &:focus {
    border-color: ${(props) => props.theme.palette.primary};
    caret-color: ${(props) => props.theme.palette.primary};
  }
`;