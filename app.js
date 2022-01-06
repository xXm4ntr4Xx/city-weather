import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import  env  from'env-var';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import cityRouter  from './routes/cities.js';





// Read the MY_VAR entry that dotenv created

dotenv.config()
env.get('MY_VAR').asString()


const app = express();
const port = 3000;

dotenv.config()
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use('/cities', cityRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})




app.listen(process.env.PORT || port);
export default app;
