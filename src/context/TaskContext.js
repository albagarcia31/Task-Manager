import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const data = [
    {
      id: "a9b1deb4d-3b7d",
      taskName: "task1",
      taskDate: "12-12-2024",
      taskDescription: "desc1",
      taskStatus: "Todo",
    },

    {
      id: "b9b1deb4d-3b7d",
      taskName: "task2",
      taskDate: "12-12-2024",
      taskDescription: "desc2",
      taskStatus: "Pending",
    },

    {
      id: "c9b1deb4d-3b7d",
      taskName: "task3",
      taskDate: "12-12-2024",
      taskDescription: "desc3",
      taskStatus: "In Progress",
    },

    {
      id: "d9b1deb4d-3b7d",
      taskName: "task4",
      taskDate: "12-12-2024",
      taskDescription: "desc4",
      taskStatus: "Completed",
    },
  ];
  const [taskList, setTaskList] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : data;
  });
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");
  return (
    <TaskContext.Provider
      value={{ taskList, setTaskList, selectedStatus, setSelectedStatus }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
