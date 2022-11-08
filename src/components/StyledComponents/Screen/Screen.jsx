import React from "react";
import {
  ErrorStyled,
  HandleExprButtonStyled,
  InputStyled,
  ScreenWrapper,
} from "./Screen.styled";
//import { Test } from './Screen.styles';

const Screen = ({
  expr = 0,
  error = "",
  handleView = () => null,
  showHandleView = false,
}) => {
  const handledExpr = expr instanceof Array ? expr.join("") : expr;
  return (
    <ScreenWrapper>
      <InputStyled
        align="right"
        value={handledExpr || ""}
        // onChange={() => null}
        readOnly
      />
      {error ? <ErrorStyled>{error}</ErrorStyled> : null}
      {showHandleView ? (
        <HandleExprButtonStyled onClick={handleView}>↺</HandleExprButtonStyled>
      ) : null}
    </ScreenWrapper>
  );
};

export default Screen;
