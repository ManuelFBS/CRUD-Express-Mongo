import { Router } from 'express';
import Task from '../models/Task';
import { renderTasks, createTask } from '../controllers/task.controller.js';

const router = Router();

router.get('/', renderTasks);

router.post('/task/add', createTask);

router.get('/about', (req, res) => {
  res.render('about');
});
//
router.get('/edit/:id', async (req, res) => {
  const task = await Task.findById(req.params.id).lean();

  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const taskUpdated = req.body;

  await Task.findByIdAndUpdate(id, taskUpdated);

  res.redirect('/');
});

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
