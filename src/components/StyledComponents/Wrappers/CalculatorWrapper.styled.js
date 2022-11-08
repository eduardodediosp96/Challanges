import styled from "@emotion/styled";

export const CalculatorWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.calculatorWidth};
  height: ${({ theme }) => theme.sizes.calculatorHeight};
  padding: ${({ theme }) => theme.sizes.calculatorPadding};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.wrapper};
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  animation: pop-in 0.6s ease-out backwards;
`;
