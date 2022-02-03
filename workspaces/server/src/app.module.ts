import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import AppConfig from '@server/app.config';
import { AppService } from '@server/app.service';
import { PingModule } from '@server/modules/ping/ping.module';
import { validateEnv } from '@server/utils/validation.utils';

@Module({})
export class AppModule {
  public static init(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
          cache: true,
          load: [AppConfig],
          validate: validateEnv,
        }),
        EventEmitterModule.forRoot(),
        PingModule,
      ],
      providers: [AppService],
    };
  }
}
