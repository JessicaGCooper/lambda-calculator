import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [functionButton, setFunctionButton] = useState(operators)
  return (
    <div className="button_container operatorContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {functionButton.map((button, index) => (
         <OperatorButton key={index} oButton={button} />
       ))}
    </div>
  );
};

export default Operators
