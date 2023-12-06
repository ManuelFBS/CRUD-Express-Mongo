import express from 'express';
import './config/database.js';
import exphbs from 'express-handlebars';
import router from './routes/index.routes.js';
import path from 'path';
import morgan from 'morgan';

export const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
  '.hbs',
  exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs'
  })
);

app.set('view engine', '.hbs');

// Middlewares --------------------------------------------------------------------------------------------
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes -----------------------------------------------------------------------------------------------------
app.use('/', router);
app.use('*', (req, res) => {
  res.status(404).json({
    message: '404 - Not found...'
  });
});

// Static files ----------------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
