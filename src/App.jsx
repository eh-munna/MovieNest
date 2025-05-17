import { useReducer } from 'react';
import Tasks from './components/Tasks';
import { initialTasks } from './data/initialTasks';
import tasksReducer from './reducers/tasksReducer';

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const getTaskId = (tasks) => {
    const nextId = tasks.reduce((prevTask, currentTask) =>
      prevTask && prevTask.id > currentTask.id ? prevTask.id : currentTask.id
    );
    return nextId + 1;
  };

  const handleAddTask = (newTask) => {
    dispatch({
      type: 'add-task',
      id: getTaskId(tasks),
      text: newTask,
    });
  };

  const handleEditTask = (taskId, task) => {
    dispatch({
      type: 'edit-task',
      id: taskId,
      task: task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'delete-task',
      id: taskId,
    });
  };

  console.log('Current tasks:', tasks);

  return (
    <>
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
