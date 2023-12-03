import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const { createServer } = require("http");
  const { Server } = require("socket.io");
  const { instrument } = require("@socket.io/admin-ui");

  const httpServer = createServer();

  const io = new Server(httpServer, {
    cors: {
      origin: ["https://admin.socket.io"],
      credentials: true
    }
  });
  // const adminNamespace = io.of("/chat");
  instrument(io, {
    namespaceName: "/chat",

    mode: "development",

    auth: false,

  });

  httpServer.listen(4000);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  await app.listen(3000);
}
bootstrap();
