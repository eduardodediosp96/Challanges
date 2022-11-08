import styled from "@emotion/styled";

export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  outline: none;
  background-color: ${({ theme, equals }) =>
    theme.palette[equals ? "equal" : "button"]};
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, equals }) =>
      theme.palette[equals ? "equalHover" : "buttonHover"]};
  }
`;
// grid-column: ${({ equals }) => equals && "3/5"};
