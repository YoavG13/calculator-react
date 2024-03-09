import React from "react";

function Calculator(props) {
  let { sign, number1, number2 } = props;

  const resetHandler = props.onReset;
  let sum = null;

  if (sign) {
    switch (sign) {
      case "+":
        sum = number1 + number2;
        break;
      case "-":
        sum = number1 - number2;
        break;
      case "*":
        sum = number1 * number2;
        break;
      case "/":
        sum = number1 / number2;
        break;
      case "rest":
        resetHandler();
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <p>
        <p>
          Result: {sum} ({number1} {sign} {number2})
        </p>
      </p>
    </div>
  );
}

export default Calculator;
