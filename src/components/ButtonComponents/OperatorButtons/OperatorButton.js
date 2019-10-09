import React from "react";

const OperatorButton = props => {
  return (
    <button class ="operatorButton" /*onClick={() => props.setButtonOutput*/ />
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.oButton.char}
    </button>
  );
};

export default OperatorButton;