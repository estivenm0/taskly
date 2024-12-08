import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title.trim(), description.trim());
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto font-bold">
      <form onSubmit={handleSubmit} className="bg-slate-600 p-5 mb-4">
        <h1 className="text-2xl text-white mb-3">Add Task</h1>
        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-3"
          required
        />
        <textarea
          cols="30"
          rows="3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-3"
          required
        />
        <button type="submit" className="bg-indigo-500 text-white px-3 py-1">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
