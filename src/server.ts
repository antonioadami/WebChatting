import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('Back-end started in 3333 port!');
});
