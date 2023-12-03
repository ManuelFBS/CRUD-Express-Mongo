import { createTask } from '../controllers/PostTaskController.js';

export const postTaskHandler = async (req, res) => {
  try {
    const task = req.body;
    const newTask = await createTask(task);

    res.status(201).json({
      message: 'La tarea ha sido registrada exitosamente...!!!',
      data: newTask
    });

    res.redirect('/');
  } catch (error) {
    throw error;
  }
};
