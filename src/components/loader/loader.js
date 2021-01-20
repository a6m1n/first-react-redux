import React from "react";

function createLoader() {
  return (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only"></span>
    </div>
  );
}

export default createLoader;
