import express from 'express';
import { createServer, Server } from 'http';

import Sockets from './sockets';

class App {
  public app: express.Application = express();

  public server: Server;

  public PORT = 8100;

  public sockets: Sockets;

  constructor() {
    this.server = createServer(this.app);
    this.sockets = new Sockets(this.app, this.server);
  }
}

export default new App();
