import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton"

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialButtons, setSpecialButtons] = useState(specials);

  return (
    <div className="button_container specialsContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialButtons.map((button, index) => (
         <SpecialButton key={index} sButton={button} />
      ))}  
    </div>
  );
};

export default Specials
