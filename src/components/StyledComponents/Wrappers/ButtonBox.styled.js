import styled from "@emotion/styled";

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: ${({ theme }) => theme.sizes.buttonsWrapperHeigth};
  width: ${({ theme }) => theme.sizes.buttonsWrapperWidth};
  background-color: ${({ theme }) => theme.palette.wrapper};
  padding: 8px;
  gap: 4px;
`;
