import express from 'express';
import Db from './db';

const db = new Db();

// tslint:disable-next-line: no-console
db.connect().then(() => console.log('database is up'));

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(5000);
