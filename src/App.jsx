import { useState } from 'react';
import Tasks from './components/Tasks';
import { initialTasks } from './data/initialTasks';

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: newTask,
        done: false,
      },
    ]);
  };

  const handleEditTask = (taskId, task) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.taskId) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  console.log('Current tasks:', tasks);

  return (
    <>
      {/* <div className="text-red-400 flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center min-h-[75vh]"> */}
      <div className="text-red-400 flex flex-col">
        <Tasks
          tasks={tasks}
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}
