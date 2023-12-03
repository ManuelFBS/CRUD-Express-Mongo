import { Router } from 'express';
import { postTaskHandler } from '../../handlers/PostTaskHandler';

export const routerTasks = Router();

routerTasks.post('/add', postTaskHandler);
