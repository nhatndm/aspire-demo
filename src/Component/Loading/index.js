import React from "react";
import "./index.scss";
import { ReactComponent as LoadingIcon } from "../../assets/loadingicon.svg";

export default () => {
  return (
    <div className="loading">
      <LoadingIcon className="icon-60" />
    </div>
  );
};
