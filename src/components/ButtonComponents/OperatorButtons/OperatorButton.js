import React from "react";

const OperatorButton = props => {
  return (
    <button class ="operatorButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.oButton.value}
    </button>
  );
};

export default OperatorButton;