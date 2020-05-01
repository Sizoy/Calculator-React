import React from "react";
import "./../Calculator.css";
import Button from "./Button";

let Input = () => {
  return (
    <div className="input">
      <Button property="1" />
      <Button property="2" />
      <Button property="3" />
      <Button property="+" />
      <Button property="4" />
      <Button property="5" />
      <Button property="6" />
      <Button property="-" />
      <Button property="7" />
      <Button property="8" />
      <Button property="9" />
      <Button property="*" />
      <Button property="C" />
      <Button property="0" />
      <Button property="." />
      <Button property="/" />
      <Button property="=" />
    </div>
  );
};

export default Input;
