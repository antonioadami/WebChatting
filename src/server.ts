import app from './app';

const port = app.PORT;

app.server.listen(port, function () {
  console.log(`server running in port ${port}`);
});
