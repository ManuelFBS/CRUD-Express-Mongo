import express from 'express';
import router from './routes/index.routes.js';

const app = express();

app.set('port', process.env.PORT || 7000);

// Routes -----------------------------------------------------------------------------------------------------
app.use('/', router);
app.use('*', (req, res) => {
  res.status(404).json({
    message: '404 - Not found...'
  });
});

app.listen(app.get('port'), () => {
  console.log('Server is running on port: ', app.get('port'));
});
