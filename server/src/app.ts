import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import healthRouter from './routes/health.routes.js';

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to DevMind AI API',
  });
});

app.use('/api/v1/health', healthRouter);

export default app;