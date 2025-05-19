import Tasks from './components/Tasks';
import TasksProvider from './contexts/TasksProvider';

export default function App() {
  

  // const handleAddTask = (newTask) => {
  //   dispatch({
  //     type: 'add-task',
  //     id: getTaskId(tasks),
  //     text: newTask,
  //   });
  // };

  // const handleEditTask = (taskId, task) => {
  //   dispatch({
  //     type: 'edit-task',
  //     id: taskId,
  //     task: task,
  //   });
  // };

  // const handleDeleteTask = (taskId) => {
  //   dispatch({
  //     type: 'delete-task',
  //     id: taskId,
  //   });
  // };

  return (
    <>
      <div className="text-red-400 flex flex-col">
        <TasksProvider>
          <Tasks />
        </TasksProvider>
      </div>
    </>
  );
}
