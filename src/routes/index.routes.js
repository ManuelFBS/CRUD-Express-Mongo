import { Router } from 'express';
import { renderTasks, createTask, about, renderTaskEdit, editTask, deleteTask, taskToggleDone } from '../controllers/task.controller.js';

const router = Router();

router.get('/', renderTasks);

router.post('/task/add', createTask);

router.get('/about', about);
//
router.get('/edit/:id', renderTaskEdit);

router.post('/edit/:id', editTask);

router.get('/del/:id', deleteTask);

router.get('/toggleDone/:id', taskToggleDone);

export default router;
