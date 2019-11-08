import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton"

//Import your array data to from the provided data file
import { operators } from "../../../data"


const Operators = props => {
  // STEP 2 - add the imported data to state
  const [functionButton, setFunctionButton] = useState(operators);
 
  return (
    <div className="button_container operatorContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {functionButton.map((operator, index) => (
         <OperatorButton 
          key={index} 
          operator={operator} 
          displayResult = {props.displayResult} 
          setDisplayResult={props.setDisplayResult} />
       ))}
    </div>
  );
};

export default Operators
