import { app } from './app.js';

app.set('port', process.env.PORT || 7000);

app.listen(app.get('port'), () => {
  console.log('Server is running on port: ', app.get('port'));
});
