import express from 'express';
import session from 'express-session';
import cors = require('cors');
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import router from './routes/router';

// dotenv
dotenv.config();

// express
const app = express();
app.use(express.json());
const port = process.env.SERVER_PORT;
if (typeof port === 'string') {
  app.listen(port, () => console.warn(`Server is listening on port ${port}!`));
} else {
  console.error('Server port not specified!');
}

// mongoose
const uri = process.env.MONGODB_URI;
if (typeof uri === 'string') {
  mongoose
    .connect(uri)
    .then(() => {
      console.warn('Successfully connected to the database.');
    })
    .catch((error) => {
      console.warn(
        'An error occurred while connecting to the database: ',
        error,
      );
    });
} else {
  console.error('Server connection string URI not specified!');
}

// express-session
const secret = process.env.EXPRESS_SESSION_SECRET;
app.set('trust proxy', 1);
if (typeof secret === 'string') {
  app.use(
    session({
      secret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
      },
    }),
  );
}

// cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    // preflightContinue: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }),
);

// router
app.use('/', router);
