export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add-task': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case 'edit-task': {
      return tasks.map((task) => {
        return task.id === action.id ? action.task : task;
      });
    }

    case 'delete-task': {
      return tasks.filter((task) => task.id !== action.id);
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}
