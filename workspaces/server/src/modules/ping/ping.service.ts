import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  getPong() {
    return {
      success: true,
      answer: 'PONG',
    };
  }
}
