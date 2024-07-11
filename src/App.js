import ContainerBox from "./components/ContainerBox/ContainerBox";
import { TaskProvider } from "./context/TaskContext";
// import { createContext } from "react";
// export const TaskContext = createContext();

function App() {
  return (
    <div className="App">
      {/* {<TaskContext.Provider value={[1, 2, 3]}>{} */}
      <TaskProvider>
        <ContainerBox />
      </TaskProvider>
      {/* </TaskContext.Provider> */}
    </div>
  );
}

export default App;
