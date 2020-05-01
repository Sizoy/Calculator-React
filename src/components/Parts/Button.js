import React from "react";
import "./../Calculator.css";

let Button = (props) => {
  return <button className="button">{props.property}</button>;
};

export default Button;
