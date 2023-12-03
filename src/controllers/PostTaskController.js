import Task from '../config/database.js';

export const createTask = async (task) => {
  try {
    const newTask = await Task.save(task);

    return newTask;
  } catch (error) {
    throw error;
  }
};
