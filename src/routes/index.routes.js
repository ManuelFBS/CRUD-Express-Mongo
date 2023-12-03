import { Router } from 'express';
// import Task from '../models/Task';
import { routerTasks } from './tasks/tasksRoutes';

const router = Router();

const prefix = '/tasks';

router.get('/', (req, res) => {
  res.render('index');
});

// router.post('/task/add', async (req, res) => {
//   const task = Task(req.body);

//   await task.save();

//   res.redirect('/');
// });

router.post(`${prefix}`, routerTasks);

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

export default router;
