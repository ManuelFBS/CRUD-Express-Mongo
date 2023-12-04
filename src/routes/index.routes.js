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

router.get('/edit/:id', async (req, res) => {
  const task = await Task.findById(req.params.id).lean();

  res.render('edit', { task });
});

router.post('/edit/:id', (req, res) => {
  console.log(req.body);

  res.send('received');
});

export default router;
