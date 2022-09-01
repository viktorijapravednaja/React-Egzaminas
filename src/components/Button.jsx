import React from "react";

import "./Button.css";

const Button = ({ text, icon, style }) => {
  return (
    <button className={style}>
      <img src={icon} alt="" />
      {text}
    </button>
  );
};

export default Button;
