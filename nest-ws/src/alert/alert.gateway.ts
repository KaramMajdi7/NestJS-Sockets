import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/alert' })
export class AlertGateway {

  @WebSocketServer() server: Server;
  
  // private logger: Logger = new Logger('ChatGateway');

  // afterInit(server: any) {
  //   this.logger.log('Initialized!');
  // }

  sendToAll(msg: string) {
    this.server.emit('alertToClient', { type: 'alert', message: msg })
  }

  // @SubscribeMessage('alertToServer')
  // handleMessage(client: Socket, message: { sender: string, message: string }) {
  //   this.server.emit('alertToClient', message)
  // }
}
