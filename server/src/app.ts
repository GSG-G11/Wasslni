import express from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { clientError, serverError } from './controllers';
import router from './routes';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 5000);
app.use([express.json(), express.urlencoded({ extended: true }), cookieParser()]);

app.use('/api/v1', router);

app.use(clientError);
app.use(serverError);

export default app;
