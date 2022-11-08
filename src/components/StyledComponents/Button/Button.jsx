import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ label, func = () => null, equals }) => (
  <ButtonStyled onClick={func} equals={equals}>
    {label}
  </ButtonStyled>
);

export default Button;
