import React from "react";
import Circle from "../Circle/Circle";
import "./index.css";

const Todo = ({ title, id, completed, onCompleted }) => {
  return (
    <div>
      <div>
        {title} - {id}
      </div>
      <Circle id={id} completed={completed} onClick={onCompleted} />
    </div>
  );
};

export default Todo;
