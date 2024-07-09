import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="primaryBtn" onClick={props.onClickFunction}>
      {props.text}
    </button>
  );
};

export default Button;
