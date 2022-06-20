import React from "react";
import buttonStyles from "./Button.module.css";

function Button({ text }) {
  return (
    <button className={ buttonStyles.paymentBtn }>{ text }</button>
  )
}

export default Button;