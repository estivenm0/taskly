import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { data: tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-2xl text-whi7te font-bold text-center">
        No tasks available
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
