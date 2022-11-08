import React from "react";
import "./CalculatorWrapper.css";
//import { Test } from './CalculatorWrapper.styles';

const CalculatorWrapper = ({ children }) => (
  <div className="calculatorWrapper">{children}</div>
);

export default CalculatorWrapper;
