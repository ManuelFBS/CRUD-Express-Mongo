import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello World !!!</h1>');
});

router.get('/about', (req, res) => {
  res.send('about...');
});

export default router;