import React from "react";

const SpecialButton = props => {
  return (
    <button className="specialButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.sButton}
    </button>
  );
};

export default SpecialButton;
