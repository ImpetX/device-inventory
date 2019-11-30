import express from 'express';
import Db from './db';

const db = new Db();

db.connect()
  // tslint:disable-next-line: no-console
  .then(() => console.log('database is up'))
  // tslint:disable-next-line: no-console
  .catch(err => console.error(err));

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(5000);
