import AddTask from './AddTask';
import Task from './Task';

import PropTypes from 'prop-types';

export default function Tasks({ tasks, onAddTask, onEditTask, onDeleteTask }) {
  return (
    <>
      <AddTask onAddTask={onAddTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </>
  );
}

// Props Validation
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onAddTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
