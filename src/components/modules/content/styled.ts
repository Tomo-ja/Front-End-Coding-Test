import styled from "styled-components";

export const ContentStyled = styled.div`
  margin-top: 30px;
  margin-inline: 40px;
  padding: 30px;
  background-color: ${({ theme }) => theme.palette.background.light};
  border-radius: 16px;
  flex-grow: 1;
`;
