import React from "react";
import "./index.css";

const Circle = ({ onClick, completed, id }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`status ${completed ? "green" : "red"}`}
    ></div>
  );
};

export default Circle;
