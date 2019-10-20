import React from "react";
import "./index.scss";

export default ({ title, onClick }) => {
  return (
    <button className="button-com" onClick={onClick}>
      {title}
    </button>
  );
};
