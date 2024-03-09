import React from "react";
import Button from "./Button.jsx";
function BodyTable(props) {
  const [
    firstnumber,
    secondNumber,
    thirdNumber,
    sign,
    handleClickNumber,
    handleClickSign,
  ] = props;
  return (
    <tbody>
      <tr>
        <th>
          <Button onClick={handleClickNumber} number={firstnumber} />
        </th>
        <th>
          <Button onClick={handleClickNumber} number={secondNumber} />
        </th>
        <th>
          <Button onClick={handleClickNumber} number={thirdNumber} />
        </th>
        <th>
          <button onClick={() => handleClickSign(sign)}>Button {sign}</button>
        </th>
      </tr>
    </tbody>
  );
}
export default BodyTable;
