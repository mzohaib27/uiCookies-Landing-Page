import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, styles, bgColor, text }) => {
  return (
    <div>
      <Link to={path}>
        <button className={`${styles} ${bgColor} px-6 py-4 text-white`}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
