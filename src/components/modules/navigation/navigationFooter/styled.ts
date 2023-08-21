import styled from "styled-components";

export const NavigationFooterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-block: 10px;
  padding-left: 40px;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.palette.background.light};
  position: absolute;
  bottom: 0;
  left: 0;
`;
