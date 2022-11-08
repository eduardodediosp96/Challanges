import React from "react";
import classnames from "classnames";
import "./Button.css";

const Button = ({ label, func = () => null }) => {
  return (
    <button
      onClick={func}
      className={classnames("button", {
        equals: label === "=",
        zero: label === 0,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
