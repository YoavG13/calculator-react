// Table.jsx
import React from "react";
import Calculate from "./Calculate.jsx";
function Button(props) {
  //const { number, onClick } = props;
  const number = props.number;
  <Calculate number = {number}/>
  return <button>{`Button ${number}`}</button>;
}

export default Button;
//onClick={handleClick}




function Calculator(props) {
  const { sign, number } = props;
  const [sum, setSum] = useState(0);
  const [viewNumber, setViewNumber] = useState("");

  function calc() {
    if (sign === "+") {
      setSum((sum += number));
    } else if (sign === "-") {
      setSum((sum -= number));
    }
    return setViewNumber(sum);
  }
  return <div>{viewNumber}</div>;
}

export default Calculator;