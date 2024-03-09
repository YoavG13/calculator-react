import React, { useState } from "react";
import Calculate from "./Calculate.jsx"; // Import Calculate component

function Table() {
  const [clickedNumber1, setClickedNumber1] = useState(null);
  const [clickedNumber2, setClickedNumber2] = useState(null);
  const [clickedSign, setClickedSign] = useState(null);

  function handleClickNumber(number) {
    if (clickedNumber1 === null) {
      setClickedNumber1(number);
    } else {
      setClickedNumber2(number);
    }
  }

  function handleClickSign(sign) {
    setClickedSign(sign);
  }

  function resetState() {
    setClickedNumber1(null);
    setClickedNumber2(null);
    setClickedSign(null);
  }

  function handleCalculation() {
    if (clickedSign && clickedNumber1 && clickedNumber2 !== null) {
      return {
        number1: clickedNumber1,
        number2: clickedNumber2,
        sign: clickedSign,
      }; // Return an object with calculation data
    }
    return null;
  }

  const calculationData = handleCalculation();

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <button onClick={() => handleClickNumber(1)}>Button 1</button>
            </th>
            <th>
              <button onClick={() => handleClickNumber(2)}>Button 2</button>
            </th>
            <th>
              <button onClick={() => handleClickNumber(3)}>Button 3</button>
            </th>
            <th>
              <button onClick={() => handleClickSign("+")}>Button +</button>
            </th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>
              <button onClick={() => handleClickNumber(4)}>Button 4</button>
            </th>
            <th>
              <button onClick={() => handleClickNumber(5)}>Button 5</button>
            </th>
            <th>
              <button onClick={() => handleClickNumber(6)}>Button 6</button>
            </th>
            <th>
              <button onClick={() => handleClickSign("*")}>Button *</button>
            </th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>
              <button onClick={() => handleClickNumber(7)}>Button 7</button>
            </th>
            <th>
              <button onClick={() => handleClickNumber(8)}>Button 8</button>
            </th>
            <th>
              <button onClick={() => handleClickNumber(9)}>Button 9</button>
            </th>
            <th>
              <button onClick={() => handleClickSign("-")}>Button -</button>
            </th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>
              <button onClick={() => handleClickSign("/")}>Button /</button>
            </th>
            <th>
              <button onClick={() => handleClickSign("rest")}>
                Button Reset
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      {calculationData && (
        <Calculate {...calculationData} onReset={resetState} />
      )}
    </div>
  );
}

export default Table;
