import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    // Con esta función, se le agrega +1 al index...
    const tasksWithIncrementedIndex = tasks.map((task, index) => {
      return { ...task, displayIndex: index + 1 };
    });

    // res.render('index', { tasks: tasks });
    res.render('index', { tasks: tasksWithIncrementedIndex });
  } catch (error) {
    console.log(error);
  }
});

router.post('/task/add', async (req, res) => {
  const task = Task(req.body);

  await task.save();

  res.redirect('/');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

export default router;
