import express from 'express';

const app = express();

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('Hello world!');
});

app.listen(5000);
