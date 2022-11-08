import styled from "@emotion/styled";
import { Textfit } from "react-textfit";

export const TextfitStyled = styled(Textfit)`
  width: 100%;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.palette.screen};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.palette.text};
  font-weight: bold;
  box-sizing: border-box;
  min-height: ${({ theme }) => theme.sizes.screenHeigth} !important;
  height: ${({ theme }) => theme.sizes.screenHeigth} !important;
`;

export const InputStyled = styled.input`
  text-align: right;
  width: 100%;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.palette.screen};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.palette.text};
  font-weight: bold;
  box-sizing: border-box;
  font-size: 30px;
  border: none;
  min-height: ${({ theme }) => theme.sizes.screenHeigth} !important;
  height: ${({ theme }) => theme.sizes.screenHeigth} !important;
`;

export const ScreenWrapper = styled.div`
  position: relative;
  mergin: 0;
  padding: 0;
`;
export const ErrorStyled = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.palette.equal};
  bottom: 10px;
  right: 15px;
  margin: 0;
  font-size: 15px;
`;
export const HandleExprButtonStyled = styled.button`
  position: absolute;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.handleExprButton};
  color: ${({ theme }) => theme.palette.text};
  top: 10px;
  left: 0;
  right: 0;
  margin-left: 10px;
`;
