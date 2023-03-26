import express from 'express';
import dotenv from 'dotenv';
import connctDB from './config/db.js';
import productRouter from './routes/productRouter.js';

const app = express();

dotenv.config();
connctDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRouter);

app.listen(
  PORT,
  console.log(`APP is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
