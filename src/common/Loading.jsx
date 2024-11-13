import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Spinner animation="border" role="status" />
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
