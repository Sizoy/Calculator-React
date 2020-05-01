import React from "react";
import Output from "./Parts/Output";
import MiniOutput from "./Parts/MiniOutput";
import Input from "./Parts/Input";
import "./Calculator.css";

let Calculator = () => {
  return (
    <div className="calculator">
      <Output />
      <MiniOutput />
      <Input />
    </div>
  );
};

export default Calculator;
