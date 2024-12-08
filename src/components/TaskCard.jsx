import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-900 text-white p-4 rounded-md shadow-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 mt-2">{task.description}</p>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-600 px-4 py-2 mt-4 rounded-md hover:bg-red-400 transition-colors"
      >
        Delete Task
      </button>
    </div>
  );
}

export default TaskCard;
