import React from "react";
import "./NoTasks.css";
import Button from "../Button/Button";
import noTasksImg from "../../assets/no-tasks.png";

const NoTasks = (props) => {
  return (
    <div className="noTasks">
      <img src="/images/no-tasks.png" alt="" />
      {/* <img src={noTasksImg} alt="" /> */}
      <h2>No Tasks Yet</h2>
      <p>You have no task created in your workspace yet.</p>
      <p>Get productive. Create a Task Now.</p>
      <Button text="Create a Task" onClickFunction={props.onClickFunction} />
    </div>
  );
};

export default NoTasks;
