import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import { connectMongoDb } from './db/connectMongoDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRouter from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(logger);

app.use(notesRouter);

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDb();

app.listen(PORT, () => {
  console.log(`App listen PORT: ${PORT}`);
});
