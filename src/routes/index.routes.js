import { Router } from 'express';
import Task from '../models/Task';
import { renderTasks, createTask, about, renderTaskEdit, editTask } from '../controllers/task.controller.js';

const router = Router();

router.get('/', renderTasks);

router.post('/task/add', createTask);

router.get('/about', about);
//
router.get('/edit/:id', renderTaskEdit);

router.post('/edit/:id', editTask);

router.get('/del/:id', async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect('/');
});

router.get('/toggleDone/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect('/');
});

export default router;
