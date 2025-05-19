export const getTaskId = (tasks) => {
  const nextId = tasks.reduce(
    (prevTask, currentTask) =>
      prevTask && prevTask.id > currentTask.id ? prevTask.id : currentTask.id,
    0
  );
  return nextId + 1;
};
