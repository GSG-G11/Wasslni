import express from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import { clientError, serverError } from './controllers';
import router from './routes';

dotenv.config();

const app = express();
const { env: { PORT, NODE_ENV } } = process;

app.set('port', PORT || 5000);
app.use([express.json(), express.urlencoded({ extended: true }), cookieParser()]);

app.use('/api/v1', router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}
app.use(clientError);
app.use(serverError);

export default app;
