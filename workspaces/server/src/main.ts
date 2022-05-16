import fastifyCookie from '@fastify/cookie';
import { Logger, ValidationPipe } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import type { NestFastifyApplication as App } from '@nestjs/platform-fastify';
import { FastifyAdapter as Adapter } from '@nestjs/platform-fastify';
import AppConfig from '@server/app.config';
import { AppModule } from '@server/app.module';
import { PrismaService } from '@server/prisma.service';

declare const module: any;

(async () => {
  const app = await NestFactory.create<App>(AppModule, new Adapter());
  const appConfig = app.get<ConfigType<typeof AppConfig>>(AppConfig.KEY);
  const { appPort, appSecret } = appConfig;

  app
    .useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
      })
    )
    .setGlobalPrefix('/api')
    .register(fastifyCookie, {
      secret: appSecret,
      prefix: '__Host-',
    });

  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(appPort, '0.0.0.0');
  const mode = process.env.NODE_ENV || 'development';
  Logger.log(
    `🚀 Server is running in ${mode} mode on port ${appPort}`,
    'Bootstrap'
  );

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
})().catch((error) => Logger.error(error, 'Bootstrap'));
