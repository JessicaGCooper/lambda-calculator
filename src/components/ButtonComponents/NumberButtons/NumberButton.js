import React from "react";

const NumberButton = props => {
  return (
    <button className="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.nButton}
    </button>
  );
};

export default NumberButton