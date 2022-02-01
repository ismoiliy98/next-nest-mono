import { Module } from '@nestjs/common';
import { PingController } from '@server/modules/ping/ping.controller';
import { PingService } from '@server/modules/ping/ping.service';

@Module({
  providers: [PingService],
  controllers: [PingController],
})
export class PingModule {}
