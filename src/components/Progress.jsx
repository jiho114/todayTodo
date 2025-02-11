import React from "react";
import { Progress } from "antd";

const ProgressBar = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const percentage =
    totalTodos === 0 ? 0 : Math.floor((completedTodos / totalTodos) * 10) * 10;

  return (
    <div className="progress">
      <div className="progress-bar">
        <Progress strokeWidth={15} percent={percentage} />
      </div>
    </div>
  );
};

export default ProgressBar;
