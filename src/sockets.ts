import * as socketIo from 'socket.io';
import { Server } from 'http';
import express from 'express';

class Sockets {
  private io!: SocketIO.Server;

  constructor(private app: express.Application, private server: Server) {
    this.sockets();
    this.listen();
  }

  private sockets() {
    this.io = socketIo.listen(this.server);
  }

  private listen(): void {
    this.io.on('connection', (socket: socketIo.Socket) => {
      console.log('a user connected');

      socket.on('chat message', function (msg) {
        console.log(`message: ${msg}`);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
}

export default Sockets;
