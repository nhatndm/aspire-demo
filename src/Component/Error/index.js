import React from "react";

export const ErrorLabel = ({ mess }) => {
  if (mess) {
    return (
      <div className="alert alert-danger" role="alert">
        {mess}
      </div>
    );
  }

  return null;
};
