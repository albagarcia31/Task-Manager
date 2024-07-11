// import React, { useContext } from "react";
import { useTaskContext } from "../../context/TaskContext";
import FilterItem from "../FilterItem/FilterItem";
// import { TaskContext } from "../../App";
import "./TaskFilter.css";

const TaskFilter = () => {
  const filterStatus = ["All Tasks", "Pending", "In Progress", "Completed"];
  //   const taskContext = useContext(TaskContext);
  //   console.log(taskContext);
  const { taskList, selectedStatus, setSelectedStatus } = useTaskContext();
  const getCountByStatus = (status) => {
    if (status === "All Tasks") {
      return taskList.length;
    }
    const filterList = taskList.filter((task) => task.taskStatus === status);
    return filterList.length;
  };
  return (
    <div className="content-filter">
      {filterStatus.map((item, index) => (
        <FilterItem
          key={index}
          status={item}
          count={getCountByStatus(item)}
          isActive={selectedStatus === item}
          onStatusClick={() => setSelectedStatus(item)}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
