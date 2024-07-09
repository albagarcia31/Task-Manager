import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  // const [taskName, setTaskName] = useState("");
  // const [taskDate, setTaskDate] = useState("");
  // const [taskDesc, setTaskDesc] = useState("");
  const [taskData, setTaskData] = useState({ name: "", date: "", desc: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleTaskName = (event) => {
    // setTaskName(event.target.value);
    setTaskData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleTaskDate = (event) => {
    // setTaskDate(event.target.value);
    setTaskData((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };
  const handleTaskDesc = (event) => {
    // setTaskDesc(event.target.value);
    setTaskData((prevState) => ({
      ...prevState,
      desc: event.target.value,
    }));
  };
  // console.log(taskName, taskDate, taskDesc);

  // const newTask = {
  //   name: taskName,
  //   date: taskDate,
  //   desc: taskDesc,
  // };

  const resetState = () => {
    // setTaskName("");
    // setTaskDate("");
    // setTaskDesc("");
    setTaskData({ name: "", date: "", desc: "" });
  };

  const validateForm = () => {
    let errors = {};

    if (!taskData.name) {
      errors.nameError = "Task name is requered!";
    }

    if (!taskData.date) {
      errors.dateError = "Task date is requered!";
    }

    if (!taskData.desc) {
      errors.descError = "Task description is requered!";
    }

    setFormErrors({ ...errors });

    let isValid = Object.keys(errors).length < 1; //true nu avem erori false avem erori

    return isValid;
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    let isValid = validateForm();
    validateForm();
    // props.addTask(newTask);

    if (isValid) {
      props.addTask(taskData);
      resetState();
      if (props.closeModal) {
        props.closeModal();
      }
    } else {
      console.log("Avem erori");
    }
  };

  return (
    <div className="createTaskForm">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          onChange={handleTaskName}
          // value={taskName}
          value={taskData.name}
          //required
          className={formErrors.nameError && "input-error"}
        />
        {formErrors.nameError && (
          <span className="error-message">{formErrors.nameError}</span>
        )}

        <label htmlFor="taskDate">Due Date</label>
        <input
          type="date"
          id="taskDate"
          onChange={handleTaskDate}
          // value={taskDate}
          value={taskData.date}
          className={formErrors.dateError && "input-error"}
        />
        {formErrors.dateError && (
          <span className="error-message">{formErrors.dateError}</span>
        )}

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          // value={taskDesc}
          value={taskData.desc}
          className={formErrors.descError && "input-error"}
        ></textarea>
        {formErrors.descError && (
          <span className="error-message">{formErrors.descError}</span>
        )}
        <Button text="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
