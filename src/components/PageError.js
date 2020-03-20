import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <p>
        <span role="img" aria-label="">
          ❌
        </span>
        {props.error.message}
        <span role="img" aria-label="">
          😱
        </span>
      </p>
    </div>
  );
}

export default PageError;
