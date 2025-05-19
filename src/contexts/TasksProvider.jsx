/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { initialTasks } from '../data/initialTasks';
import tasksReducer from '../reducers/tasksReducer';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// Props Validation
TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
