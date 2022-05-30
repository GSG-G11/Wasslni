import express from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { clientError, serverError } from './controllers';
import router from './routes';

dotenv.config();
const { env: { PORT, NODE_ENV, SENTRY_DSN } } = process;
const app = express();

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.set('port', PORT || 5000);
app.use([express.json({ limit: '5mb' }), express.urlencoded({ limit: '5mb', extended: true }), cookieParser()]);
app.use('/api/v1', router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}
app.use(clientError);
app.use(Sentry.Handlers.errorHandler());
app.use(serverError);

export default app;
