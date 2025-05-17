import PropTypes from 'prop-types';
import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState('');
  return (
    <>
      <input
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        className="mr-2"
        type="text"
        placeholder="Add a new task"
      />
      <button
        onClick={() => {
          setNewTask('');
          onAddTask(newTask);
        }}
      >
        Add Task
      </button>
    </>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
