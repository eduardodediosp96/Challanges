import React from "react";
import "./ButtonBox.css";

const ButtonBox = ({ children }) => {
  console.log("render", children);
  return <div className="buttonsWrapper">{children}</div>;
};

export default React.memo(ButtonBox);
