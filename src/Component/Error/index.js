import React from "react";

export const ErrorLabel = ({ mess }) => {
  if (mess) {
    return (
      <div class="alert alert-danger" role="alert">
        {mess}
      </div>
    );
  }

  return null;
};
