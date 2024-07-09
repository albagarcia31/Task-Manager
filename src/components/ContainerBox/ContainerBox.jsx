import { useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";
import ControlPanel from "../ControlPanel/ControlPanel";

const ContainerBox = () => {
  const data = [
    {
      taskName: "task1",
      taskDate: "12-12-2024",
      taskDescription: "desc1",
      taskStatus: "Todo",
    },

    {
      taskName: "task2",
      taskDate: "12-12-2024",
      taskDescription: "desc2",
      taskStatus: "Pending",
    },

    {
      taskName: "task3",
      taskDate: "12-12-2024",
      taskDescription: "desc3",
      taskStatus: "In Progress",
    },

    {
      taskName: "task4",
      taskDate: "12-12-2024",
      taskDescription: "desc4",
      taskStatus: "Completed",
    },
  ];
  const [taskList, setTaskList] = useState(data);
  const [isMOpen, setIsMOpen] = useState(false);

  const openModal = () => setIsMOpen(true);
  const closeModal = () => setIsMOpen(false);

  const onAddTask = (task) => {
    setTaskList([
      ...taskList,
      {
        taskName: task.name,
        taskDate: task.date,
        taskDesc: task.desc,
        //sau spread ...task
        taskStatus: "Todo",
      },
    ]);
  };
  console.log(taskList);
  return (
    <div className="container-box">
      <ControlPanel onClickFunction={openModal} />
      {/* randare conditionala */}
      {taskList.length > 0 ? (
        <div className="tasks">
          {taskList.map((task, index) => (
            <TaskCard
              name={task.taskName}
              status={task.taskStatus}
              desc={task.taskDesc}
              date={task.taskDate}
              key={index}
            />
          ))}
        </div>
      ) : (
        <NoTasks onClickFunction={openModal} />
      )}

      {/* <Modal /> */}
      <Modal isOpen={isMOpen} onClose={closeModal}>
        <CreateTaskForm addTask={onAddTask} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ContainerBox;
