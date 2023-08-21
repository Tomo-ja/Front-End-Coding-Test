import styled from "styled-components";

export const NavigationStyled = styled.div`
  min-width: 280px;
  min-height: 100vh;
  padding-top: 30px;
  padding-left: 40px;
  border-right: 1px solid ${({ theme }) => theme.palette.background.light};
  position: relative;
`;
