import express from 'express';
import exphbs from 'express-handlebars';
import router from './routes/index.routes.js';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 7000);

app.set('views', path.join(__dirname, 'views'));

app.engine(
  '.hbs',
  exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs'
  })
);

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
