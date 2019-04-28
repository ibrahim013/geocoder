import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from '../routes';
import { MONGODB_CONFIG } from '../../config';
import { Server } from 'net';

const app = express();
const port = process.env.port || 8000;
const db = MONGODB_CONFIG.mongodbURI;

//  middleware configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// database connection
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('database connected sucessfully'))
  .catch(err => console.log(err));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/v1', routes);
app.use('/', (req, res) => res.status(200).json({
  msg: 'this an api enpoint'
}));

app.listen(port, () => console.log(`server runing on ${port}`));

export default Server;