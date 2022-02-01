import { Controller, Get } from '@nestjs/common';
import { PingService } from '@server/modules/ping/ping.service';
import { PING_ROUTES } from '@shared/routes/ping.routes';

@Controller()
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get(PING_ROUTES.PING)
  async onPing() {
    return this.pingService.getPong();
  }
}
