import React from "react";
import "./Badge.css";
import { useTaskContext } from "../../context/TaskContext";

const Badge = (props) => {
  const { taskList, setTaskList } = useTaskContext;
  const badgeColor = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "In Progress":
        return "blue";
      case "Pending":
        return "yellow";
      case "Completed":
        return "green";
      default:
        return "grey";
    }
  };

  const handleChangeStatus = (e) => {
    setTaskList(
      taskList.map((task) =>
        task.id === props.id ? { ...task, taskStatus: e.target.value } : task
      )
    );
    console.log(taskList);
  };

  return (
    <select
      className={`status ${badgeColor()}`}
      value={props.status}
      onChange={handleChangeStatus}
    >
      <option value="Todo" className="status grey">
        Todo
      </option>
      <option value="In Progress" className="status blue">
        In Progress
      </option>
      <option value="Pending" className="status yellow">
        Pending
      </option>
      <option value="Completed" className="status green">
        Completed
      </option>
    </select>
  );
};

export default Badge;
