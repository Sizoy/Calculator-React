import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//JS
{
  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      // SHOW RESULT
      if (buttons[i].innerHTML == "=") {
        let regularExpression = /\+|\-|\*|\//g;
        let displayLog = document.getElementById("output").innerHTML;
        let stringDigitsArray = displayLog.split(regularExpression);
        let operatorsArray = displayLog.match(regularExpression);
        let intDigitsArray = [];
        for (let i = 0; i < stringDigitsArray.length; i++) {
          intDigitsArray.push(parseFloat(stringDigitsArray[i], 10));
        }
        let result = intDigitsArray[0];
        for (let i = 1; i < intDigitsArray.length; i++) {
          if (operatorsArray[i - 1] == "+") {
            result += intDigitsArray[i];
          } else if (operatorsArray[i - 1] == "-") {
            result -= intDigitsArray[i];
          } else if (operatorsArray[i - 1] == "*") {
            result *= intDigitsArray[i];
          } else if (operatorsArray[i - 1] == "/") {
            result /= intDigitsArray[i];
          }
        }
        document.getElementById("miniOutput").innerHTML = displayLog;
        if (!isNaN(result)) {
          document.getElementById("output").innerHTML = result;
        }
      } else if (buttons[i].innerHTML == "C") {
        // CLEAR DISPLAY
        console.log("true");
        document.getElementById("output").innerHTML = "";
        document.getElementById("miniOutput").innerHTML = "";
      } else {
        // ADD SYMBOL TO DISPLAY
        document.getElementById("output").innerHTML += buttons[i].innerHTML;
      }
    });
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
