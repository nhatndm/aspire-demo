import React from "react";
import "./index.scss";

export default ({ label, value, handleChange, isPassword }) => {
  return (
    <div className="input-group">
      <p className="label">{label}</p>
      <input
        type={isPassword ? "password" : "text"}
        className="input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
