import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTasksDispatch } from '../contexts/TasksProvider';

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useTasksDispatch();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          onChange={(e) => {
            if (e.target.value.length === 0) {
              alert('Task cannot be empty');
              return;
            }
            dispatch({
              type: 'edit-task',
              id: task.id,
              task: { ...task, text: e.target.value },
            });
          }}
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
            dispatch({
              type: 'edit-task',
              id: task.id,
              task: { ...task, done: e.target.checked },
            });
          }}
        />
        {taskContent}
        <button
          className="ml-2"
          onClick={() =>
            dispatch({
              type: 'delete-task',
              id: task.id,
            })
          }
        >
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
};
