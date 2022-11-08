import React, { useId, useState } from "react";
import Button from "../../components/StyledComponents/Button";
import { ButtonBox } from "../../components/StyledComponents/Wrappers/ButtonBox.styled";
import { CalculatorWrapper } from "../../components/StyledComponents/Wrappers/CalculatorWrapper.styled";
import { ScientificCalculatorWrapper } from "./ScientificCalculator.styled";
import buttons from "./resources/buttons";
import Screen from "../../components/StyledComponents/Screen/Screen";
import { evaluate } from "mathjs";
//import { Test } from './ScientificCalculator.styles';

const ScientificCalculator = (props) => {
  // variables
  const prefix = useId();
  const [calc, setCalc] = useState({
    expr: [0],
    res: 0,
    showExpr: true,
    pendingOperation: false,
    error: "",
  });
  const { expr, res, showExpr, error, pendingOperation } = calc;

  // functions
  const equalsClickHandler = () => {
    let evaluation = "",
      posibleError = null;
    try {
      if (expr.length !== 0) {
        evaluation = evaluate(expr.join(""));
      }
    } catch (error) {
      console.log(error.message);
      posibleError = error.message;
    }
    setCalc({
      ...calc,
      error: "",
      showExpr: posibleError ? true : false,
      pendingOperation: posibleError ? true : false,
      [posibleError ? "error" : "res"]: posibleError ?? evaluation,
    });
  };

  const entryClickHandler = (e) => {
    const rules = {
      "√": "sqrt(",
      X: "*",
    };
    const auxExpr = [...expr];
    if (auxExpr.length === 1 && auxExpr[0] === 0) auxExpr.pop();
    const commingValue = rules[e.target.innerHTML] ?? e.target.innerHTML;
    setCalc({
      ...calc,
      expr: [...auxExpr, commingValue],
      showExpr: true,
      pendingOperation: true,
    });
  };

  const clearClickHander = () => {
    setCalc({
      expr: [0],
      res: 0,
      showExpr: true,
      error: "",
      pendingOperation: false,
    });
  };

  const eraseClickHander = () => {
    const newArr = [...expr];
    newArr.pop();
    setCalc({
      ...calc,
      pendingOperation: true,
      expr: [...newArr],
      showExpr: true,
    });
  };

  const handleViewOfResult = () => {
    setCalc({
      ...calc,
      showExpr: !showExpr,
    });
  };

  const ops = {
    C: () => clearClickHander(),
    "=": () => equalsClickHandler(),
    "←": () => eraseClickHander(),
  };

  return (
    <ScientificCalculatorWrapper>
      <CalculatorWrapper>
        <Screen
          expr={showExpr ? expr : res}
          error={error}
          handleView={handleViewOfResult}
          showHandleView={res && !error && !pendingOperation}
        />
        <ButtonBox>
          {buttons.flat().map((btn) => (
            <Button
              key={`${btn}-${prefix}`}
              label={btn}
              func={ops[btn] ?? entryClickHandler}
              equals={btn === "=" && true}
            />
          ))}
        </ButtonBox>
      </CalculatorWrapper>
      <div>
        <div>expr: {expr}</div>
        <div>res: {res}</div>
        <div>showExpr: {showExpr ? "true" : "false"}</div>
        <div>pendingOperation: {pendingOperation ? "true" : "false"}</div>
        <div>error: {error}</div>
      </div>
    </ScientificCalculatorWrapper>
  );
};

export default ScientificCalculator;
