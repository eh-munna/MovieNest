import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Task({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          onChange={(e) =>
            onEditTask(task.id, { ...task, text: e.target.value })
          }
          className="mr-2"
          type="text"
          value={task.text}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className="mr-2">{task.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onEditTask(task.id, { ...task, done: e.target.checked });
          }}
        />
        {taskContent}
        <button className="ml-2" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </li>
    </>
  );
}

// Props Validation

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
