import { useTasks } from '../contexts/TasksProvider';
import AddTask from './AddTask';
import Task from './Task';

export default function Tasks() {
  const tasks = useTasks();

  return (
    <>
      <AddTask />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
