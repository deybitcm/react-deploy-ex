import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const tasksData = data[1];

  function createTask(task) {
    const length = data[0].length;
    setTasks([
      ...tasks,
      {
        id: length,
        title: task.title,
        description: task.description,
      },
    ]);
    data[0].length += 1;
  }

  function deleteTask(idTask) {
    setTasks(tasks.filter((task) => task.id !== idTask));
  }

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
