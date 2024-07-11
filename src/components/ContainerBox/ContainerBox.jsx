import { useEffect, useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";
import ControlPanel from "../ControlPanel/ControlPanel";
import { useTaskContext } from "../../context/TaskContext";

const ContainerBox = () => {
  const [isMOpen, setIsMOpen] = useState(false);
  const { taskList, setTaskList } = useTaskContext();

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

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
