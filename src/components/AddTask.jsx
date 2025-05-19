import { useState } from 'react';
import { useTasks, useTasksDispatch } from '../contexts/TasksProvider';
import { getTaskId } from '../utils/utils';

export default function AddTask() {
  const [newTask, setNewTask] = useState('');

  const tasks = useTasks();
  const dispatch = useTasksDispatch();

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
          if (newTask.length === 0) {
            alert('Task cannot be empty');
            return;
          }
          dispatch({
            type: 'add-task',
            id: getTaskId(tasks),
            text: newTask,
          });

          setNewTask('');
        }}
      >
        Add Task
      </button>
    </>
  );
}
