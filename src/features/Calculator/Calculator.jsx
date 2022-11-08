import React, { useId } from "react";
import { useState } from "react";
import buttons from "./resources/buttons";
import ButtonBox from "../../components/CssComponents/ButtonBox";
import CalculatorWrapper from "../../components/CssComponents/CalculatorWrapper";
import Screen from "../../components/CssComponents/Screen";
import Button from "../../components/CssComponents/Button";
import "./Calculator.css";
import { initialCalc } from "./resources/operators";
import { evaluate, pow } from "mathjs";
const flattedButtons = buttons.flat();

const Calculator = (props) => {
  const [calc, setCalc] = useState(initialCalc);
  const prefix1 = useId();
  const { sign, num, res, showNum } = calc;

  const invertClickHandler = () => {
    const prevValue = showNum ? num : res;
    setCalc({
      ...calc,
      [showNum ? "num" : "res"]: prevValue * -1,
    });
  };

  const percentClickHandler = () => {
    const preValue = parseFloat(showNum ? num : res) || 0;
    setCalc({
      ...calc,
      [showNum ? "num" : "res"]: preValue / pow(100, 1),
    });
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num: !num.toString().includes(".") ? num + value : num,
    });
  };

  const equalsClickHandler = () => {
    if (sign && num) {
      const mathExp = Object.values(calc).reduce(
        (expression, entry, index, array) => {
          if (index === array.length - 1) return expression;
          const newEntry = entry === "X" ? "*" : entry;
          return expression + newEntry.toString().toLowerCase();
        },
        ""
      );
      setCalc({
        ...initialCalc,
        res: evaluate(mathExp),
        showNum: false,
      });
    }
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num.toString().length < 16)
      setCalc({
        ...calc,
        num: num === 0 && value === "0" ? "0" : parseFloat(num + value),
        showNum: true,
      });
  };

  const operatorClickHandler = (e) => {
    setCalc({
      ...calc,
      sign: e.target.innerHTML,
      res: !res && num ? num : res,
      num: 0,
      showNum: false,
    });
  };

  const ops = {
    C: () => setCalc(initialCalc),
    "+-": () => invertClickHandler(),
    "%": (e) => percentClickHandler(e),
    "/": (e) => operatorClickHandler(e),
    X: (e) => operatorClickHandler(e),
    "-": (e) => operatorClickHandler(e),
    "+": (e) => operatorClickHandler(e),
    ".": (e) => commaClickHandler(e),
    "=": () => equalsClickHandler(),
  };

  return (
    <div className="pageWrapper">
      <CalculatorWrapper>
        <Screen value={showNum ? num : res} />
        <ButtonBox>
          {flattedButtons.map((btn) => (
            <Button
              key={`${btn}-${prefix1}`}
              label={btn}
              func={ops[btn] ?? numClickHandler}
            />
          ))}
        </ButtonBox>
      </CalculatorWrapper>
      {/* <div>
        <p>num: :{num}</p>
        <p>sign: {sign}</p>
        <p>res: {res}</p>
      </div> */}
    </div>
  );
};

export default Calculator;
