import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {
  @Get('/status')
  encode(): string {
    return 'Success';
  }
}
